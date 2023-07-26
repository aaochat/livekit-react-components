import * as React from 'react';
/** @public */
export interface MediaDeviceMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    kind?: MediaDeviceKind;
    initialSelection?: string;
    onActiveDeviceChange?: (kind: MediaDeviceKind, deviceId: string) => void;
}
/**
 * The MediaDeviceMenu prefab component is a button that opens a menu that lists
 * all media devices and allows the user to select them.
 *
 * @remarks
 * This component is implemented with the `MediaDeviceSelect` LiveKit components.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <MediaDeviceMenu />
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare const MediaDeviceMenu: ({ kind, initialSelection, onActiveDeviceChange, ...props }: MediaDeviceMenuProps) => React.JSX.Element;
//# sourceMappingURL=MediaDeviceMenu.d.ts.map