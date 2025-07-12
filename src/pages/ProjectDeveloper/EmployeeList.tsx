// src/components/EmployeeList.tsx

import React from 'react';
import { employees, type Employee } from './developerData';
import { FaCheck } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineUser } from 'react-icons/ai';

const EmployeeList: React.FC<{ setIsUploadModalOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsUploadModalOpen }) => {
    return (
        <div>
            <div className="mb-4">
                <button onClick={() => setIsUploadModalOpen(true)} className="bg-[#0A5440] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-opacity-90">
                    <AiOutlineUser className="w-5 h-5" />
                    <span>Create Employee</span>
                </button>
            </div>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b-2 border-green-700">
                            <th className="py-2 pr-2 font-semibold">First name</th>
                            <th className="py-2 px-2 font-semibold">Last name</th>
                            <th className="py-2 px-2 font-semibold">Email</th>
                            <th className="py-2 px-2 font-semibold text-center">News</th>
                            <th className="py-2 pl-2 font-semibold text-center">Updates</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp: Employee) => (
                            <tr key={emp.id} className="">
                                <td className="py-3 pr-2">{emp.firstName}</td>
                                <td className="py-3 px-2">{emp.lastName}</td>
                                <td className="py-3 px-2">{emp.email}</td>
                                <td className="py-3 px-2 text-center">
                                    {emp.hasNews ? <FaCheck className="w-5 h-5 text-green-600 mx-auto" /> : <AiOutlineClose className="w-5 h-5 text-red-600 mx-auto" />}
                                </td>
                                <td className="py-3 pl-2 text-center">
                                    {emp.hasUpdates ? <FaCheck className="w-5 h-5 text-green-600 mx-auto" /> : <AiOutlineClose className="w-5 h-5 text-red-600 mx-auto" />}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;