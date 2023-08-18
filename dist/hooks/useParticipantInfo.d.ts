import type { Participant } from 'livekit-client';
/** @public */
export interface UseParticipantInfoOptions {
    participant?: Participant;
}
/** @public */
export declare function useParticipantInfo(props?: UseParticipantInfoOptions): {
    identity: string;
    name: string | undefined;
    metadata: string | undefined;
};
//# sourceMappingURL=useParticipantInfo.d.ts.map