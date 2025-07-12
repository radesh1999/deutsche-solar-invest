// src/pages/ProjectDeveloperPage.tsx

import React, { useState } from 'react';
import DeveloperList from './DeveloperList';
import EmployeeList from './EmployeeList';
import { AiOutlineUser } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import CommonModal from './Modal';
import { mockDashboardData } from "./developerData"
import { message } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';

interface FieldConfig {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'number' | 'select' | 'checkbox';
    options?: { label: string; value: string | number }[]; // For select or checkbox
}

const ProjectDeveloper: React.FC = () => {
    const data = mockDashboardData;
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    const handleUpload = (values: any) => {
        console.log('Creating new persona:', values);
        setIsCreating(true);
        setTimeout(() => {
            setIsCreating(false);
            setIsUploadModalOpen(false);
            message.success('New persona created!');
        }, 1500);
    };

    const fields: FieldConfig[] = [
        { label: 'First name/Company name', name: 'firstName' },
        { label: 'Last name/Legal form', name: 'lastName' },
        { label: 'Mail', name: 'mail' },
        { label: 'News Letter', name: 'newsLetter', type: 'checkbox' },
        { label: 'Project Updates', name: 'projectUpdates', type: 'checkbox' },
    ];
    return (
        <div className="bg-[#F3F4F6] min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-screen-xl mx-auto">
                {/* Header Section */}
                <header className="flex justify-between items-center mb-6">
                    <button className="bg-[#0A5440] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-opacity-90">
                        <AiOutlineUser className="w-5 h-5" />
                        <span>Create Developer</span>
                    </button>
                    <div className="relative w-1/3">
                        <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="search"
                            className="w-full bg-white pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>
                </header>

                {/* Main Content Grid */}
                <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                        <DeveloperList />
                    </div>
                    <div className="lg:col-span-2">
                        <EmployeeList setIsUploadModalOpen={setIsUploadModalOpen} />
                    </div>
                </main>
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
        </div>
    );
};

export default ProjectDeveloper;