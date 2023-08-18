import type { ParticipantClickEvent } from '@livekit/components-core';
import type { TrackPublication, Participant } from 'livekit-client';
import { Track } from 'livekit-client';
import * as React from 'react';
/** @public */
export interface UseParticipantTileProps<T extends HTMLElement> extends React.HTMLAttributes<T> {
    disableSpeakingIndicator?: boolean;
    publication?: TrackPublication;
    onParticipantClick?: (event: ParticipantClickEvent) => void;
    htmlProps: React.HTMLAttributes<T>;
    source: Track.Source;
    participant: Participant;
}
/** @public */
export declare function useParticipantTile<T extends HTMLElement>({ participant, source, publication, onParticipantClick, disableSpeakingIndicator, htmlProps, }: UseParticipantTileProps<T>): {
    elementProps: React.HTMLAttributes<T>;
};
//# sourceMappingURL=useParticipantTile.d.ts.map