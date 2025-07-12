import React from 'react';
import type { Employee } from './employeeData';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

interface EmployeeTableProps {
    employees: Employee[];
    onEdit: (employee: any) => void;
    onDelete: (id: string) => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, onEdit, onDelete }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto p-6">
            <table className="min-w-full table-auto text-sm">
                <thead className=" !border-b-2 boder-[#005738] text-gray-700 font-semibold">
                    <tr>
                        <th className="px-6 py-4 text-left">First name</th>
                        <th className="px-6 py-4 text-left">Last name</th>
                        <th className="px-6 py-4 text-left">Email</th>
                        <th className="px-6 py-4 text-left">Phone</th>
                        <th className="px-6 py-4 text-left">Consulting room</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr
                            key={employee.id}
                            className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                        >
                            <td className="px-6 py-4">{employee.firstName}</td>
                            <td className="px-6 py-4">{employee.lastName}</td>
                            <td className="px-6 py-4">{employee.email}</td>
                            <td className="px-6 py-4">{employee.phone}</td>
                            <td className="px-6 py-4">{employee.consultingRoom}</td>
                            <td className="px-6 py-4 text-right space-x-4">
                                <FiEdit2 onClick={() => onEdit(employee)} className="inline-block cursor-pointer text-[#667085] hover:text-[#005738]" />
                                <RiDeleteBinLine onClick={() => onDelete(employee.id)} className="inline-block cursor-pointer text-[#B10000] hover:text-red-500" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
