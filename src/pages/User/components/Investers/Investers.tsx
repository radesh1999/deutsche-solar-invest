import React, { useState } from 'react';
import { Button, Input, Table } from 'antd';
import type { TableProps } from 'antd';
import InvestorsData from '../../../../assets/json/mockInvesters.json'; // Your JSON data path
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

const Investors: React.FC = () => {
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
        <div className="bg-brand-light-gray h-full overflow-y-auto">

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
                    rowClassName="cursor-pointer hover:bg-gray-50 transition-colors"
                />
            </div>
        </div>
    );
};

export default Investors;