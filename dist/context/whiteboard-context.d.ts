import type * as React from 'react';
export type WhiteboardState = {
    show_whiteboard: boolean;
};
export declare const WHITEBOARD_DEFAULT_STATE: WhiteboardState;
/** @internal */
export type WhiteboardContextAction = {
    msg: 'show_whiteboard';
} | {
    msg: 'hide_whiteboard';
};
/** @internal */
export type WhiteboardContextType = {
    dispatch?: React.Dispatch<WhiteboardContextAction>;
    state?: WhiteboardState;
};
/** @internal */
export declare function whiteboardReducer(state: WhiteboardState, action: WhiteboardContextAction): WhiteboardState;
//# sourceMappingURL=whiteboard-context.d.ts.map