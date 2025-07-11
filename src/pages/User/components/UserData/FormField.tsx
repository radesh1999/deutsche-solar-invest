import React from 'react';

interface FormFieldProps {
    label: string;
    children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ label, children }) => (
    <div className="grid grid-cols-3 items-center gap-4">
        <label className="text-sm text-brand-text-light col-span-1">{label}</label>
        <div className="col-span-2">
            {children}
        </div>
    </div>
);

export default FormField;