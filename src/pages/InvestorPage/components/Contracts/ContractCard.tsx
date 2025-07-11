import React from 'react';
import DataField from './DataField';
import DocumentLink from './DocumentLink';
import type { ProjectContract } from '..';
import { PdfIcon } from '../../../../assets/images';

interface ProjectContractCardProps {
    project: ProjectContract;
}

const ContractCard: React.FC<ProjectContractCardProps> = ({ project }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-brand-text-dark mb-6">{project.location}</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-y-4 gap-x-4">
                {/* Left Column */}
                <div className="space-y-3 border-r-2 !border-[#005738] px-4">
                    <DataField label="Purchase date" value={project.purchaseDate} />
                    <DataField label="DC completion" value={project.dcCompletion} />
                    <DataField label="Power supply" value={project.powerSupply} />
                    <DataField label="Investment" value={project.investment} />
                    <DataField label="Equity" value={project.equity.amount}>
                        <span className="text-sm text-brand-text-light">{project.equity.percentage}</span>
                    </DataField>
                    <DataField label="Loan" value={project.loan.amount}>
                        <span className="text-sm text-brand-text-light">{project.loan.percentage}</span>
                    </DataField>
                </div>

                {/* Right Column */}
                <div className="space-y-3 lg:border-r-2 md:border-r-0 sm:border-r-0 !border-[#005738] px-4">
                    {project.invoices.map((invoice) => (
                        <DataField key={invoice.label} label={invoice.label} value={invoice.date}>
                            <img src={PdfIcon} className="h-5 w-5 text-red-500 cursor-pointer" />
                        </DataField>
                    ))}
                    <DataField label="Persona" value={project.persona} />
                </div>

                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 lg:border-t-0 md:border-t sm:border-t !border-[#005738] lg:mt-6 mt-6 pt-6 px-4">
                    <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-x-12 gap-y-4">
                        {project.documents.map(doc => <DocumentLink key={doc.label} label={doc.label} href={doc.link} />)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContractCard;