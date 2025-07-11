import React from 'react';

interface StyledCheckboxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledCheckbox: React.FC<StyledCheckboxProps> = ({ checked, onChange }) => (
    <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-brand-dark-green focus:ring-brand-dark-green"
    />
);

export default StyledCheckbox;