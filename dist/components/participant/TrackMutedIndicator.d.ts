import * as React from 'react';
import type { Participant, Track } from 'livekit-client';
/** @public */
export interface TrackMutedIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    source: Track.Source;
    participant?: Participant;
    show?: 'always' | 'muted' | 'unmuted';
}
/**
 * The TrackMutedIndicator shows whether the participant's camera or microphone is muted or not.
 *
 * @example
 * ```tsx
 * <TrackMutedIndicator source={Track.Source.Camera} />
 * <TrackMutedIndicator source={Track.Source.Microphone} />
 * ```
 * @public
 */
export declare function TrackMutedIndicator({ source, participant, show, ...props }: TrackMutedIndicatorProps): React.JSX.Element | null;
//# sourceMappingURL=TrackMutedIndicator.d.ts.map