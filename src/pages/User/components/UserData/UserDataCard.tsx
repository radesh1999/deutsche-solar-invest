import React from 'react';
import FormField from './FormField';
import StyledInput from './StyledInput';
import StyledCheckbox from './StyledCheckbox';
import type { UserData } from './userMockData';

interface UserDataCardProps {
    data: UserData;
}

const UserDataCard: React.FC<UserDataCardProps> = ({ data }) => {
    const { personal, finance } = data;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 lg:gap-8 md:gap-4">
            {/* Personal Data */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-bold text-brand-text-dark mb-6">Personal Data</h2>
                <div className="space-y-4">
                    <FormField label="Title">
                        <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-brand-dark-green focus:border-transparent transition">
                            <option>Mr.</option>
                            <option>Mrs.</option>
                            <option>Ms.</option>
                        </select>
                    </FormField>
                    <FormField label="First name"><StyledInput type="text" value={personal.firstName} readOnly /></FormField>
                    <FormField label="Last name"><StyledInput type="text" value={personal.lastName} readOnly /></FormField>
                    <FormField label="Street"><StyledInput type="text" value={personal.street} readOnly /></FormField>
                    <FormField label="Zip code"><StyledInput type="text" value={personal.zipCode} readOnly /></FormField>
                    <FormField label="Location"><StyledInput type="text" value={personal.location} readOnly /></FormField>
                    <FormField label="Mail"><StyledInput type="email" value={personal.mail} readOnly /></FormField>
                    <FormField label="Phone"><StyledInput type="tel" value={personal.phone} readOnly /></FormField>
                    <FormField label="Mobil"><StyledInput type="tel" value={personal.mobil} readOnly /></FormField>
                    <FormField label="Birth date"><StyledInput type="text" value={personal.birthDate} readOnly /></FormField>
                </div>
            </div>

            {/* Finance Data */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-bold text-brand-text-dark mb-6">Finance Data</h2>
                <div className="space-y-4">
                    <FormField label="Tax number"><StyledInput type="text" value={finance.taxNumber} readOnly /></FormField>
                    <FormField label="Tax office"><StyledInput type="text" value={finance.taxOffice} readOnly /></FormField>
                    <FormField label="VAT Number"><StyledInput type="text" value={finance.vatNumber} readOnly /></FormField>
                    <FormField label="IBAN"><StyledInput type="text" value={finance.iban} readOnly /></FormField>
                    <FormField label="Bank"><StyledInput type="text" value={finance.bank} readOnly /></FormField>
                    <FormField label="Subject to VAT"><StyledCheckbox checked={finance.subjectToVAT} onChange={() => { }} /></FormField>
                    <FormField label="Receive newsletter"><StyledCheckbox checked={finance.receiveNewsletter} onChange={() => { }} /></FormField>
                    <FormField label="Receive project updates"><StyledCheckbox checked={finance.receiveProjectUpdates} onChange={() => { }} /></FormField>
                    <FormField label="Consulting room"><StyledInput type="text" value={finance.consultingRoom} readOnly /></FormField>
                    <FormField label="Commission amount"><StyledInput type="text" value={finance.commissionAmount} readOnly /></FormField>
                </div>
            </div>
        </div>
    );
};

export default UserDataCard;