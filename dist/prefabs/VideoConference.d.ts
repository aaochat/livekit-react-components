import * as React from 'react';
/**
 * @public
 */
export interface VideoConferenceProps extends React.HTMLAttributes<HTMLDivElement> {
    showShareButton: boolean;
    showParticipantButton: boolean;
    leaveButton: string;
}
/**
 * This component is the default setup of a classic LiveKit video conferencing app.
 * It provides functionality like switching between participant grid view and focus view.
 *
 * @remarks
 * The component is implemented with other LiveKit components like `FocusContextProvider`,
 * `GridLayout`, `ControlBar`, `FocusLayoutContainer` and `FocusLayout`.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <VideoConference />
 * <LiveKitRoom>
 * ```
 * @public
 */
export declare function VideoConference({ showShareButton, showParticipantButton, leaveButton, ...props }: VideoConferenceProps): React.JSX.Element;
//# sourceMappingURL=VideoConference.d.ts.map