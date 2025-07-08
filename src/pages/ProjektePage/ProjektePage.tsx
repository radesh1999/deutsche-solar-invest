import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import { mockProjects } from '../../assets/json/myProjects.json';

const TABS = [
    'New Projects in sales',
    'Projects placed and under construction',
    'Projects in operation',
    'Secondary market projects',
];

const ProjektePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    // Renders content based on active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return mockProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ));
            case 1:
                return <Placeholder message="Inhalt für 'Projekte im Betrieb'" />;
            case 2:
                return <Placeholder message="Inhalt für 'Projekte im Betrieb'" />;
            case 3:
                return <Placeholder message="Inhalt für 'Zweitmarktprojekte'" />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col h-full p-6 bg-[#EBECF0] overflow-hidden">
            <header className="mb-4">
                <nav className="flex space-x-8 border-b border-gray-300">
                    {TABS.map((label, index) => (
                        <div key={label} className="relative">
                            <button
                                onClick={() => setActiveTab(index)}
                                className={`py-3 px-1 text-lg transition-colors duration-200 ${activeTab === index
                                    ? 'text-[#1D372E] font-semibold text-[15px] leading-[130%] tracking-[0] font-[SF-Pro-Text]'
                                    : 'text-[#1D372E91] font-semibold text-[15px] leading-[130%] tracking-[0] font-[SF-Pro-Text] hover:text-brand-text-dark'
                                    }`}
                            >
                                {label}
                            </button>
                            {activeTab === index && (
                                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-gray-300 via-[#2E5A4A] to-gray-300" />
                            )}
                        </div>
                    ))}
                </nav>
            </header>

            {/* Tab Content Area */}
            <main className="flex-1 overflow-y-auto pr-2 space-y-4">
                {renderTabContent()}
            </main>
        </div>
    );
};

export default ProjektePage;

// Reusable placeholder component for empty tab content
const Placeholder: React.FC<{ message: string }> = ({ message }) => (
    <div className="text-gray-500 text-center py-10">{message}</div>
);
