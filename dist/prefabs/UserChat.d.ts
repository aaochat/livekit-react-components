import type { ReceivedChatMessage, ChatMessage } from '@livekit/components-core';
import * as React from 'react';
/** @public */
export type MessageFormatter = (message: string) => React.ReactNode;
/** @public */
export type MessageEncoder = (message: ChatMessage) => Uint8Array;
/** @public */
export type MessageDecoder = (message: Uint8Array) => ReceivedChatMessage;
/**
 * UserChat composes the HTML div element under the hood, so you can pass all its props.
 * These are the props specific to the UserChat component:
 * @public
 */
export interface UserChatProps extends React.HTMLAttributes<HTMLLIElement> {
    /** The chat massage object to display. */
    entry: ReceivedChatMessage;
    /** Hide sender name. Useful when displaying multiple consecutive chat messages from the same person. */
    hideName?: boolean;
    /** Hide message timestamp. */
    hideTimestamp?: boolean;
    /** An optional formatter for the message body. */
    messageFormatter?: MessageFormatter;
}
/**
 * The `UserChat` component holds and displays one chat message.
 *
 * @example
 * ```tsx
 * <Chat>
 *   <UserChat />
 * </Chat>
 * ```
 * @see `Chat`
 * @public
 */
export declare function UserChat({ entry, hideName, hideTimestamp, messageFormatter, ...props }: UserChatProps): React.JSX.Element;
//# sourceMappingURL=UserChat.d.ts.map