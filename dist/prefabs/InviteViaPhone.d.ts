import * as React from "react";
/**
 * InviteViaPhoneProps
 * @interface InviteViaPhoneProps
 * @property {string} link - The link to the room
 * @property {string} room_name - The name of the room
 */
export interface InviteViaPhoneEmailProps {
    link: string;
    room_name: string;
    participant: string | undefined;
    isCallScreen: boolean;
}
export declare function InviteViaPhone({ link, room_name, participant, isCallScreen, ...props }: InviteViaPhoneEmailProps): React.JSX.Element;
//# sourceMappingURL=InviteViaPhone.d.ts.map