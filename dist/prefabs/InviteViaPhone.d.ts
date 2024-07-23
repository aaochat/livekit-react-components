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
    style?: React.CSSProperties;
}
export declare function InviteViaPhone({ link, room_name, participant, isCallScreen, style, ...props }: InviteViaPhoneEmailProps): React.JSX.Element;
//# sourceMappingURL=InviteViaPhone.d.ts.map