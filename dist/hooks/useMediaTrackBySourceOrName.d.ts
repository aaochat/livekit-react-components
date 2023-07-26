import type { TrackIdentifier } from '@livekit/components-core';
import { Track } from 'livekit-client';
import * as React from 'react';
import type { UseMediaTrackOptions } from './useMediaTrack';
/**
 * @internal
 */
export declare function useMediaTrackBySourceOrName(observerOptions: TrackIdentifier, options?: UseMediaTrackOptions): {
    publication: import("livekit-client").TrackPublication | undefined;
    isMuted: boolean | undefined;
    isSubscribed: boolean | undefined;
    track: Track | undefined;
    elementProps: React.HTMLAttributes<HTMLElement>;
};
//# sourceMappingURL=useMediaTrackBySourceOrName.d.ts.map