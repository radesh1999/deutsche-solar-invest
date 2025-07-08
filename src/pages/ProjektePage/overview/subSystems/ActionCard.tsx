import React from 'react';

interface ActionCardProps {
    title?: string;
    totalInvesment?: string;
    children: React.ReactNode;
    actionButton: React.ReactNode;
}

const ActionCard: React.FC<ActionCardProps> = ({ title, children, actionButton, totalInvesment }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center">
                <div className="flex-1 pr-8">
                    {title && <span className='flex flex-row gap-x-8 items-center'>
                        <p className="text-[16px] text-brand-text-dark mb-4">{title}</p>
                        <p className="text-[16px] font-bold text-brand-text-dark mb-4">{totalInvesment}</p>
                    </span>}
                    {children}
                </div>
                <div className="flex-shrink-0 ">
                    {actionButton}
                </div>
            </div>
        </div>
    );
};

export default ActionCard;