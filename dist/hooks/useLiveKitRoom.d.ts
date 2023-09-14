import { Room } from 'livekit-client';
import type { HTMLAttributes } from 'react';
import type { LiveKitRoomProps } from '../components';
/** @public */
export declare function useLiveKitRoom<T extends HTMLElement>(props: LiveKitRoomProps): {
    room: Room | undefined;
    htmlProps: HTMLAttributes<T>;
};
//# sourceMappingURL=useLiveKitRoom.d.ts.map