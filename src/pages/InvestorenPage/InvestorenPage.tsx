import React, { useState } from 'react';
import { Button, Input, Table } from 'antd';
import type { TableProps } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import InvestorsData from '../../assets/json/mockInvesters.json'; // Your JSON data path
import { UserIconWhite } from '../../assets/images/'; // Your image asset path
import { useNavigate } from 'react-router-dom'; // <-- 1. Import useNavigate

type Investor = {
    key: string;
    name: string;
    mail: string;
    phone: string;
    unitsInPortfolio: number;
    lastPurchase: string | null;
};

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    }).format(value);
};

const InvestorsPage: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate(); // <-- 2. Initialize the hook

    // The data filtering logic remains the same
    const filteredData = InvestorsData.investorsData.filter((investor) =>
        investor.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // The column definitions remain the same
    const columns: TableProps<Investor>['columns'] = [
        {
            title: 'Investor',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (
                <span className="font-semibold text-brand-text-dark">{text}</span>
            ),
        },
        {
            title: 'Mail',
            dataIndex: 'mail',
            key: 'mail',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Units in portfolio',
            dataIndex: 'unitsInPortfolio',
            key: 'unitsInPortfolio',
            render: (amount: number) => formatCurrency(amount),
        },
        {
            title: 'Last purchase',
            dataIndex: 'lastPurchase',
            key: 'lastPurchase',
            render: (date: string | null) => date || '-',
        },
    ];

    return (
        <div className="p-8 bg-brand-light-gray h-full overflow-y-auto">
            {/* Header remains the same */}
            <div className="flex justify-between items-center mb-6">
                <Button
                    type="primary"
                    size="large"
                    icon={<img src={UserIconWhite} alt="User Icon" />}
                    className="w-50 mr-4 !bg-[#005738] !hover:bg-[#00472e] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]"
                    onClick={() => console.log('Create investor clicked')}
                >
                    <span className="font-medium text-[15px] leading-[130%]">Create Investor</span>
                </Button>
                <Input
                    type="text"
                    allowClear
                    style={{ width: 200 }}
                    placeholder="search"
                    prefix={<SearchOutlined className="text-gray-400" />}
                    className="w-50"
                    size="large"
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-md overflow-auto">
                <Table
                    dataSource={filteredData}
                    columns={columns}
                    rowKey="key"
                    sticky
                    scroll={{
                        x: 'min-content',
                    }}
                    pagination={{
                        position: ['bottomLeft'],
                        defaultPageSize: 10,
                    }}
                    className="custom-ant-table"
                    // 4. Use onRow to make rows clickable
                    onRow={(record) => {
                        return {
                            onClick: () => navigate(`/investors/${record.key}`),
                        };
                    }}
                    // 5. Add a class for visual feedback (cursor pointer)
                    rowClassName="cursor-pointer hover:bg-gray-50 transition-colors"
                />
            </div>
        </div>
    );
};

export default InvestorsPage;