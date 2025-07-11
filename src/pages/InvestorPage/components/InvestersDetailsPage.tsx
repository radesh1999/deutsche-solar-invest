import React, { useState } from 'react';
import InvesterData from './InvesterData';
import InvestorContractsPage from './Contracts/InvesterContractPage';
import { PiPlaceholder } from 'react-icons/pi';

const tabs = ['Investor data', 'Contracts', 'Bank/Tax consultant'];

const InvestorDetailPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Investor data');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Investor data':
                return <InvesterData />;
            case 'Contracts':
                return <InvestorContractsPage />;
            case 'Bank/Tax consultant':
                return <h2 className='p-4'>Bank/Tax consultant Page</h2>;
            default:
                return null;
        }
    };

    return (
        <div className="p-8 bg-brand-light-gray h-full overflow-y-auto">
            <header className="mb-6 shrink-0">
                <nav className="flex space-x-8 border-b border-gray-300">
                    {tabs.map((tab) => (
                        <div key={tab} className="relative">
                            <button
                                onClick={() => setActiveTab(tab)}
                                className={`py-3 px-1 text-lg transition-colors duration-200 ${activeTab === tab
                                    ? 'text-[#1D372E] font-semibold text-[15px] leading-[130%] tracking-[0] font-[SF-Pro-Text]'
                                    : 'text-[#1D372E91] font-semibold text-[15px] leading-[130%] tracking-[0] font-[SF-Pro-Text] hover:text-brand-text-dark'
                                    }`}
                            >
                                {tab}
                            </button>
                            {activeTab === tab && (
                                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-gray-300 via-[#2E5A4A] to-gray-300" />
                            )}
                        </div>
                    ))}
                </nav>
            </header>
            <main className="flex-1 overflow-y-auto pr-2 space-y-4">
                {renderTabContent()}
            </main>

        </div>
    );
};

export default InvestorDetailPage;