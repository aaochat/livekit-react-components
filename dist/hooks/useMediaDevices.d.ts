/**
 * The `useMediaDevices` hook returns the list of media devices of a given kind.
 *
 * @example
 * ```tsx
 * const videoDevices = useMediaDevices({ kind: 'videoinput' });
 * const audioDevices = useMediaDevices({ kind: 'audioinput' });
 * ```
 * @public
 */
export declare function useMediaDevices({ kind }: {
    kind: MediaDeviceKind;
}): MediaDeviceInfo[];
//# sourceMappingURL=useMediaDevices.d.ts.map