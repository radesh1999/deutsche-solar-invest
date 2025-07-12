import type React from "react";

const InvestorSection: React.FC = () => (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-4">
            <label className="text-gray-700">Investor</label>
            <select className="p-2 border border-[#077836] rounded-md bg-white w-48">
                <option>Investor auswählen</option>
            </select>
        </div>
        <div className="flex items-center gap-4">
            <span className="text-gray-700">Investitionssumme</span>
            <span className="bg-[#005738] rounded-3xl text-white font-bold px-6 py-2">100.000 €</span>
        </div>
    </div>
);

export default InvestorSection;