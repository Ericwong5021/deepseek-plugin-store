import type { InjectFace, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { StoreFace } from './types.ts';
type TriggerProps = PropsRuntime<'sidebar.footer.action'> & InjectFace<StoreFace>;
export declare function StoreTrigger({ wide, useSessions, openSession, installPlugins }: TriggerProps): import("react").JSX.Element;
export declare function StorePage({ installPlugins }: {
    installPlugins: (specs: string[]) => Promise<void>;
}): import("react").JSX.Element;
export {};
