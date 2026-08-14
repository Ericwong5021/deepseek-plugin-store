import { homedir } from "node:os";
import { isAbsolute, join, resolve } from "node:path";
//#region lib/types/index.js
const inject = ["commands", "subprocess"];
const installSpecPattern = /^github:[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+(?:#[A-Za-z0-9._/-]+)?$/u;
const profilePattern = /^[A-Za-z0-9._-]+$/u;
function dshHome() {
	const configured = process.env.DSH_HOME?.trim();
	if (configured === void 0 || configured === "") return join(homedir(), ".dsh");
	return isAbsolute(configured) ? configured : resolve(configured);
}
function decodeRequest(rawInput) {
	const token = rawInput.trim();
	if (!/^[A-Za-z0-9_-]+$/u.test(token)) throw new Error("安装请求格式无效");
	let payload;
	try {
		payload = JSON.parse(Buffer.from(token, "base64url").toString("utf8"));
	} catch {
		throw new Error("安装请求无法解析");
	}
	if (typeof payload !== "object" || payload === null || Array.isArray(payload)) throw new Error("安装请求内容无效");
	const record = payload;
	const profile = record.profile;
	const specs = record.specs;
	if (typeof profile !== "string" || !profilePattern.test(profile)) throw new Error("profile 名称无效");
	if (!Array.isArray(specs) || specs.length < 1 || specs.length > 20 || !specs.every((spec) => typeof spec === "string" && installSpecPattern.test(spec))) throw new Error("购物车中包含不受支持的插件来源");
	return {
		profile,
		specs: [...new Set(specs)]
	};
}
async function installPlugins(ctx, rawInput) {
	const { profile, specs } = decodeRequest(rawInput);
	const entry = process.argv[1];
	if (entry === void 0 || entry === "") throw new Error("无法定位当前 DSH 命令入口");
	const handle = ctx.subprocess.spawn({
		argv: [
			process.execPath,
			entry,
			"plugin",
			"--profile",
			profile,
			"add",
			...specs
		],
		cwd: process.cwd(),
		stdio: {
			stdin: "ignore",
			stdout: { maxBytes: 16384 },
			stderr: { maxBytes: 16384 }
		},
		graceMs: 5e3,
		env: { DSH_HOME: dshHome() }
	});
	const outcome = await handle.done;
	const stdout = handle.collected.stdout?.readFrom(0).text.trim() ?? "";
	const stderr = handle.collected.stderr?.readFrom(0).text.trim() ?? "";
	if (outcome.exitCode !== 0) throw new Error(stderr || stdout || `dsh plugin 安装失败（退出码 ${String(outcome.exitCode)}）`);
	return {
		kind: "success",
		text: `已将 ${String(specs.length)} 个插件安装到 ${profile} profile`
	};
}
function apply(ctx) {
	const host = ctx;
	host.commands.register({
		name: "plugin-store-install",
		description: "Install selected Plugin Store plugins into the active DSH profile",
		recordInput: false,
		handler: (invocation) => installPlugins(host, invocation.rawInput)
	});
}
//#endregion
export { apply, inject };
