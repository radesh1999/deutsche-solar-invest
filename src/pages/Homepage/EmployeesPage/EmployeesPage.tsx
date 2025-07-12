import React, { useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import EmployeeRequests from './components/EmployeeRequest';
import { mockEmployeeData } from './components/employeeData';
import { RiUser6Line } from "react-icons/ri";
import CommonModal from './components/Modal';
import { message } from 'antd';

interface FieldConfig {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'number' | 'select' | 'checkbox';
    options?: { label: string; value: string | number }[];
}

const EmployeesPage: React.FC = () => {
    const initialEmployees = mockEmployeeData.employees;
    const [employees, setEmployees] = useState(initialEmployees);
    const [requests] = useState(mockEmployeeData.requests);
    const [editingEmployee, setEditingEmployee] = useState<any | null>(null);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    const openCreateModal = () => {
        setEditingEmployee(null);
        setIsUploadModalOpen(true);
    };

    const handleUpload = (values: any) => {
        setIsCreating(true);

        setTimeout(() => {
            let updatedList;

            if (editingEmployee) {
                // Update
                updatedList = employees.map(emp =>
                    emp.id === editingEmployee.id ? { ...emp, ...values } : emp
                );
                message.success('Employee updated!');
            } else {
                // Create
                const newEmployee = { id: Date.now().toString(), ...values };
                updatedList = [...employees, newEmployee];
                message.success('Employee created!');
            }

            setEmployees(updatedList);
            setIsCreating(false);
            setIsUploadModalOpen(false);
        }, 1000);
    };

    const handleEdit = (employee: any) => {
        console.log("Editing:", employee); // Debug
        setEditingEmployee(employee);
        setIsUploadModalOpen(true);
    };

    const handleDelete = (id: string) => {
        const updated = employees.filter(emp => emp.id !== id);
        setEmployees(updated);
        message.success('Employee deleted!');
    };

    const fields: FieldConfig[] = [
        { label: 'First name/Company name', name: 'firstName' },
        { label: 'Last name/Legal form', name: 'lastName' },
        { label: 'Email', name: 'email' },
        { label: 'Phone', name: 'phone', type: 'number' },
        { label: 'Consulting Room', name: 'consultingRoom' },
    ];

    return (
        <div className="bg-brand-light-gray min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <h1 className="text-lg font-bold text-brand-text-dark">{mockEmployeeData.managerName}</h1>
                    <button
                        onClick={openCreateModal}
                        className="!bg-[#005738] !hover:bg-[#00472e] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]"
                    >
                        <RiUser6Line className="h-5 w-5" />
                        <span>Create Employee</span>
                    </button>
                </header>

                <main>
                    <EmployeeTable
                        employees={employees}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                    <EmployeeRequests requests={requests} />
                </main>
            </div>

            <CommonModal
                open={isUploadModalOpen}
                onCancel={() => setIsUploadModalOpen(false)}
                onCreate={handleUpload}
                isCreating={isCreating}
                title={editingEmployee ? "Edit Employee" : "New Employee"}
                fields={fields}
                initialValues={editingEmployee || {}}
                submitButtonText={editingEmployee ? "Update Employee" : "Create Employee"}
                submitButtonIcon={<RiUser6Line className="h-4 w-4" />}
                submitButtonColorClass="!bg-[#005738] hover:!bg-[#00472e]"
            />
        </div>
    );
};

export default EmployeesPage;
