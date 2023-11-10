import * as React from 'react';
import { Track } from 'livekit-client';
import type { Participant, TrackPublication } from 'livekit-client';
import type { ParticipantClickEvent } from '@livekit/components-core';
/** @public */
export type ParticipantListProps = React.HTMLAttributes<HTMLDivElement> & {
    disableSpeakingIndicator?: boolean;
    participant?: Participant;
    audit_source?: Track.Source.Microphone;
    video_source?: Track.Source.Camera;
    publication?: TrackPublication;
    onParticipantClick?: (event: ParticipantClickEvent) => void;
};
/**
 * The ParticipantList component is the base utility wrapper for displaying a visual representation of a participant.
 * This component can be used as a child of the `TileLoop` or independently if a participant is passed as a property.
 *
 * @example
 * ```tsx
 * <ParticipantList />
 * ```
 * @see `ParticipantList` component
 * @public
 */
export declare const ParticipantList: ({ participant, children, publication, disableSpeakingIndicator, onParticipantClick, ...htmlProps }: ParticipantListProps) => React.JSX.Element;
//# sourceMappingURL=ParticipantList.d.ts.map