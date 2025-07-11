import React from 'react';

interface DataFieldProps {
  label: string;
  value: string;
  className?: string;
  children?: React.ReactNode;
}

const DataField: React.FC<DataFieldProps> = ({ label, value, className = '', children }) => (
  <div className={`flex justify-between items-center ${className}`}>
    <span className="text-sm text-brand-text-light">{label}</span>
    <div className="flex items-center space-x-2">
      <span className="bg-white border border-gray-200 rounded-md px-3 py-1 text-sm text-brand-text-dark">{value}</span>
      {children}
    </div>
  </div>
);

export default DataField;