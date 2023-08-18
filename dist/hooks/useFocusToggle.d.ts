import type { Track, Participant } from 'livekit-client';
import * as React from 'react';
/** @public */
export interface UseFocusToggleProps {
    props: React.ButtonHTMLAttributes<HTMLButtonElement>;
    trackSource: Track.Source;
    participant?: Participant;
}
/** @public */
export declare function useFocusToggle({ trackSource, participant, props }: UseFocusToggleProps): {
    mergedProps: React.ButtonHTMLAttributes<HTMLButtonElement> & {
        className: string;
        onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    };
    inFocus: boolean;
};
//# sourceMappingURL=useFocusToggle.d.ts.map