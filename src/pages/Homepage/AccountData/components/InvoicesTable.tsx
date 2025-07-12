import React from 'react';
import { userData } from './accountDataMock';
import { FiFileText } from 'react-icons/fi';

const InvoicesTable: React.FC = () => {
    const { invoices } = userData;
    const headers = ["Date", "Invoice number", "Net commission", "Tax", "Gross commission", ""];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
            <h2 className="text-lg font-bold mb-4">Invoices</h2>
            <div className="overflow-x-auto">
                <table className="min-w-[700px] w-full text-sm text-left text-gray-700">
                    <thead>
                        <tr className="border-b-2 border-[#005738] text-sm font-semibold">
                            {headers.map((header, i) => (
                                <th key={i} className="px-3 py-2">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {invoices.map((invoice, index) => (
                            <tr key={index} className="border-none hover:bg-gray-50">
                                <td className="px-3 py-2">{invoice.date}</td>
                                <td className="px-3 py-2">{invoice.invoiceNumber}</td>
                                <td className="px-3 py-2">{invoice.netCommission}</td>
                                <td className="px-3 py-2">{invoice.tax}</td>
                                <td className="px-3 py-2">{invoice.grossCommission}</td>
                                <td className="px-3 py-2 text-gray-500">
                                    <button className="hover:text-green-600">
                                        <FiFileText size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoicesTable;
