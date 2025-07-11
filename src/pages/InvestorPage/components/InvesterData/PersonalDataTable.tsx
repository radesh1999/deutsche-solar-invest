import React from 'react';
import { Button, Table } from 'antd';
import type { TableProps } from 'antd';
import type { Persona } from '../mockDataInvestors';
import { UserIconWhite } from '../../../../assets/images';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

interface PersonasTableProps {
    personas: Persona[];
    onCreatePersonaClick: () => void;
}

const PersonalDataTable: React.FC<PersonasTableProps> = ({ personas, onCreatePersonaClick }) => {
    const columns: TableProps<Persona>['columns'] = [
        { title: 'First name/Company name', dataIndex: 'firstName', key: 'firstName' },
        { title: 'Nachname/Legal form', dataIndex: 'lastNameOrLegalForm', key: 'lastNameOrLegalForm' },
        { title: 'Street', dataIndex: 'street', key: 'street' },
        { title: 'Zip', dataIndex: 'zip', key: 'zip' },
        { title: 'Location', dataIndex: 'location', key: 'location' },
        {
            title: '',
            dataIndex: 'id',
            key: 'actions', // It's good practice to give a key to the actions column
            render: () => (
                <div className="flex items-center space-x-4">
                    <FiEdit2 className="cursor-pointer text-[#667085] hover:text-[#005738]" />
                    <RiDeleteBinLine className="text-[#B10000] cursor-pointer hover:text-red-500" />
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-brand-text-dark">Personas</h2>
                <Button type="primary" onClick={onCreatePersonaClick} icon={<img src={UserIconWhite} />} className="!bg-[#005738] !hover:bg-[#00472e] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]">
                    Create Person
                </Button>
            </div>

            {/* Replace CustomTable with Ant Design's Table */}
            <Table
                columns={columns}
                dataSource={personas} // antd uses `dataSource` instead of `data`
                rowKey="id"
                pagination={{ pageSize: 5 }} // antd uses a pagination object
            />
        </div>
    );
};

export default PersonalDataTable;