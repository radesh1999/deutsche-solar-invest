import React, { useState } from 'react';
import { mockData } from '../index';
import DocumentLink from '../Contracts/DocumentLink';
import ContractCard from '../Contracts/ContractCard';
import { SearchOutlined } from '@ant-design/icons';

const InvestorContractsPage: React.FC = () => {
    const data = mockData;

    return (
        <div className="bg-brand-light-gray min-h-screen">
            <div className="space-y-8">
                {/* Header */}
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h1 className="text-lg font-bold text-brand-text-dark">{data.investorName}</h1>
                    <button className="!bg-[#F4CB4D] !hover:bg-[#e0b03c] !border-none !text-black flex items-center gap-2 px-4 py-2 rounded-[8px]"
                    >
                        <SearchOutlined className="h-5 w-5" />
                        <span>Create search request</span>
                    </button>
                </header>

                {/* Portfolio Summary Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <span className="text-brand-text-dark lg:text-md md:text-md sm:text-sm font-medium">Total portfolio of PV-Systems</span>
                        <span className="bg-gray-100 border border-gray-200 rounded-md px-4 py-1.5 font-semibold text-brand-text-dark whitespace-nowrap">{data.totalPortfolioValue}</span>
                    </div>
                    <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-start sm:items-start gap-x-6 gap-y-2">
                        {data.globalDocuments.map(doc => <DocumentLink key={doc.label} label={doc.label} href={doc.link} />)}
                    </div>
                </div>

                {/* Project Contract Cards */}
                <div className="space-y-6">
                    {data.projects.map(project => (
                        <ContractCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InvestorContractsPage;