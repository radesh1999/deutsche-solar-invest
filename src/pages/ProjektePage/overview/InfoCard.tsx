import React from 'react';

interface InfoCardProps {
    children: React.ReactNode;
    className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white rounded-xl shadow-md p-4 ${className}`}>
            {children}
        </div>
    );
};

export default InfoCard;