import type { Participant } from 'livekit-client';
import * as React from 'react';
import type { TrackReferenceOrPlaceholder } from '@livekit/components-core';
/** @public */
export interface AudioVisualizerProps extends React.HTMLAttributes<SVGElement> {
    /** @deprecated this property will be removed in a future version, use `trackRef` instead */
    participant?: Participant;
    trackRef?: TrackReferenceOrPlaceholder;
}
/** @public */
export declare function AudioVisualizer({ participant, trackRef, ...props }: AudioVisualizerProps): React.JSX.Element;
//# sourceMappingURL=AudioVisualizer.d.ts.map