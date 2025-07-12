import React, { useState } from 'react';
import Dashboard from './Dashboard/Dashboard';
import Sales from './Sales/Sales';
import Recommendations from './Recommendations/Recommendations';
import AccountData from './AccountData/AccountData';
import EmployeesPage from './EmployeesPage/EmployeesPage';
import RecommendationsPage from './Recommendations/Recommendations';

const TABS = ['Dashboard', 'Sales', 'Employees', 'Recommendations', 'Account Data'];


const HomePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Dashboard');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Sales':
                return <Sales />;
            case 'Employees':
                return <EmployeesPage />;
            case 'Recommendations':
                return <RecommendationsPage />;
            case 'Account Data':
                return <AccountData />;
            default:
                return null;
        }
    };

    return (
        <div className="p-8 h-full overflow-hidden flex flex-col">
            {/* Tab Navigation */}
            <header className="mb-6 shrink-0">
                <nav className="flex space-x-8 border-b border-gray-300">
                    {TABS.map((tab) => (
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

            {/* Tab Content */}
            <main className="flex-1 overflow-y-auto pr-2 space-y-4">
                {renderTabContent()}
            </main>
        </div>
    );
};

export default HomePage;
