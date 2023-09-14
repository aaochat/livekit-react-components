import type { ParticipantClickEvent, TrackReferenceOrPlaceholder } from '@livekit/components-core';
import type { TrackPublication, Participant } from 'livekit-client';
import { Track } from 'livekit-client';
import * as React from 'react';
/** @public */
export interface UseParticipantTileProps<T extends HTMLElement> extends React.HTMLAttributes<T> {
    /** The track reference to display. */
    trackRef?: TrackReferenceOrPlaceholder;
    disableSpeakingIndicator?: boolean;
    /** @deprecated This parameter will be removed in a future version use `trackRef` instead. */
    publication?: TrackPublication;
    onParticipantClick?: (event: ParticipantClickEvent) => void;
    htmlProps: React.HTMLAttributes<T>;
    /** @deprecated This parameter will be removed in a future version use `trackRef` instead. */
    source: Track.Source;
    /** @deprecated This parameter will be removed in a future version use `trackRef` instead. */
    participant: Participant;
}
/** @public */
export declare function useParticipantTile<T extends HTMLElement>({ trackRef, participant, source, publication, onParticipantClick, disableSpeakingIndicator, htmlProps, }: UseParticipantTileProps<T>): {
    elementProps: React.HTMLAttributes<T>;
};
//# sourceMappingURL=useParticipantTile.d.ts.map