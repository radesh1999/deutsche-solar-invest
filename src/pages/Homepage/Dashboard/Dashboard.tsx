import React, { useState } from 'react';
import { mockDashboardData } from './components/dashboardData';
import KpiCard from './components/KpiCard';
import DashboardCard from './components/DashboardCard';
import ReservationsTable from './components/ReservationsTable';
import MyRequests from './components/MyRequests';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { message } from 'antd';
import CommonModal from './components/Modal';
import { IoArrowRedoOutline } from "react-icons/io5";

interface FieldConfig {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'number' | 'select' | 'checkbox';
    options?: { label: string; value: string | number }[]; // For select or checkbox
}

const MainDashboard: React.FC = () => {
    const data = mockDashboardData;
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isCreatingSearch, setIsCreatingSearch] = useState(false);

    const handleUpload = (values: any) => {
        console.log('Creating new persona:', values);
        setIsCreating(true);
        setTimeout(() => {
            setIsCreating(false);
            setIsUploadModalOpen(false);
            message.success('New persona created!');
        }, 1500);
    };

    const handleSearchCreate = (values: any) => {
        console.log('Search Request:', values);
        setIsCreatingSearch(true);
        setTimeout(() => {
            setIsCreatingSearch(false);
            setIsSearchModalOpen(false);
            message.success('Search request created!');
        }, 1500);
    };

    const fields: FieldConfig[] = [
        { label: 'First name/Company name', name: 'firstName' },
        { label: 'Last name/Legal form', name: 'lastName' },
        { label: 'Street', name: 'street' },
        { label: 'Zip code', name: 'zip', type: 'text' },
        { label: 'Location', name: 'location' },
    ];

    const searchRequestFields: FieldConfig[] = [
        { label: 'Request Title', name: 'title' },
        {
            label: 'Category',
            name: 'category',
            type: 'select',
            options: [
                { label: 'Finance', value: 'finance' },
                { label: 'Real Estate', value: 'real-estate' },
            ],
        },
        { label: 'Accept Terms', name: 'termsAccepted', type: 'checkbox' },
    ];

    return (
        <div className="bg-brand-light-gray min-h-screen">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex justify-end items-center gap-4">
                    <button onClick={() => setIsUploadModalOpen(true)} className="!bg-[#005738] !hover:bg-[#00472e] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]"
                    >
                        <CloudDownloadOutlined className="h-5 w-5" />
                        <span>Documents Upload</span>
                    </button>
                    <button onClick={() => setIsSearchModalOpen(true)} className="!bg-[#F4CB4D] !hover:bg-[#e0b03c] !border-none !text-black flex items-center gap-2 px-4 py-2 rounded-[8px]"
                    >
                        <FaMagnifyingGlass className="h-5 w-5" />
                        <span>Create search request</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="grid grid-cols-2 lg:col-span-1 md:col-span-2  gap-6">
                            <KpiCard {...data.kpis.sales} />
                            <KpiCard {...data.kpis.referral} />
                        </div>
                        <div className="grid grid-rows-2 lg:col-span-1 md:col-span-2 gap-6">
                            <DashboardCard title="Open search requests">
                                <ul className="space-y-3">
                                    {data.openSearchRequests.map(req => (
                                        <li key={req.id} className=" text-sm">
                                            <div className='flex flex justify-between items-center gap-3'>
                                                <p className="font-semibold text-brand-text-dark">{req.name}</p>
                                                <p className="text-brand-text-light">{req.range}</p>
                                                <div className="flex items-center space-x-4">
                                                    <FiEdit2 className="cursor-pointer text-[#667085] hover:text-[#005738]" />
                                                    <RiDeleteBinLine className="text-[#B10000] cursor-pointer hover:text-red-500" />
                                                </div>
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            </DashboardCard>
                            <DashboardCard title="To Do">
                                <ul className="space-y-3 text-sm text-brand-text-dark list-none list-inside">
                                    {data.toDoList.map(item => <li key={item.title}>
                                        <span className='flex flex-wrap gap-2 '>
                                            <p className='font-semibold'>{item.title}</p>
                                            <p>{item.text}</p>
                                        </span>
                                    </li>)}
                                </ul>
                            </DashboardCard>
                        </div>
                    </div>

                    <div className="">
                        <ReservationsTable />
                    </div>

                    <div className="">
                        <MyRequests />
                    </div>
                </div>
            </div>

            <CommonModal
                open={isUploadModalOpen}
                onCancel={() => setIsUploadModalOpen(false)}
                onCreate={handleUpload}
                isCreating={isCreating}
                title="Upload Document"
                fields={fields}
                submitButtonText="Documents Upload"
                submitButtonIcon={<CloudDownloadOutlined className='w-4 h-4' />}
                submitButtonColorClass="!bg-[#005738] hover:!bg-[#00472e]"
            />

            <CommonModal
                open={isSearchModalOpen}
                onCancel={() => setIsSearchModalOpen(false)}
                onCreate={handleSearchCreate}
                isCreating={isCreatingSearch}
                title="Create Search Request"
                fields={searchRequestFields}
                submitButtonText="Send Request"
                submitButtonIcon={<IoArrowRedoOutline className='w-4 h-4' />}
                submitButtonColorClass="!bg-[#F4CB4D] hover:!bg-[#e0b03c] text-black"
            />
        </div>
    );
};

export default MainDashboard;