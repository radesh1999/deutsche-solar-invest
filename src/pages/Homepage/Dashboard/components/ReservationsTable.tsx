import React from 'react';
import { mockDashboardData } from './dashboardData';
import { GrDocument } from 'react-icons/gr';
import { BiTrash } from 'react-icons/bi';
import { CreateContractIcon, DeleteIconRed } from '../../../../assets/images';

const ReservationsTable: React.FC = () => {
    const { items, total } = mockDashboardData.reservations;

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <h2 className="text-lg font-bold text-black px-6 pt-6 pb-3">Reservations</h2>

            <div className="overflow-x-auto">
                <div className="min-w-[900px] text-sm">
                    {/* Header */}
                    <div className="grid grid-cols-12 px-6 pb-2 border-b border-gray-200">
                        <div className="col-span-4"></div>
                        <div className="col-span-1 font-semibold text-gray-500 text-center">WR</div>
                        <div className="col-span-2 bg-green-100 py-2 text-left font-semibold text-gray-700 rounded-tl-lg pl-4">Investment</div>
                        <div className="col-span-2 bg-green-100 py-2 text-left font-semibold text-gray-700 rounded-tr-lg mr-4">Reserved until</div>
                        <div className="col-span-3"></div>
                    </div>

                    {/* Body */}
                    <div className="px-6">
                        {items.map((item) => (
                            <div key={item.personName} className="py-4 border-b border-gray-200 last:border-none">
                                <p className="font-bold text-black">{item.personName}</p>

                                <div className="space-y-2">
                                    {item.projects.map((project) => (
                                        <div key={project.id} className="grid grid-cols-12 items-center">
                                            <div className="col-span-4 pl-4 text-gray-700">{project.location}</div>
                                            <div className="col-span-1 text-center text-gray-800">{project.wr}</div>
                                            <div className="col-span-2 bg-green-100 px-4 py-2 text-gray-800">{project.investment}</div>
                                            <div className="col-span-2 bg-green-100 px-4 py-2 text-gray-800 mr-4">{project.reservedUntil}</div>
                                            <div className="col-span-3 flex items-center justify-end gap-4 text-sm">
                                                <button className="flex items-center gap-1 text-black font-medium hover:opacity-80 transition">
                                                    <img src={CreateContractIcon} alt="CreateContractIcon" className="w-4 h-4" />
                                                    <span>Create contracts</span>
                                                </button>
                                                <button className="flex items-center gap-1 text-black font-medium hover:opacity-80 transition">
                                                    <img src={DeleteIconRed} alt="DeleteIconRed" className="w-4 h-4" />
                                                    <span>Delete reservation</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="grid grid-cols-12 gap-x-6 px-6 py-4 bg-[#206A4F33] text-black font-semibold">
                        <div className="col-span-4">Total</div>
                        <div className="col-span-2">{total.investment}</div>
                        <div className="col-span-2">{total.commissionIncome}</div>
                        <div className="col-span-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationsTable;
