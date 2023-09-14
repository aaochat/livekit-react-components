import type { TrackReferenceOrPlaceholder } from '@livekit/components-core';
import type { Track, Participant } from 'livekit-client';
import * as React from 'react';
/** @public */
export interface UseFocusToggleProps {
    trackRef?: TrackReferenceOrPlaceholder;
    /** @deprecated This parameter will be removed in a future version use `trackRef` instead. */
    trackSource?: Track.Source;
    /** @deprecated This parameter will be removed in a future version use `trackRef` instead. */
    participant?: Participant;
    props: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
/** @public */
export declare function useFocusToggle({ trackRef, trackSource, participant, props }: UseFocusToggleProps): {
    mergedProps: React.ButtonHTMLAttributes<HTMLButtonElement> & {
        className: string;
        onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    };
    inFocus: boolean;
};
//# sourceMappingURL=useFocusToggle.d.ts.map