import { StoreTrigger } from "./Store.js";
export const inject = ['slots', 'sessions', 'connection'];
export function apply(ctx) {
    const connection = ctx.get('connection');
    const connectionStatus = {
        getSnapshot: () => connection?.hostDescription.getSnapshot() !== undefined,
        subscribe: (listener) => connection?.hostDescription.subscribe(listener) ?? (() => { }),
    };
    const disconnected = () => new Error('DSH 连接已断开，请重新启动 DSH 后重试');
    ctx.slots.inject('sidebar.footer.action', () => ctx.slots.register({
        name: 'sidebar.footer.action',
        id: 'plugin-store',
        order: 70,
        inject: () => ({
            connectionStatus,
            openSession: (sessionId) => { ctx.sessions.open(sessionId); },
            installPlugins: async (specs) => {
                if (!connectionStatus.getSnapshot())
                    throw disconnected();
                const sessionId = ctx.sessions.list.getSnapshot().current;
                if (sessionId === undefined)
                    throw new Error('请先打开一个 DSH 会话，再安装插件');
                const binding = ctx.sessions.binding(sessionId);
                if (binding === undefined)
                    throw new Error('当前 DSH 会话尚未就绪');
                const payload = JSON.stringify({ profile: 'web', specs });
                const encoded = btoa(payload).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/u, '');
                const result = await binding.session.command(`/plugin-store-install ${encoded}`);
                if (!result.ok) {
                    if (!connectionStatus.getSnapshot() || /failed to fetch|networkerror|load failed|transport failure/iu.test(result.error.message))
                        throw disconnected();
                    throw new Error(result.error.message);
                }
                if (!result.value.matched)
                    throw new Error('当前 DSH 未提供插件安装命令');
            },
        }),
    }, StoreTrigger));
}
