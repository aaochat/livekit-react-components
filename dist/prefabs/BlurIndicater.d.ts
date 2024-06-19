import { Track } from "livekit-client";
import React from "react";
export interface BlurIndicaterProps {
    source: Track.Source.Camera;
    parentCallback: () => void;
}
export declare function BlurIndicater({ source, parentCallback }: BlurIndicaterProps): React.JSX.Element;
//# sourceMappingURL=BlurIndicater.d.ts.map