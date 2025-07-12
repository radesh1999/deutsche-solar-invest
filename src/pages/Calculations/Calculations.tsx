// src/pages/DashboardPage.tsx

import React from 'react';
import ProjectHeader from './ProjectHeader';
import ProjectDetails from './ProjectDetails';
import InvestorSection from './InvestorSection';
import { IncomeCard, LoanCard } from './FinancialCards';
import { DepreciationCard, ResultsTabs } from './ResultsTabs';

const DashboardPage: React.FC = () => {
    return (
        <div className="p-8 h-full overflow-y-auto">
            <div className="max-w-screen-xl mx-auto space-y-6">
                <ProjectHeader />
                <div className="space-y-6">
                    <ProjectDetails />
                    <InvestorSection />
                    <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-6">
                        <div className="grid grid-cols-2 gap-6">
                            <IncomeCard />
                            <LoanCard />
                        </div>
                        <div className="grid grid-cols-1 space-y-6">
                            <DepreciationCard />
                            <ResultsTabs />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardPage;