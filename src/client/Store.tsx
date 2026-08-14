import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { InjectFace, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import type {} from '@deepseek-ai/dsh-client-ui-sidebar/client'
import type { SessionId } from '@deepseek-ai/dsh-client-runtime/client'
import type { StoreFace } from './types.ts'
import css from './Store.module.css'

type TriggerProps = PropsRuntime<'sidebar.footer.action'> & InjectFace<StoreFace>
const storeUrl = 'https://deepseekplugin.store/'
const storeOrigin = new URL(storeUrl).origin
const storePath = '/store'

function isStoreRoute(): boolean {
  return window.location.pathname === storePath
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M4 9.5V20h16V9.5M3 9.5l2-5h14l2 5M8 4.5v5M16 4.5v5M3 9.5c0 1.4 1.1 2.5 2.5 2.5S8 10.9 8 9.5c0 1.4 1.1 2.5 2.5 2.5S13 10.9 13 9.5c0 1.4 1.1 2.5 2.5 2.5S18 10.9 18 9.5c0 1.4 1.1 2.5 2.5 2.5S23 10.9 23 9.5M9 20v-5h6v5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StoreTrigger({ wide, useSessions, openSession, installPlugins }: TriggerProps) {
  const sessions = useSessions(state => state)
  const [open, setOpen] = useState(isStoreRoute)
  const [pageHost, setPageHost] = useState<HTMLElement | null>(null)
  const previousSession = useRef<SessionId | undefined>(sessions.current)

  useEffect(() => {
    if (!wide) return
    const slot = document.querySelector<HTMLElement>('[data-slot="sidebar.footer.action"]')
    const host = slot?.parentElement
    if (host === undefined || host === null) return
    const previous = host.style.flexWrap
    host.style.flexWrap = 'wrap'
    return () => {
      host.style.flexWrap = previous
    }
  }, [wide])

  useEffect(() => {
    const syncRoute = () => {
      const next = isStoreRoute()
      if (next) {
        previousSession.current = sessions.current
      } else if (open && sessions.current === undefined && previousSession.current !== undefined) {
        openSession(previousSession.current)
      }
      setOpen(next)
    }
    window.addEventListener('popstate', syncRoute)
    return () => window.removeEventListener('popstate', syncRoute)
  }, [open, openSession, sessions.current])

  useEffect(() => {
    if (!open) {
      setPageHost(null)
      return
    }
    const conversation = document.querySelector<HTMLElement>('[data-slot="conversation"]')
    const host = conversation?.parentElement
    if (conversation === undefined || conversation === null || host === undefined || host === null) return
    const previous = conversation.style.display
    conversation.style.display = 'none'
    setPageHost(host)
    return () => {
      conversation.style.display = previous
    }
  }, [open])

  const showStore = () => {
    if (open) {
      closeStore()
      return
    }
    previousSession.current = sessions.current
    window.history.pushState({ ...window.history.state, store: true }, '', storePath)
    setOpen(true)
  }

  const closeStore = () => {
    window.history.replaceState(window.history.state, '', '/')
    setOpen(false)
    if (sessions.current === undefined && previousSession.current !== undefined) openSession(previousSession.current)
  }

  return (
    <div className={`${css.entry} ${wide ? '' : css.rail}`}>
      <button type="button" className={`${css.trigger} ${open ? css.triggerActive : ''}`} aria-label="打开插件商店" aria-current={open ? 'page' : undefined} onClick={showStore}>
        <StoreIcon />
        {wide && <span>插件商店</span>}
      </button>
      {open && pageHost !== null && createPortal(<StorePage installPlugins={installPlugins} />, pageHost)}
    </div>
  )
}

export function StorePage({ installPlugins }: { installPlugins: (specs: string[]) => Promise<void> }) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [installing, setInstalling] = useState(false)

  useEffect(() => {
    const frame = frameRef.current
    if (frame === null) return
    const sendReady = () => frame.contentWindow?.postMessage({ source: 'deepseek-dsh', type: 'dsh-store-capabilities', install: true }, storeOrigin)
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== storeOrigin || event.source !== frame.contentWindow) return
      const data = event.data
      if (typeof data !== 'object' || data === null || data.source !== 'deepseek-plugin-store') return
      if (data.type === 'dsh-store-ready') {
        sendReady()
        return
      }
      if (data.type !== 'dsh-install-request' || !Array.isArray(data.specs) || data.specs.some((spec: unknown) => typeof spec !== 'string')) return
      setInstalling(true)
      const source = event.source
      const reply = (message: unknown) => {
        if (source !== null && typeof (source as Window).postMessage === 'function') {
          ;(source as Window).postMessage(message, { targetOrigin: event.origin })
        }
      }
      void installPlugins(data.specs).then(
        () => reply({ source: 'deepseek-dsh', type: 'dsh-install-result', ok: true }),
        (error: unknown) => reply({ source: 'deepseek-dsh', type: 'dsh-install-result', ok: false, error: error instanceof Error ? error.message : '安装失败' }),
      ).finally(() => setInstalling(false))
    }
    window.addEventListener('message', onMessage)
    sendReady()
    return () => window.removeEventListener('message', onMessage)
  }, [installPlugins])

  return (
    <main className={css.page} aria-label="DeepSeek Plugin Store">
      <div className={css.frameWrap}>
        <iframe
          ref={frameRef}
          className={css.frame}
          src={storeUrl}
          title="DeepSeek Plugin Store"
          allow="clipboard-write"
          sandbox="allow-downloads allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => frameRef.current?.contentWindow?.postMessage({ source: 'deepseek-dsh', type: 'dsh-store-capabilities', install: true }, storeOrigin)}
        />
        {installing && <div className={css.installing} role="status">正在安装插件到 DSH…</div>}
      </div>
    </main>
  )
}
