// src/components/AccountPage.tsx
import React from 'react';
import FinanceData from './components/FInanceData';
import InvoicesTable from './components/InvoicesTable';
import { investorsData } from "../../../assets/json/mockInvesters.json"
import PersonalDataForm from './components/PersonalData';

const AccountPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-transparent">
            <div className="max-w-7xl mx-auto space-y-6">

                <h1 className="text-lg font-bold text-gray-800">{investorsData[0].name}</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
                    <PersonalDataForm data={investorsData[0].personalData} />
                    <FinanceData />
                </div>
                <InvoicesTable />
            </div>
        </div>
    );
};

export default AccountPage;