import React from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";

interface SalesTableProps {
    title: string;
    headers: readonly string[];
    items: readonly any[];
    totals: { [key: string]: string };
    type: 'sales' | 'referral';
}

const SalesTable: React.FC<SalesTableProps> = ({ title, headers, items, totals, type }) => {
    const isSalesType = type === 'sales';

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <h2 className="text-md font-bold text-brand-text-dark p-6">{title}</h2>

            <div className="overflow-x-auto">
                <table className="min-w-[800px] w-full text-sm text-left">
                    <thead className="thead-gradient-border">
                        <tr>
                            <th className="px-6 py-3 font-semibold text-brand-text-light" colSpan={2}></th>
                            {headers.map((header, index) => (
                                <th key={index} className="px-4 py-3 font-semibold text-brand-text-light">{header}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((item, idx) => (
                            <tr key={item.id || idx} className="">
                                <td className="px-6 py-3" colSpan={2}>
                                    {isSalesType ? (
                                        <>
                                            <p className="font-bold text-brand-text-dark">{item.person}</p>
                                            <p className="text-brand-text-light">{item.location}</p>
                                        </>
                                    ) : (
                                        <p className="font-bold text-brand-text-dark">{item.name}</p>
                                    )}
                                </td>
                                <td className="px-4 py-3">{isSalesType ? item.wr : item.percentage}</td>
                                <td className="px-4 py-3">{item.investment}</td>
                                <td className="px-4 py-3">{isSalesType ? item.part : item.commission}</td>
                                <td className="px-4 py-3">
                                    {isSalesType
                                        ? item.invoice
                                        : item.payout && (
                                            <div className="flex items-center gap-2">
                                                {item.payout}
                                                <IoDocumentTextOutline className="h-4 w-4 text-gray-400" />
                                            </div>
                                        )}
                                </td>
                                {isSalesType && (
                                    <>
                                        <td className="px-4 py-3">{item.commission}</td>
                                        <td className="px-4 py-3">
                                            {item.payout && (
                                                <div className="flex items-center gap-2">
                                                    {item.payout}
                                                    <IoDocumentTextOutline className="h-4 w-4 text-gray-400" />
                                                </div>
                                            )}
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr className="bg-[#206A4F33] font-bold">
                            <td className="px-6 py-3" colSpan={2}>Total</td>
                            <td className="px-4 py-3"></td>
                            <td className="px-4 py-3">{totals.investment}</td>
                            <td className="px-4 py-3">
                                {isSalesType ? totals.part || '' : totals.commission}
                            </td>
                            <td className="px-4 py-3">{isSalesType ? totals.invoice : ''}</td>
                            {isSalesType && (
                                <>
                                    <td className="px-4 py-3">{totals.commission}</td>
                                    <td className="px-4 py-3"></td>
                                </>
                            )}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default SalesTable;
