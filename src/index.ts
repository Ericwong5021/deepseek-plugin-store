import { homedir } from 'node:os'
import { isAbsolute, resolve, join } from 'node:path'
import type { Context } from '@deepseek-ai/cordis'

interface CommandInvocation {
  readonly rawInput: string
}

interface CommandResult {
  readonly kind: 'success' | 'error'
  readonly text: string
}

interface CommandDefinition {
  readonly name: string
  readonly description: string
  readonly recordInput?: boolean
  readonly handler: (invocation: CommandInvocation) => CommandResult | Promise<CommandResult>
}

interface SubprocessHandle {
  readonly collected: {
    readonly stdout?: { readFrom: (offset: number) => { text: string } }
    readonly stderr?: { readFrom: (offset: number) => { text: string } }
  }
  readonly done: Promise<{ exitCode: number | null; signal: string | null }>
}

interface HostContext extends Context {
  readonly commands: { register: (definition: CommandDefinition) => () => void }
  readonly subprocess: {
    spawn: (spec: {
      argv: readonly string[]
      cwd: string
      stdio: {
        stdin: 'ignore'
        stdout: { maxBytes: number }
        stderr: { maxBytes: number }
      }
      graceMs: number
      env: Record<string, string>
    }) => SubprocessHandle
  }
}

export const inject = ['commands', 'subprocess']

const installSpecPattern = /^github:[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+(?:#[A-Za-z0-9._/-]+)?$/u
const profilePattern = /^[A-Za-z0-9._-]+$/u

function dshHome(): string {
  const configured = process.env.DSH_HOME?.trim()
  if (configured === undefined || configured === '') return join(homedir(), '.dsh')
  return isAbsolute(configured) ? configured : resolve(configured)
}

function decodeRequest(rawInput: string): { profile: string; specs: string[] } {
  const token = rawInput.trim()
  if (!/^[A-Za-z0-9_-]+$/u.test(token)) throw new Error('安装请求格式无效')
  let payload: unknown
  try {
    payload = JSON.parse(Buffer.from(token, 'base64url').toString('utf8'))
  } catch {
    throw new Error('安装请求无法解析')
  }
  if (typeof payload !== 'object' || payload === null || Array.isArray(payload)) throw new Error('安装请求内容无效')
  const record = payload as Record<string, unknown>
  const profile = record.profile
  const specs = record.specs
  if (typeof profile !== 'string' || !profilePattern.test(profile)) throw new Error('profile 名称无效')
  if (!Array.isArray(specs) || specs.length < 1 || specs.length > 20 || !specs.every(spec => typeof spec === 'string' && installSpecPattern.test(spec))) {
    throw new Error('购物车中包含不受支持的插件来源')
  }
  return { profile, specs: [...new Set(specs)] }
}

async function installPlugins(ctx: HostContext, rawInput: string): Promise<CommandResult> {
  const { profile, specs } = decodeRequest(rawInput)
  const entry = process.argv[1]
  if (entry === undefined || entry === '') throw new Error('无法定位当前 DSH 命令入口')
  const handle = ctx.subprocess.spawn({
    argv: [process.execPath, entry, 'plugin', '--profile', profile, 'add', ...specs],
    cwd: process.cwd(),
    stdio: {
      stdin: 'ignore',
      stdout: { maxBytes: 16 * 1024 },
      stderr: { maxBytes: 16 * 1024 },
    },
    graceMs: 5000,
    env: { DSH_HOME: dshHome() },
  })
  const outcome = await handle.done
  const stdout = handle.collected.stdout?.readFrom(0).text.trim() ?? ''
  const stderr = handle.collected.stderr?.readFrom(0).text.trim() ?? ''
  if (outcome.exitCode !== 0) throw new Error(stderr || stdout || `dsh plugin 安装失败（退出码 ${String(outcome.exitCode)}）`)
  return { kind: 'success', text: `已将 ${String(specs.length)} 个插件安装到 ${profile} profile` }
}

export function apply(ctx: Context): void {
  const host = ctx as HostContext
  host.commands.register({
    name: 'plugin-store-install',
    description: 'Install selected Plugin Store plugins into the active DSH profile',
    recordInput: false,
    handler: invocation => installPlugins(host, invocation.rawInput),
  })
}
