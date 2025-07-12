// src/components/FormField.tsx
import React from 'react';

interface FormFieldProps {
    label: string;
    value: string;
    type?: 'text' | 'email' | 'tel';
    isSelect?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, value, type = 'text', isSelect = false }) => {
    const commonInputStyles = "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none";

    return (
        <div className='grid grid-cols-[1fr_2fr] items-center gap-4 gap-6'>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            {isSelect ? (
                <select className={commonInputStyles} defaultValue={value}>
                    <option>{value}</option>
                    <option>Mrs.</option>
                </select>
            ) : (
                <input type={type} className={commonInputStyles} value={value} readOnly />
            )}
        </div>
    );
};

export default FormField;