import React from 'react';

interface DashboardCardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, children, className }) => (
    <div className={`bg-white rounded-xl shadow-sm p-6 ${className}`}>
        <h2 className="text-md font-bold text-brand-text-dark mb-4">{title}</h2>
        {children}
    </div>
);

export default DashboardCard;