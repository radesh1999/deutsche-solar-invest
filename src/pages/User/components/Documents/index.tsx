import React from 'react';
import DocumentTable from './DocumentTable';
import InvoicesTable from './InvoicesTable';

const Documents: React.FC = () => {
    return (
        <div className="bg-brand-light-gray min-h-screen">
            <div className="max-w-7xl mx-auto space-y-6">
                <DocumentTable />
                <InvoicesTable />
            </div>
        </div>
    );
};

export default Documents;