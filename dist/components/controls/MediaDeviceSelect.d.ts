import * as React from 'react';
import type { Room } from 'livekit-client';
/** @public */
export declare function useMediaDevices({ kind }: {
    kind: MediaDeviceKind;
}): MediaDeviceInfo[];
/** @public */
export interface UseMediaDeviceSelectProps {
    kind: MediaDeviceKind;
    room?: Room;
}
/** @public */
export declare function useMediaDeviceSelect({ kind, room }: UseMediaDeviceSelectProps): {
    devices: MediaDeviceInfo[];
    className: string;
    activeDeviceId: string;
    setActiveMediaDevice: (id: string, options?: import("@livekit/components-core").SetMediaDeviceOptions | undefined) => Promise<void>;
};
/** @public */
export interface MediaDeviceSelectProps extends React.HTMLAttributes<HTMLUListElement> {
    kind: MediaDeviceKind;
    onActiveDeviceChange?: (deviceId: string) => void;
    onDeviceListChange?: (devices: MediaDeviceInfo[]) => void;
    initialSelection?: string;
}
/**
 * The MediaDeviceSelect list all media devices of one kind.
 * Clicking on one of the listed devices make it the active media device.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <MediaDeviceSelect kind='audioinput' />
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare function MediaDeviceSelect({ kind, initialSelection, onActiveDeviceChange, onDeviceListChange, ...props }: MediaDeviceSelectProps): React.JSX.Element;
//# sourceMappingURL=MediaDeviceSelect.d.ts.map