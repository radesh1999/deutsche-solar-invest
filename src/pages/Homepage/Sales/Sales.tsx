import React from 'react';
import { salesData } from './components/salesData';
import SalesChart from './components/SalesChart';
import SalesTable from './components/SalesTable';
import { DatePicker } from 'antd';

const SalesPage: React.FC = () => {
    return (
        <div className="bg-brand-light-gray min-h-screen">
            <div className=" space-y-6">
                <div className="flex justify-start">
                    <DatePicker picker="year" className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-50" />
                </div>

                <SalesChart />

                <SalesTable
                    title={salesData.sales.title}
                    headers={salesData.sales.headers}
                    items={salesData.sales.items}
                    totals={salesData.sales.totals}
                    type="sales"
                />

                <SalesTable
                    title={salesData.openSales.title}
                    headers={salesData.openSales.headers}
                    items={salesData.openSales.items}
                    totals={salesData.openSales.totals}
                    type="sales"
                />

                <SalesTable
                    title={salesData.referralSales.title}
                    headers={salesData.referralSales.headers}
                    items={salesData.referralSales.items}
                    totals={salesData.referralSales.totals}
                    type="referral"
                />

                <SalesTable
                    title={salesData.openReferralSales.title}
                    headers={salesData.openReferralSales.headers}
                    items={salesData.openReferralSales.items}
                    totals={salesData.openReferralSales.totals}
                    type="referral"
                />

            </div>
        </div>
    );
};

export default SalesPage;