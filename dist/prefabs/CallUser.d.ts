import * as React from "react";
/** @public */
export interface UserProps extends React.HTMLAttributes<HTMLDivElement> {
    onWaitingRoomChange?: (state: number) => void;
    onMemberButtonClick?: () => void;
    contactsList?: any;
    socket?: any;
}
export type UserDataProps = {
    /** The participants to loop over.
     * If not provided, the participants from the current room context are used.
     **/
    participants: any[];
};
export declare function CallUser({ socket, onWaitingRoomChange, onMemberButtonClick, contactsList, ...props }: UserProps): React.JSX.Element;
//# sourceMappingURL=CallUser.d.ts.map