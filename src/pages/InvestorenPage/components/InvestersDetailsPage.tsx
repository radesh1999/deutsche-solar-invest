import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { investorsData } from '../../../assets/json/mockInvesters.json';
import PersonalDataForm from './PersonalDataForm';
import FinancialDataForm from './FinancialDataForm';
import PersonasTable from './PersonalDataTable';
import SearchRequestModal from './SearchRequestModal';
import CreatePersonaModal from './CreatePersonalModal';

const tabs = ['Investor data', 'Contracts', 'Bank/Tax consultant'];

const InvestorDetailPage: React.FC = () => {
    const { investorId } = useParams<{ investorId: string }>();
    const [activeTab, setActiveTab] = useState('Investor data');

    // State for Modals
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isPersonaModalOpen, setIsPersonaModalOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    const investor = useMemo(() => {
        return investorsData.find((inv) => inv.key === investorId);
    }, [investorId]);

    // --- Modal Handlers ---
    const handleCreateSearchRequest = (values: any) => {
        console.log('Creating search request:', values);
        setIsCreating(true);
        setTimeout(() => {
            setIsCreating(false);
            setIsSearchModalOpen(false);
            message.success('Search request created!');
        }, 1500);
    };

    const handleCreatePersona = (values: any) => {
        console.log('Creating new persona:', values);
        setIsCreating(true);
        setTimeout(() => {
            setIsCreating(false);
            setIsPersonaModalOpen(false);
            message.success('New persona created!');
        }, 1500);
    };

    if (!investor) {
        return (
            <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Investor not found</h1>
                <Link to="/investoren" className="text-blue-500 hover:underline mt-4 inline-block">
                    Back to Investors List
                </Link>
            </div>
        );
    }

    return (
        <div className="p-8 bg-brand-light-gray h-full overflow-y-auto">
            {/* Header Tabs */}
            <nav className="flex space-x-8 border-b border-gray-200 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-3 text-base font-medium transition-colors duration-200 focus:outline-none ${activeTab === tab
                            ? 'text-brand-green border-b-2 border-brand-green'
                            : 'text-brand-text-light hover:text-brand-text-dark'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            {/* Page Title & Action */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-brand-text-dark">{investor.name}</h1>
                <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    size="large"
                    className="!bg-[#F4CB4D] !hover:bg-[#e0b03c] !border-none !text-black flex items-center gap-2 px-4 py-2 rounded-[8px]"
                    onClick={() => setIsSearchModalOpen(true)} // <-- Open Search Modal
                >
                    Create search request
                </Button>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PersonalDataForm data={investor.personalData} />
                <FinancialDataForm data={investor.financialData} />
            </div>

            <PersonasTable
                personas={investor.personas}
                onCreatePersonaClick={() => setIsPersonaModalOpen(true)} // <-- Open Persona Modal
            />

            {/* Render Modals */}
            <SearchRequestModal
                open={isSearchModalOpen}
                investorName={investor.name}
                onCancel={() => setIsSearchModalOpen(false)}
                onCreate={handleCreateSearchRequest}
                isCreating={isCreating}
            />

            <CreatePersonaModal
                open={isPersonaModalOpen}
                onCancel={() => setIsPersonaModalOpen(false)}
                onCreate={handleCreatePersona}
                isCreating={isCreating}
            />
        </div>
    );
};

export default InvestorDetailPage;