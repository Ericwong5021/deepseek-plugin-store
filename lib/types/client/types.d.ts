import type { SessionId } from '@deepseek-ai/dsh-client-runtime/client';
export interface StoreFace {
    openSession: (sessionId: SessionId) => void;
    installPlugins: (specs: string[]) => Promise<void>;
}
