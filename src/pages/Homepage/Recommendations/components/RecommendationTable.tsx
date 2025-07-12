import React from 'react';

interface SalesRowData {
    location: string;
    sales: string;
    commission: string;
    paidCommission: string;
    openCommission: string;
}

interface SalesTableProps {
    title: string;
    percentage: string;
    headers: string[];
    rows: SalesRowData[];
    total: SalesRowData;
}

const SalesTable: React.FC<SalesTableProps> = ({
    title,
    percentage,
    headers,
    rows,
    total,
}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="overflow-x-auto">
                <table className="min-w-[600px] w-full text-sm text-left text-gray-700">
                    <thead>
                        <tr className="border-b-2 border-[#005738] text-sm font-semibold">
                            {headers.map((header, i) => (
                                <th key={i} className="px-3 py-2">
                                    {header || ''}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {rows.map((row, index) => (
                            <tr key={index} className="border-none hover:bg-gray-50">
                                <td className="px-3 py-2 font-medium">{row.location}</td>
                                <td className="px-3 py-2">{row.sales}</td>
                                <td className="px-3 py-2">{row.commission}</td>
                                <td className="px-3 py-2">{row.paidCommission}</td>
                                <td className="px-3 py-2">{row.openCommission}</td>
                            </tr>
                        ))}

                        {/* Total Row */}
                        <tr className="font-bold">
                            <td className="px-3 py-2">{total.location}</td>
                            <td className="px-3 py-2">{total.sales}</td>
                            <td className="px-3 py-2">{total.commission}</td>
                            <td className="px-3 py-2">{total.paidCommission}</td>
                            <td className="px-3 py-2">{total.openCommission}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesTable;
