import type { LocalAudioTrack, LocalVideoTrack, Room } from 'livekit-client';
/** @public */
export interface UseMediaDeviceSelectProps {
    kind: MediaDeviceKind;
    room?: Room;
    track?: LocalAudioTrack | LocalVideoTrack;
    /**
     * this will call getUserMedia if the permissions are not yet given to enumerate the devices with device labels.
     * in some browsers multiple calls to getUserMedia result in multiple permission prompts.
     * It's generally advised only flip this to true, once a (preview) track has been acquired successfully with the
     * appropriate permissions.
     *
     * @see {@link MediaDeviceMenu}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices | MDN enumerateDevices}
     */
    requestPermissions?: boolean;
}
/** @public */
export declare function useMediaDeviceSelect({ kind, room, track, requestPermissions, }: UseMediaDeviceSelectProps): {
    devices: MediaDeviceInfo[];
    className: string;
    activeDeviceId: string;
    setActiveMediaDevice: (id: string, options?: import("@livekit/components-core").SetMediaDeviceOptions | undefined) => Promise<void>;
};
//# sourceMappingURL=useMediaDeviceSelect.d.ts.map