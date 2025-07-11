import React from 'react';
import EmployeeTable from './EmployeeTable';
import EmployeeRequests from './EmployeeRequest';
import { UserIcon } from '../../../../assets/images';
import { mockEmployeeData } from './employeeData';
import { RiUser6Line } from "react-icons/ri";

const Employees: React.FC = () => {
    const data = mockEmployeeData;

    return (
        <div className="bg-brand-light-gray min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <h1 className="text-lg font-bold text-brand-text-dark">{data.managerName}</h1>
                    <button className="!bg-[#005738] !hover:bg-[#00472e] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]"
                    >
                        <RiUser6Line className="h-5 w-5" />
                        <span>Create Employee</span>
                    </button>
                </header>

                <main>
                    <EmployeeTable employees={data.employees} />
                    <EmployeeRequests requests={data.requests} />
                </main>
            </div>
        </div>
    );
};

export default Employees