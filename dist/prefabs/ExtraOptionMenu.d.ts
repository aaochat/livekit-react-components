import * as React from 'react';
/** @public */
export interface ExtraOptionMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    blurEnabled?: boolean;
    shareScreenTracks?: number;
}
/**
 * The HostEndMeetingMenu prefab component is a button that opens a menu lists that use to leave or end meeting for host
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <HostEndMeetingMenu />
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare function ExtraOptionMenu({ blurEnabled, shareScreenTracks, ...props }: ExtraOptionMenuProps): React.JSX.Element;
//# sourceMappingURL=ExtraOptionMenu.d.ts.map