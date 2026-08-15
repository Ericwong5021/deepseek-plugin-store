import type { SessionId } from '@deepseek-ai/dsh-client-runtime/client';
export interface StoreConnectionStatus {
    getSnapshot: () => boolean;
    subscribe: (listener: () => void) => () => void;
}
export interface StoreFace {
    connectionStatus: StoreConnectionStatus;
    openSession: (sessionId: SessionId) => void;
    installPlugins: (specs: string[]) => Promise<void>;
}
