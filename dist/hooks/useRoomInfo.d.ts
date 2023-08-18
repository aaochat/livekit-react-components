import type { Room } from 'livekit-client';
/** @public */
export interface UseRoomInfoOptions {
    room?: Room;
}
/** @public */
export declare function useRoomInfo(options?: UseRoomInfoOptions): {
    name: string;
    metadata: string | undefined;
};
//# sourceMappingURL=useRoomInfo.d.ts.map