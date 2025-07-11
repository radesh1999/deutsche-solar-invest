import React, { useState } from 'react';
import OverView from './OverView';
import Subsystems from './subSystems/Subsystems';
import DocumentsPage from './documents';

const TABS = ['Overview', 'Subsystems', 'Documents'];

const ProjectDetailPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Overview');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Overview':
                return <OverView />;
            case 'Subsystems':
                return <Subsystems />;
            case 'Documents':
                return <DocumentsPage />;
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

export default ProjectDetailPage;
