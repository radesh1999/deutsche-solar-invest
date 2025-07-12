import React from 'react';

const SummaryCard: React.FC<{ title: string; value: string }> = ({ title, value }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-gray-600 text-sm">{title}</h3>
            <p className="text-lg font-bold mt-1">{value}</p>
        </div>
    );
};

export default SummaryCard;