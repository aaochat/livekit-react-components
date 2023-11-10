import * as React from 'react';
/** @public */
export interface HostEndMeetingMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    leave?: string;
    leaveButton?: string;
    endForAll?: string;
    showIcon?: boolean;
    showText?: boolean;
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
export declare function HostEndMeetingMenu({ leave, leaveButton, endForAll, showIcon, showText, ...props }: any): React.JSX.Element;
//# sourceMappingURL=HostEndMeetingMenu.d.ts.map