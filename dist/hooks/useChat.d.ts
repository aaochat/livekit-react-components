import type { MessageDecoder, MessageEncoder } from '@livekit/components-core';
/**
 * The `useChat` hook provides chat functionality for a LiveKit room.
 * It returns a simple `send` function to send chat messages and an array of `chatMessages` to hold received messages.
 * @remarks
 * It is possible to pass configurations for custom message encoding and decoding.
 * @public
 */
export declare function useChat(options?: {
    messageEncoder?: MessageEncoder;
    messageDecoder?: MessageDecoder;
}): {
    send: ((message: string) => Promise<void>) | undefined;
    chatMessages: import("@livekit/components-core").ReceivedChatMessage[];
    isSending: boolean;
};
//# sourceMappingURL=useChat.d.ts.map