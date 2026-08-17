import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import css from './Store.module.css';
const storeUrl = 'https://deepseekplugin.store/';
const storeOrigin = new URL(storeUrl).origin;
const storePath = '/store';
const pluginVersion = '0.3.0';
function isStoreRoute() {
    return window.location.pathname === storePath;
}
function StoreIcon() {
    return (_jsx("svg", { viewBox: "0 0 24 24", width: "18", height: "18", "aria-hidden": "true", children: _jsx("path", { d: "M4 9.5V20h16V9.5M3 9.5l2-5h14l2 5M8 4.5v5M16 4.5v5M3 9.5c0 1.4 1.1 2.5 2.5 2.5S8 10.9 8 9.5c0 1.4 1.1 2.5 2.5 2.5S13 10.9 13 9.5c0 1.4 1.1 2.5 2.5 2.5S18 10.9 18 9.5c0 1.4 1.1 2.5 2.5 2.5S23 10.9 23 9.5M9 20v-5h6v5", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
export function StoreTrigger({ wide, useSessions, connectionStatus, openSession, installPlugins }) {
    const sessions = useSessions(state => state);
    const connected = useSyncExternalStore(connectionStatus.subscribe, connectionStatus.getSnapshot, () => false);
    const [open, setOpen] = useState(isStoreRoute);
    const [pageHost, setPageHost] = useState(null);
    const previousSession = useRef(sessions.current);
    useEffect(() => {
        if (!wide)
            return;
        const slot = document.querySelector('[data-slot="sidebar.footer.action"]');
        const host = slot?.parentElement;
        if (host === undefined || host === null)
            return;
        const previous = host.style.flexWrap;
        host.style.flexWrap = 'wrap';
        return () => {
            host.style.flexWrap = previous;
        };
    }, [wide]);
    useEffect(() => {
        const syncRoute = () => {
            const next = isStoreRoute();
            if (next) {
                previousSession.current = sessions.current;
            }
            else if (open && sessions.current === undefined && previousSession.current !== undefined) {
                openSession(previousSession.current);
            }
            setOpen(next);
        };
        window.addEventListener('popstate', syncRoute);
        return () => window.removeEventListener('popstate', syncRoute);
    }, [open, openSession, sessions.current]);
    useEffect(() => {
        if (!open) {
            setPageHost(null);
            return;
        }
        const conversation = document.querySelector('[data-slot="conversation"]');
        const host = conversation?.parentElement;
        if (conversation === undefined || conversation === null || host === undefined || host === null)
            return;
        const previous = conversation.style.display;
        conversation.style.display = 'none';
        setPageHost(host);
        return () => {
            conversation.style.display = previous;
        };
    }, [open]);
    const showStore = () => {
        if (open) {
            closeStore();
            return;
        }
        previousSession.current = sessions.current;
        window.history.pushState({ ...window.history.state, store: true }, '', storePath);
        setOpen(true);
    };
    const closeStore = () => {
        window.history.replaceState(window.history.state, '', '/');
        setOpen(false);
        if (sessions.current === undefined && previousSession.current !== undefined)
            openSession(previousSession.current);
    };
    return (_jsxs("div", { className: `${css.entry} ${wide ? '' : css.rail}`, children: [_jsxs("button", { type: "button", className: `${css.trigger} ${open ? css.triggerActive : ''}`, "aria-label": "\u6253\u5F00\u63D2\u4EF6\u5546\u5E97", "aria-current": open ? 'page' : undefined, onClick: showStore, children: [_jsx(StoreIcon, {}), wide && _jsx("span", { children: "\u63D2\u4EF6\u5546\u5E97" })] }), open && pageHost !== null && createPortal(_jsx(StorePage, { connected: connected, installPlugins: installPlugins }), pageHost)] }));
}
export function StorePage({ connected, installPlugins }) {
    const frameRef = useRef(null);
    const [installing, setInstalling] = useState(false);
    useEffect(() => {
        const frame = frameRef.current;
        if (frame === null)
            return;
        const sendReady = () => frame.contentWindow?.postMessage({ source: 'deepseek-dsh', type: 'dsh-store-capabilities', install: connected, catalogSchema: 2, pluginVersion }, storeOrigin);
        const onMessage = (event) => {
            if (event.origin !== storeOrigin || event.source !== frame.contentWindow)
                return;
            const data = event.data;
            if (typeof data !== 'object' || data === null || data.source !== 'deepseek-plugin-store')
                return;
            if (data.type === 'dsh-store-ready') {
                sendReady();
                return;
            }
            if (data.type !== 'dsh-install-request' || !Array.isArray(data.specs) || data.specs.some((spec) => typeof spec !== 'string'))
                return;
            setInstalling(true);
            const source = event.source;
            const reply = (message) => {
                if (source !== null && typeof source.postMessage === 'function') {
                    ;
                    source.postMessage(message, { targetOrigin: event.origin });
                }
            };
            void installPlugins(data.specs).then(() => reply({ source: 'deepseek-dsh', type: 'dsh-install-result', ok: true }), (error) => reply({ source: 'deepseek-dsh', type: 'dsh-install-result', ok: false, error: error instanceof Error ? error.message : '安装失败' })).finally(() => setInstalling(false));
        };
        window.addEventListener('message', onMessage);
        sendReady();
        return () => window.removeEventListener('message', onMessage);
    }, [connected, installPlugins]);
    return (_jsx("main", { className: css.page, "aria-label": "DeepSeek Plugin Store", children: _jsxs("div", { className: css.frameWrap, children: [_jsx("iframe", { ref: frameRef, className: css.frame, src: storeUrl, title: "DeepSeek Plugin Store", allow: "clipboard-write", sandbox: "allow-downloads allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts", referrerPolicy: "strict-origin-when-cross-origin", onLoad: () => frameRef.current?.contentWindow?.postMessage({ source: 'deepseek-dsh', type: 'dsh-store-capabilities', install: connected, catalogSchema: 2, pluginVersion }, storeOrigin) }), !connected && _jsx("div", { className: css.connectionNote, role: "status", children: "\u8FDE\u63A5 DSH \u4F1A\u8BDD\u540E\u53EF\u76F4\u63A5\u5B89\u88C5\u63D2\u4EF6" }), installing && _jsx("div", { className: css.installing, role: "status", children: "\u6B63\u5728\u5B89\u88C5\u63D2\u4EF6\u5230 DSH\u2026" })] }) }));
}
