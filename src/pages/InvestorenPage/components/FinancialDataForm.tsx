import React from 'react';
import { Input, Select, Checkbox } from 'antd';

const { TextArea } = Input;

interface FinancialDataFormProps {
    data: {
        taxNumber: string;
        taxOffice: string;
        income: number;
        job: string;
        taxTable: string;
        churchTax: boolean;
        federalState: string;
        notes: string;
    };
}

const FormRow: React.FC<{ label: React.ReactNode; children: React.ReactNode }> = ({ label, children }) => (
    <div className="grid grid-cols-[1fr_2fr] items-center gap-4">
        <label className="text-sm font-medium text-brand-text-light justify-self-start">{label}</label>
        {children}
    </div>
);

const FinancialDataForm: React.FC<FinancialDataFormProps> = ({ data }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <h2 className="text-lg font-bold text-brand-text-dark mb-4">Finanzdaten</h2>
            <FormRow label="Tax number"><Input defaultValue={data.taxNumber} /></FormRow>
            <FormRow label="Tax office"><Input defaultValue={data.taxOffice} /></FormRow>
            <FormRow label={<span className="flex items-center gap-1">ø Income</span>}>
                <Input defaultValue={data.income.toLocaleString('de-DE')} addonAfter="€" />
            </FormRow>
            <FormRow label="Job"><Input defaultValue={data.job} /></FormRow>
            <FormRow label="Tax table"><Select defaultValue={data.taxTable} options={[{ value: 'Splitting', label: 'Splitting' }]} /></FormRow>
            <FormRow label="Church tax"><Checkbox defaultChecked={data.churchTax} /></FormRow>
            <FormRow label="Federal state"><Select placeholder="Select a state" options={[{ value: 'California', label: 'California' }]} /></FormRow>
            <FormRow label="Notizen"><TextArea defaultValue={data.notes} rows={4} /></FormRow>
        </div>
    );
};

export default FinancialDataForm;