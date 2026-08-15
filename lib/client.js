window.__ModuleLoader__.load({
	id: "deepseek-plugin-store",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let react_dom = require("react-dom");
		//#region \0plugin-store-css:/home/runner/work/deepseek-plugin-store-site/deepseek-plugin-store-site/plugin/lib/types/client/Store.module.css.mjs
		const css = ".WDA15W_entry{flex:0 0 100%;width:100%;min-width:0;height:49px;margin-top:8px;display:flex}.WDA15W_trigger{width:100%;min-height:40px;color:var(--dsw-alias-label-primary);font:var(--dsw-font-s-14);cursor:pointer;touch-action:manipulation;transition:background var(--ds-transition-duration-fast) var(--ds-ease-in-out), transform var(--ds-transition-duration-fast) var(--ds-ease-in-out);background:0 0;border:0;border-radius:12px;align-items:center;gap:8px;padding:0 8px 0 6px;display:flex}.WDA15W_trigger:hover{background:var(--dsw-alias-interactive-bg-hover)}.WDA15W_triggerActive{background:var(--dsw-specific-sidebar-nav-item-active,var(--dsw-alias-interactive-bg-active));color:var(--dsw-alias-brand-primary)}.WDA15W_trigger:active{transform:scale(.96)}.WDA15W_trigger:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}.WDA15W_rail{flex:0 0 36px;width:36px;height:36px;margin:0}.WDA15W_rail .WDA15W_trigger{border-radius:50%;justify-content:center;width:36px;height:36px;min-height:36px;padding:0}.WDA15W_page{background:var(--dsw-alias-bg-base);width:100%;min-width:0;height:100%;min-height:0;color:var(--dsw-alias-label-primary);font-family:var(--dsw-font-family);flex:1;grid-template-rows:minmax(0,1fr);display:grid;overflow:hidden}.WDA15W_frameWrap{background:#fff;min-width:0;min-height:0;position:relative;overflow:hidden}.WDA15W_frame{background:#fff;border:0;width:100%;height:100%;display:block}";
		const key = "deepseek-plugin-store/Store.module.css";
		if (!document.querySelector("style[data-plugin-css=" + JSON.stringify(key) + "]")) {
			const el = document.createElement("style");
			el.dataset.plugin = "deepseek-plugin-store";
			el.dataset.pluginCss = key;
			el.textContent = css;
			document.head.appendChild(el);
		}
		var Store_module_css_default = {
			"frameWrap": "WDA15W_frameWrap",
			"frame": "WDA15W_frame",
			"triggerActive": "WDA15W_triggerActive",
			"trigger": "WDA15W_trigger",
			"entry": "WDA15W_entry",
			"rail": "WDA15W_rail",
			"page": "WDA15W_page"
		};
		//#endregion
		//#region lib/types/client/Store.js
		const storeUrl = "https://deepseekplugin.store/";
		const storeOrigin = new URL(storeUrl).origin;
		const storePath = "/store";
		function isStoreRoute() {
			return window.location.pathname === storePath;
		}
		function StoreIcon() {
			return (0, react_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				width: "18",
				height: "18",
				"aria-hidden": "true",
				children: (0, react_jsx_runtime.jsx)("path", {
					d: "M4 9.5V20h16V9.5M3 9.5l2-5h14l2 5M8 4.5v5M16 4.5v5M3 9.5c0 1.4 1.1 2.5 2.5 2.5S8 10.9 8 9.5c0 1.4 1.1 2.5 2.5 2.5S13 10.9 13 9.5c0 1.4 1.1 2.5 2.5 2.5S18 10.9 18 9.5c0 1.4 1.1 2.5 2.5 2.5S23 10.9 23 9.5M9 20v-5h6v5",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.7",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			});
		}
		function StoreTrigger({ wide, useSessions, connectionStatus, openSession, installPlugins }) {
			const sessions = useSessions((state) => state);
			const connected = (0, react.useSyncExternalStore)(connectionStatus.subscribe, connectionStatus.getSnapshot, () => false);
			const [open, setOpen] = (0, react.useState)(isStoreRoute);
			const [pageHost, setPageHost] = (0, react.useState)(null);
			const previousSession = (0, react.useRef)(sessions.current);
			(0, react.useEffect)(() => {
				if (!wide) return;
				const host = document.querySelector("[data-slot=\"sidebar.footer.action\"]")?.parentElement;
				if (host === void 0 || host === null) return;
				const previous = host.style.flexWrap;
				host.style.flexWrap = "wrap";
				return () => {
					host.style.flexWrap = previous;
				};
			}, [wide]);
			(0, react.useEffect)(() => {
				const syncRoute = () => {
					const next = isStoreRoute();
					if (next) previousSession.current = sessions.current;
					else if (open && sessions.current === void 0 && previousSession.current !== void 0) openSession(previousSession.current);
					setOpen(next);
				};
				window.addEventListener("popstate", syncRoute);
				return () => window.removeEventListener("popstate", syncRoute);
			}, [
				open,
				openSession,
				sessions.current
			]);
			(0, react.useEffect)(() => {
				if (!open) {
					setPageHost(null);
					return;
				}
				const conversation = document.querySelector("[data-slot=\"conversation\"]");
				const host = conversation?.parentElement;
				if (conversation === void 0 || conversation === null || host === void 0 || host === null) return;
				const previous = conversation.style.display;
				conversation.style.display = "none";
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
				window.history.pushState({
					...window.history.state,
					store: true
				}, "", storePath);
				setOpen(true);
			};
			const closeStore = () => {
				window.history.replaceState(window.history.state, "", "/");
				setOpen(false);
				if (sessions.current === void 0 && previousSession.current !== void 0) openSession(previousSession.current);
			};
			return (0, react_jsx_runtime.jsxs)("div", {
				className: `${Store_module_css_default.entry} ${wide ? "" : Store_module_css_default.rail}`,
				children: [(0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `${Store_module_css_default.trigger} ${open ? Store_module_css_default.triggerActive : ""}`,
					"aria-label": "打开插件商店",
					"aria-current": open ? "page" : void 0,
					onClick: showStore,
					children: [(0, react_jsx_runtime.jsx)(StoreIcon, {}), wide && (0, react_jsx_runtime.jsx)("span", { children: "插件商店" })]
				}), open && pageHost !== null && (0, react_dom.createPortal)((0, react_jsx_runtime.jsx)(StorePage, {
					connected,
					installPlugins
				}), pageHost)]
			});
		}
		function StorePage({ connected, installPlugins }) {
			const frameRef = (0, react.useRef)(null);
			const [installing, setInstalling] = (0, react.useState)(false);
			(0, react.useEffect)(() => {
				const frame = frameRef.current;
				if (frame === null) return;
				const sendReady = () => frame.contentWindow?.postMessage({
					source: "deepseek-dsh",
					type: "dsh-store-capabilities",
					install: connected
				}, storeOrigin);
				const onMessage = (event) => {
					if (event.origin !== storeOrigin || event.source !== frame.contentWindow) return;
					const data = event.data;
					if (typeof data !== "object" || data === null || data.source !== "deepseek-plugin-store") return;
					if (data.type === "dsh-store-ready") {
						sendReady();
						return;
					}
					if (data.type !== "dsh-install-request" || !Array.isArray(data.specs) || data.specs.some((spec) => typeof spec !== "string")) return;
					setInstalling(true);
					const source = event.source;
					const reply = (message) => {
						if (source !== null && typeof source.postMessage === "function") source.postMessage(message, { targetOrigin: event.origin });
					};
					installPlugins(data.specs).then(() => reply({
						source: "deepseek-dsh",
						type: "dsh-install-result",
						ok: true
					}), (error) => reply({
						source: "deepseek-dsh",
						type: "dsh-install-result",
						ok: false,
						error: error instanceof Error ? error.message : "安装失败"
					})).finally(() => setInstalling(false));
				};
				window.addEventListener("message", onMessage);
				sendReady();
				return () => window.removeEventListener("message", onMessage);
			}, [connected, installPlugins]);
			return (0, react_jsx_runtime.jsx)("main", {
				className: Store_module_css_default.page,
				"aria-label": "DeepSeek Plugin Store",
				children: (0, react_jsx_runtime.jsxs)("div", {
					className: Store_module_css_default.frameWrap,
					children: [(0, react_jsx_runtime.jsx)("iframe", {
						ref: frameRef,
						className: Store_module_css_default.frame,
						src: storeUrl,
						title: "DeepSeek Plugin Store",
						allow: "clipboard-write",
						sandbox: "allow-downloads allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
						referrerPolicy: "strict-origin-when-cross-origin",
						onLoad: () => frameRef.current?.contentWindow?.postMessage({
							source: "deepseek-dsh",
							type: "dsh-store-capabilities",
							install: connected
						}, storeOrigin)
					}), installing && (0, react_jsx_runtime.jsx)("div", {
						className: Store_module_css_default.installing,
						role: "status",
						children: "正在安装插件到 DSH…"
					})]
				})
			});
		}
		//#endregion
		//#region lib/types/client/index.js
		const inject = [
			"slots",
			"sessions",
			"connection"
		];
		function apply(ctx) {
			const connection = ctx.get("connection");
			const connectionStatus = {
				getSnapshot: () => connection?.hostDescription.getSnapshot() !== void 0,
				subscribe: (listener) => connection?.hostDescription.subscribe(listener) ?? (() => {})
			};
			const disconnected = () => /* @__PURE__ */ new Error("DSH 连接已断开，请重新启动 DSH 后重试");
			ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({
				name: "sidebar.footer.action",
				id: "plugin-store",
				order: 70,
				inject: () => ({
					connectionStatus,
					openSession: (sessionId) => {
						ctx.sessions.open(sessionId);
					},
					installPlugins: async (specs) => {
						if (!connectionStatus.getSnapshot()) throw disconnected();
						const sessionId = ctx.sessions.list.getSnapshot().current;
						if (sessionId === void 0) throw new Error("请先打开一个 DSH 会话，再安装插件");
						const binding = ctx.sessions.binding(sessionId);
						if (binding === void 0) throw new Error("当前 DSH 会话尚未就绪");
						const payload = JSON.stringify({
							profile: "web",
							specs
						});
						const encoded = btoa(payload).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/u, "");
						const result = await binding.session.command(`/plugin-store-install ${encoded}`);
						if (!result.ok) {
							if (!connectionStatus.getSnapshot() || /failed to fetch|networkerror|load failed|transport failure/iu.test(result.error.message)) throw disconnected();
							throw new Error(result.error.message);
						}
						if (!result.value.matched) throw new Error("当前 DSH 未提供插件安装命令");
					}
				})
			}, StoreTrigger));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map