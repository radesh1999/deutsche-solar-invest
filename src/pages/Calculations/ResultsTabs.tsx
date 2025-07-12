import { depreciationData } from './mockData';

export const DepreciationCard = () => {
    const activeYearIndex = 3; // 2025

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Abschreibungen</h2>
                <div className="flex items-center gap-2">
                    <label>Kaufdatum</label>
                    <input defaultValue={depreciationData.kaufdatum} className="p-2 border rounded-md" />
                </div>
            </div>

            <div className="space-y-4">
                {/* Header */}
                <div className="grid grid-cols-9 gap-2 text-center text-sm text-gray-500">
                    <div className="col-span-2"></div>
                    {depreciationData.years.map(year => <div key={year}>{year}</div>)}
                </div>

                {/* IAB Row */}
                <div className="grid grid-cols-9 gap-2 items-center">
                    <div className="col-span-2 text-gray-700">IAB <span className="text-xs text-gray-400">(max. 50%)</span></div>
                    {depreciationData.iab.map((val, idx) => (
                        <input key={idx} defaultValue={val} className="p-2 border rounded-md text-center" />
                    ))}
                </div>

                {/* Sonder-AfA Row */}
                <div className="grid grid-cols-9 gap-2 items-center">
                    <div className="col-span-2 text-gray-700">Sonder-AfA <span className="text-xs text-gray-400">(max. 40%)</span></div>
                    {depreciationData.sonderAfa.map((val, idx) => (
                        <input
                            key={idx}
                            defaultValue={val}
                            className={`p-2 border rounded-md text-center ${idx === activeYearIndex ? 'border-2 border-green-600' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export const ResultsTabs = () => {
    const tabs = ["Steuer", "Liquidität", "Zusammenfassung", "Mitteleinsatz"];
    const activeTab = "Steuer";

    return (
        <div className="bg-white rounded-lg shadow-md">
            <div className="flex border-b">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`px-6 py-3 font-semibold ${activeTab === tab
                            ? 'text-green-700 border-b-2 border-green-700'
                            : 'text-gray-500'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="p-6">
                {/* Content for the active tab would go here */}
                <p>{activeTab} content will be displayed here.</p>
            </div>
        </div>
    );
}