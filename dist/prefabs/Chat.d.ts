import type { ChatMessage, ReceivedChatMessage } from '@livekit/components-core';
import * as React from 'react';
import type { MessageDecoder, MessageEncoder, MessageFormatter } from '../components/ChatEntry';
export type { ChatMessage, ReceivedChatMessage };
/** @public */
export interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
    messageFormatter?: MessageFormatter;
    messageEncoder?: MessageEncoder;
    messageDecoder?: MessageDecoder;
}
/** @public */
export declare function useChat(options?: {
    messageEncoder?: MessageEncoder;
    messageDecoder?: MessageDecoder;
}): {
    send: ((message: string) => Promise<void>) | undefined;
    chatMessages: ReceivedChatMessage[];
    isSending: boolean;
};
/**
 * The Chat component adds a basis chat functionality to the LiveKit room. The messages are distributed to all participants
 * in the room. Only users who are in the room at the time of dispatch will receive the message.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <Chat />
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare function Chat({ messageFormatter, messageDecoder, messageEncoder, ...props }: ChatProps): React.JSX.Element;
//# sourceMappingURL=Chat.d.ts.map