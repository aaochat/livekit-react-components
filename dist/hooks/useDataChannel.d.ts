import type { ReceivedDataMessage } from '@livekit/components-core';
/** @public */
export declare function useDataChannel<T extends string>(topic?: T, onMessage?: (msg: ReceivedDataMessage<T>) => void): {
    message: {
        payload: Uint8Array;
        topic: T;
        from: import("livekit-client").RemoteParticipant | undefined;
    } | undefined;
    send: (payload: Uint8Array, options?: import("@livekit/components-core").DataSendOptions | undefined) => Promise<void>;
    isSending: boolean;
};
//# sourceMappingURL=useDataChannel.d.ts.map