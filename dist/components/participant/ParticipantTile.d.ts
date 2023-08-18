import * as React from 'react';
import type { Participant, TrackPublication } from 'livekit-client';
import { Track } from 'livekit-client';
import type { ParticipantClickEvent } from '@livekit/components-core';
/** @public */
export declare function ParticipantContextIfNeeded(props: React.PropsWithChildren<{
    participant?: Participant;
}>): React.JSX.Element;
/** @public */
export interface ParticipantTileProps extends React.HTMLAttributes<HTMLDivElement> {
    disableSpeakingIndicator?: boolean;
    participant?: Participant;
    source?: Track.Source;
    publication?: TrackPublication;
    onParticipantClick?: (event: ParticipantClickEvent) => void;
}
/**
 * The ParticipantTile component is the base utility wrapper for displaying a visual representation of a participant.
 * This component can be used as a child of the `TrackLoop` component or by spreading a track reference as properties.
 *
 * @example
 * ```tsx
 * <ParticipantTile source={Track.Source.Camera} />
 *
 * <ParticipantTile {...trackReference} />
 * ```
 * @public
 */
export declare function ParticipantTile({ participant, children, source, onParticipantClick, publication, disableSpeakingIndicator, ...htmlProps }: ParticipantTileProps): React.JSX.Element;
//# sourceMappingURL=ParticipantTile.d.ts.map