import React from 'react';
import type { UserRequest } from './userMockData';

const StatusBadge: React.FC<{ status: 'Reply' | 'Open' }> = ({ status }) => {
    const isReply = status === 'Reply';
    return (
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${isReply
            ? 'bg-[#DEFFEB] text-[#3538CD]'
            : 'bg-[#DEFFEB] text-[#2E5A4A]'
            }`}>
            {status}
        </span>
    );
};

const RequestItem: React.FC<{ request: UserRequest }> = ({ request }) => (
    <div className="border-t border-gray-200">
        <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex-1">
                <p className="text-sm text-brand-text-light">
                    {request.date} <strong className="text-brand-text-dark">{request.category}</strong> {request.message}
                </p>
            </div>
            <StatusBadge status={request.status} />
        </div>
        {request.reply && (
            <div className="bg-brand-light-green p-4  bg-[#DEFFEB]">
                <p className="text-sm text-brand-text-dark">{request.reply}</p>
            </div>
        )}
    </div>
);

interface RequestsCardProps {
    requests: UserRequest[];
}

const RequestsCard: React.FC<RequestsCardProps> = ({ requests }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm mt-8">
            <h2 className="text-lg font-bold text-brand-text-dark p-6">Requests</h2>
            <div className="flex flex-col">
                {requests.map((request, index) => (
                    <RequestItem key={index} request={request} />
                ))}
            </div>
        </div>
    );
};

export default RequestsCard;