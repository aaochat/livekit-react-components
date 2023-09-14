import { type TrackReferenceOrPlaceholder } from '@livekit/components-core';
import type { Participant, Track } from 'livekit-client';
/** @public */
export interface UseTrackMutedIndicatorOptions {
    /** @deprecated This parameter will be removed in a future version use `trackRef` instead. */
    participant?: Participant;
}
interface TrackMutedIndicatorReturnType {
    isMuted: boolean;
    className: string;
}
/** @public */
export declare function useTrackMutedIndicator(trackRef?: TrackReferenceOrPlaceholder): TrackMutedIndicatorReturnType;
/** @public @deprecated This overload will be removed in a future version, pass in trackRef instead. */
export declare function useTrackMutedIndicator(source: Track.Source, options?: UseTrackMutedIndicatorOptions): TrackMutedIndicatorReturnType;
export {};
//# sourceMappingURL=useTrackMutedIndicator.d.ts.map