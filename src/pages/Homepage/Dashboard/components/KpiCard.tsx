import React from 'react';

interface KpiCardProps {
    title: string;
    total: string;
    commission: string;
    commissionPaid: string;
    openCommission: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, total, commission, commissionPaid, openCommission }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex-1">
            <div className="flex flex-col items-center p-6">
                <p className="text-md text-brand-text-light">{title}</p>
                <p className="text-lg font-bold text-brand-text-dark mt-1">{total}</p>
            </div>
            <div className="bg-[#D6FFE6] py-4 space-y-6">
                <div className="flex flex-col items-center text-sm">
                    <span className="text-brand-text-light">Commission</span>
                    <span className="font-semibold text-brand-text-dark">{commission}</span>
                </div>
                <div className="flex flex-col items-center text-sm">
                    <span className="text-brand-text-light">Commission paid</span>
                    <span className="font-semibold text-brand-text-dark">{commissionPaid}</span>
                </div>
                <div className="flex flex-col items-center text-sm">
                    <span className="text-brand-text-light">Open commission</span>
                    <span className="font-semibold text-brand-text-dark">{openCommission}</span>
                </div>
            </div>
        </div>
    );
};

export default KpiCard;