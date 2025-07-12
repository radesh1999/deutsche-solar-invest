// src/components/Checkbox.tsx
import React from 'react';

interface CheckboxProps {
    label: string;
    name: string;
    checked?: boolean;
    className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, checked = false, className }) => {
    return (
        <label htmlFor={name} className={`flex items-center space-x-2 text-sm ${className}`}>
            <span>{label}</span>
            <input id={name} name={name} type="checkbox" defaultChecked={checked} className="w-fit accent-[#005738] border-gray-300 custom-checkbox-input h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
        </label>
    );
};

export default Checkbox;