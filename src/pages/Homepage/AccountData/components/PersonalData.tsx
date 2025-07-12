import React from 'react';
import { Input, Select } from 'antd';
import Checkbox from './Checkbox';

interface PersonalDataFormProps {
    data: {
        title: string;
        firstName: string;
        lastName: string;
        street: string;
        zip: string;
        location: string;
        mail: string;
        phone: string;
        mobil: string;
        birthDate: string;
        differentPostalAddress: boolean;
    };
}

const FormRow: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div className="grid grid-cols-[1fr_2fr] items-center gap-4">
        <label className="text-sm font-medium text-brand-text-light justify-self-start">{label}</label>
        {children}
    </div>
);

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ data }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <h2 className="text-lg font-bold text-brand-text-dark mb-4">Personal Data</h2>
            <FormRow label="Title"><Select defaultValue={data.title} options={[{ value: 'Mr.', label: 'Mr.' }, { value: 'Mrs.', label: 'Mrs.' }]} /></FormRow>
            <FormRow label="First name"><Input defaultValue={data.firstName} /></FormRow>
            <FormRow label="Last name"><Input defaultValue={data.lastName} /></FormRow>
            <FormRow label="Street"><Input defaultValue={data.street} /></FormRow>
            <FormRow label="Zip code"><Input defaultValue={data.zip} /></FormRow>
            <FormRow label="Location"><Input defaultValue={data.location} /></FormRow>
            <FormRow label="Mail"><Input defaultValue={data.mail} /></FormRow>
            <FormRow label="Phone"><Input defaultValue={data.phone} /></FormRow>
            <FormRow label="Mobil"><Input defaultValue={data.mobil} /></FormRow>
            <FormRow label="Birth date"><Input defaultValue={data.birthDate} /></FormRow>
            <div className="pt-2">
                <Checkbox label="different postal address" name="postal_address" />
            </div>
        </div>
    );
};

export default PersonalDataForm;