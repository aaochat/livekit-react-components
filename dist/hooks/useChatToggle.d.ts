import * as React from 'react';
/** @public */
export interface UseChatToggleProps {
    props: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
/** @public */
export declare function useChatToggle({ props }: UseChatToggleProps): {
    mergedProps: React.ButtonHTMLAttributes<HTMLButtonElement> & {
        className: string;
        onClick: () => void;
        'aria-pressed': string;
        'data-lk-unread-msgs': string;
    };
};
//# sourceMappingURL=useChatToggle.d.ts.map