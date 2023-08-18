import type { Participant, Track } from 'livekit-client';
/** @public */
export interface UseTrackMutedIndicatorOptions {
    participant?: Participant;
}
/** @public */
export declare function useTrackMutedIndicator(source: Track.Source, options?: UseTrackMutedIndicatorOptions): {
    isMuted: boolean;
    className: string;
};
//# sourceMappingURL=useTrackMutedIndicator.d.ts.map