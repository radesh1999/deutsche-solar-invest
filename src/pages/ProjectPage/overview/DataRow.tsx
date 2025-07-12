import React from 'react';

interface DataRowProps {
    icon: React.ReactNode;
    label: React.ReactNode;
    value: React.ReactNode;
    secondaryValue?: React.ReactNode;
}

const DataRow: React.FC<DataRowProps> = ({ icon, label, value, secondaryValue }) => {
    return (
        <div className="flex items-center justify-between py-1 px-1">
            <div className="flex items-center space-x-2 text-gray-700 mt-1">
                <span className="text-1xl text-gray-400 w-6 text-center">{icon}</span>
                <div className="text-black font-medium font-normal text-[13px] leading-[130%] tracking-[0]">{label}</div>
            </div>
            <div className="text-right space-y-1">
                <p className="text-black font-medium text-[13px] leading-[130%] tracking-[0]">{value}</p>
                {secondaryValue && <p className="text-black font-medium text-[13px] leading-[130%] tracking-[0]">{secondaryValue}</p>}
            </div>
        </div>
    );
};

export default DataRow;