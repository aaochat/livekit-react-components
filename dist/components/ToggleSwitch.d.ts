import React from 'react';
export type ToggleSwitchProps = {
    optionLabels: ['Yes', 'No'];
};
export type ToggleSwitchPropTypes = {
    id: string;
    checked: boolean;
    name: string;
    onChange: (checked: boolean) => void;
    optionLabels: string[];
    small: boolean;
    disabled: boolean;
};
export declare const ToggleSwitch: ({ id, name, checked, onChange, optionLabels, small, disabled, }: ToggleSwitchPropTypes) => React.JSX.Element;
//# sourceMappingURL=ToggleSwitch.d.ts.map