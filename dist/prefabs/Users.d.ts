import * as React from 'react';
import type { LocalUserChoices } from './PreJoin';
/** @public */
export interface UserProps extends React.HTMLAttributes<HTMLDivElement> {
    onWaitingRoomChange: (state: number) => void;
}
export type UserDataProps = {
    /** The participants to loop over.
     * If not provided, the participants from the current room context are used.
     **/
    participants: LocalUserChoices[];
};
export declare function Users({ onWaitingRoomChange, ...props }: UserProps): React.JSX.Element;
//# sourceMappingURL=Users.d.ts.map