// src/components/FinanceData.tsx
import React from 'react';
import FormField from './FormField';
import Checkbox from './Checkbox';
import { userData } from './accountDataMock';
import { FaFilePdf } from 'react-icons/fa';

const FinanceData: React.FC = () => {
    const { financeData } = userData;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-lg font-bold mb-4">Finance data</h2>

            <FormField label="Tax number" value={financeData.taxNumber} />
            <FormField label="Tax office" value={financeData.taxOffice} />
            <FormField label="Bank" value={financeData.bank} />
            <FormField label="IBAN" value={financeData.iban} />
            <FormField label="Register number" value={financeData.registerNumber} />

            <div className='grid grid-cols-[1fr_2fr] items-center gap-4'>
                <label className="block text-sm font-medium text-gray-700">Certification 34</label>
                <div className="flex flex-wrap gap-4">
                    <Checkbox label="c" name="cert_c" />
                    <Checkbox label="d" name="cert_d" />
                    <Checkbox label="f1" name="cert_f1" />
                    <Checkbox label="f2" name="cert_f2" />
                    <Checkbox label="f3" name="cert_f3" />
                    <Checkbox label="h" name="cert_h" />
                </div>
            </div>

            <FormField label="VAT number" value={financeData.vatNumber} />

            <div className='grid grid-cols-[1fr_2fr] items-center gap-4'>
                <label className="block text-sm font-medium text-gray-700"></label>
                <div className="flex flex-wrap gap-4">
                    <Checkbox label="Subject to VAT" name="vat_subject" checked className='flex flex-row-reverse gap-2' />
                    <Checkbox label="Small businesses according to §19 UStG" name="small_business" className='flex flex-row-reverse gap-2' />
                </div>
            </div>

            <div className='grid grid-cols-[1fr_2fr] items-center gap-4'>
                <label className="block text-sm font-medium text-gray-700 mb-1">Consulting room</label>
                <div className="w-full p-2 border border-gray-300 rounded-md bg-gray-50">
                    {financeData.consultingRoom}
                </div>
            </div>

            <div className="w-full grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                {["Kooperation", "Handelregister", "BPA"].map((label) => (
                    <a key={label} href="#" className="flex items-center gap-1 text-red-600">
                        <span><FaFilePdf /></span><span>{label}</span>
                    </a>
                ))}
            </div>

        </div>
    );
};

export default FinanceData;