import React, { useState, useEffect, useMemo } from 'react';
import { Button, message, Select, Table } from 'antd';
import ActionCard from './ActionCard';
import projectDataJson from '../../../../assets/json/Subsystems.json';
import { Calculator, ReserveInvest, UserIcon } from '../../../../assets/images';
import ModalPopup, { type ContractCreationData } from '../../../../components/Modal';

type SubunitStatus = 'available' | 'reserved' | 'sold';

interface Subunit {
    subunit: number;
    kwp: number;
    purchasePrice: number;
    status: SubunitStatus;
    note: string;
    investor: string;
}

interface ProjectData {
    projectName: string;
    projectAddress: string;
    projectTag: string;
    subunits: Subunit[];
    investors: { id: string; name: string }[];
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
};

const Subsystems: React.FC = () => {
    const [projectData, setProjectData] = useState<ProjectData | null>(null);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [selectedInvestor, setSelectedInvestor] = useState<string | undefined>(undefined);
    const [selectedReserveInvestor, setSelectedReserveInvestor] = useState<string | undefined>(undefined);

    const handleShowModal = () => {
        setIsModalOpen(true);
    };

    const handleCancelModal = () => {
        setIsModalOpen(false);
    };

    const handleCreateContract = (data: ContractCreationData) => {
        console.log('Creating contract with:', data);
        setIsCreating(true);

        // Simulate an API call
        setTimeout(() => {
            setIsCreating(false);
            setIsModalOpen(false);
            message.success('Contracts created successfully and emails sent!');
        }, 2000); // 2 second delay
    };

    useEffect(() => {
        setProjectData(projectDataJson as ProjectData);
    }, []);

    const handleRowSelectionChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const investmentTotal = useMemo(() => {
        if (!projectData) return 0;
        return selectedRowKeys.reduce((total: number, key) => {
            const numericKey = typeof key === 'number' ? key : parseInt(key as string, 10);
            const subunit = projectData.subunits.find(s => s.subunit === numericKey);
            return total + (subunit?.purchasePrice || 0);
        }, 0);
    }, [selectedRowKeys, projectData]);

    if (!projectData) {
        return <div>Loading...</div>;
    }

    const columns = [
        {
            title: 'Subunit',
            dataIndex: 'subunit',
            key: 'subunit',
            render: (text: number) => <span className="font-medium">{text}</span>,
        },
        {
            title: 'kWp',
            dataIndex: 'kwp',
            key: 'kwp',
            render: (value: number) => value.toFixed(2),
        },
        {
            title: 'Purchase Price',
            dataIndex: 'purchasePrice',
            key: 'purchasePrice',
            render: (value: number) => formatCurrency(value),
        },
        {
            title: 'Note',
            dataIndex: 'note',
            key: 'note',
        },
        {
            title: 'Investor',
            dataIndex: 'investor',
            key: 'investor',
            render: (text: string) => <span className="text-brand-text-dark">{text}</span>,
        },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: handleRowSelectionChange,
        getCheckboxProps: (record: Subunit) => ({
            disabled: record.status === 'sold',
        }),
    };

    const rowClassName = (record: Subunit) => {
        if (record.status === 'sold' || record.status === 'reserved') {
            return 'bg-[#DBE7E3] hover:bg-gray-50 cursor-pointer';
        }
        return 'hover:bg-gray-50 cursor-pointer';
    };

    return (
        <div className="">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="font-bold text-[17px] leading-[130%] tracking-[0]">{projectData.projectName}</h1>
                    <p className="text-gray-500 text-[12px] leading-[130%] tracking-[0]">{projectData.projectAddress}</p>
                </div>
                <span className="bg-[#15A772] h-[30px] flex items-center text-white text-sm font-semibold px-3 rounded-[8px]">
                    {projectData.projectTag}
                </span>
            </div>

            {/* Ant Design Table */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <Table
                    dataSource={projectData.subunits}
                    columns={columns}
                    rowKey="subunit"
                    pagination={false}
                    rowSelection={rowSelection}
                    rowClassName={rowClassName}
                />
            </div>

            {/* Action Cards */}
            <div className="mt-8 space-y-6 text-[14px]">
                <ActionCard
                    title="Investment total"
                    totalInvesment={formatCurrency(investmentTotal)}
                    actionButton={
                        <Button
                            type="primary"
                            size="large"
                            icon={<img src={Calculator} alt="Calculator" />}
                            className="!bg-[#005738] !hover:bg-[#00472e] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]"
                            disabled={selectedRowKeys.length === 0}
                            onClick={() => console.log('Create calculation clicked')}
                        >
                            <span className="font-medium text-[15px] leading-[130%]">Create calculation</span>
                        </Button>
                    }
                >
                    <p className="font-bold text-brand-text-light">
                        Would you like to create a calculation?
                    </p>
                    <p className="text-brand-text-light">
                        Select the desired attachments and then click on "Create calculation".
                    </p>
                </ActionCard>

                <ActionCard
                    actionButton={
                        <Button
                            type="primary"
                            size="large"
                            icon={<img src={ReserveInvest} />}
                            className="!bg-[#15A772] !hover:bg-[#0f8b5b] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]"
                            disabled={selectedRowKeys.length === 0 || !selectedReserveInvestor}
                        >
                            Reserve
                        </Button>
                    }
                >
                    <div className="space-y-2">
                        <Select
                            placeholder="select Investor"
                            className="w-64 mb-4"
                            size="large"
                            prefix={<img src={UserIcon} />}
                            options={projectData.investors.map(inv => ({ value: inv.id, label: inv.name }))}
                            value={selectedReserveInvestor}
                            onChange={setSelectedReserveInvestor}
                        />
                        <p className="text-brand-text-light max-w-lg mb-4 mt-4">
                            Would you like to make a reservation for investments?
                        </p>
                        <p>
                            Select the desired installations, choose the desired investor and click on "Reserve". The desired installations will then be reserved for you for 7 days.
                        </p>
                        <p><span className="font-semibold">NOTE:</span> A reservation is not a contractual purchase order and can be withdrawn by the project developer or DSI.</p>
                    </div>
                </ActionCard>

                <ActionCard
                    actionButton={
                        <Button
                            type="primary"
                            size="large"
                            icon={<img src={ReserveInvest} />}
                            className="!bg-[#F4CB4D] !hover:bg-[#e0b03c] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]"
                            // disabled={selectedRowKeys.length === 0 || !selectedInvestor}
                            onClick={handleShowModal}
                        >
                            Create contracts
                        </Button>
                    }
                >
                    <div className="space-y-2">
                        <Select
                            placeholder="select Investor"
                            className="w-64 mb-4"
                            size="large"
                            prefix={<img src={UserIcon} />}
                            options={projectData.investors.map(inv => ({ value: inv.id, label: inv.name }))}
                            value={selectedInvestor}
                            onChange={setSelectedInvestor}
                        />
                        <p className="text-brand-text-light max-w-lg mb-4 mt-4">
                            Would you like to create purchase contracts?
                        </p>
                        <p className="text-brand-text-light max-w-lg mb-4">
                            Select the desired assets, choose the desired investor and click on "Create contracts".
                        </p>
                        <p>
                            Mails with the purchase and service contracts will then be sent automatically to the following parties: Investor, Broker, DSI, project developer.
                        </p>
                    </div>
                </ActionCard>
            </div>
            <ModalPopup
                open={isModalOpen}
                onCancel={handleCancelModal}
                onCreate={handleCreateContract}
                isCreating={isCreating}
            />

        </div>
    );
};

export default Subsystems;
