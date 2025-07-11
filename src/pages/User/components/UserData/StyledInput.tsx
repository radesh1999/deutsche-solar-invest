import React from 'react';

type StyledInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput: React.FC<StyledInputProps> = (props) => (
    <input
        {...props}
        className="w-full bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm text-brand-text-dark focus:ring-2 focus:ring-brand-dark-green focus:border-transparent transition"
    />
);

export default StyledInput;