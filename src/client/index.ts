import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type {} from '@deepseek-ai/dsh-client-ui-sidebar/client'
import type { StoreFace } from './types.ts'
import { StoreTrigger } from './Store.tsx'

export const inject = ['slots', 'sessions']

export function apply(ctx: ClientContext): void {
  ctx.slots.inject('sidebar.footer.action', () => ctx.slots.register({
    name: 'sidebar.footer.action',
    id: 'plugin-store',
    order: 70,
    inject: (): StoreFace => ({
      openSession: (sessionId) => { ctx.sessions.open(sessionId) },
      installPlugins: async (specs) => {
        const sessionId = ctx.sessions.list.getSnapshot().current
        if (sessionId === undefined) throw new Error('请先打开一个 DSH 会话，再安装插件')
        const binding = ctx.sessions.binding(sessionId)
        if (binding === undefined) throw new Error('当前 DSH 会话尚未就绪')
        const payload = JSON.stringify({ profile: 'web', specs })
        const encoded = btoa(payload).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/u, '')
        const result = await binding.session.command(`/plugin-store-install ${encoded}`)
        if (!result.ok) throw new Error(result.error.message)
        if (!result.value.matched) throw new Error('当前 DSH 未提供插件安装命令')
      },
    }),
  }, StoreTrigger))
}
