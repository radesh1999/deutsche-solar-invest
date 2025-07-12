import { RiDeleteBinLine } from 'react-icons/ri';
import { CalculationsIcon, Calculator } from '../../assets/images';
import { loanData } from './mockData';

const InputField = ({ label, value, type = "text" }: { label: string; value: string; type?: string }) => (
    <div className="flex justify-between items-center">
        <label className="text-sm text-gray-600">{label}</label>
        <input type={type} defaultValue={value} className="w-1/2 p-2 border rounded-md bg-gray-100 text-right" />
    </div>
);

export const IncomeCard = () => (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6 lg:space-y-3">
        <h2 className="text-xl font-bold mb-4">Einkommen</h2>
        <p className="text-sm text-gray-500">zu versteuerndes Einkommen</p>
        <div className="flex items-center gap-2">
            <input defaultValue="2024" className="p-2 border rounded-md w-24" />
            <input defaultValue="100.000 €" className="w-1/2 p-2 border rounded-md text-right" />
            <button className="text-red-500 text-2xl"><RiDeleteBinLine color='#B10000' /></button>
        </div>
        <button className="bg-[#005738] rounded-3xl text-white px-4 py-2 text-sm">+ Zeile hinzufügen</button>

        <div className="flex items-center pt-4 gap-4">
            <label>Steuertabelle</label>
            <select className="p-2 border rounded-md"><option>Grundtabelle</option></select>
        </div>
        <div className="flex items-center gap-4">
            <label htmlFor="church-tax">Kirchensteuerpflichtig?</label>
            <input type="checkbox" id="church-tax" className="h-4 w-4" />

        </div>
        <div className="flex items-center gap-4">
            <label>Bundesland</label>
            <select className="p-2 border rounded-md"><option>Niedersachsen</option></select>
        </div>
        <div className="flex justify-center mt-4">
            <button className="bg-[#005738] text-white py-2 px-4 rounded-md font-semibold flex items-center justify-center gap-2">
                <img src={Calculator} />
                <p>Berechnen</p>
            </button>
        </div>
    </div>
);


export const LoanCard = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Darlehen</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-4">
            <div className="space-y-3">
                <InputField label="Eigenkapital" value={loanData.eigenkapital} />
                <InputField label="Darlehenshöhe" value={loanData.darlehenshöhe} />
                <InputField label="Beginn" value={loanData.beginn} />
                <InputField label="Tilgung" value={loanData.tilgung} />
                <InputField label="Zahlweise" value={loanData.zahlweise} />
            </div>
            <div className="space-y-3">
                <InputField label="Laufzeit" value={loanData.laufzeit} />
                <InputField label="Darlehenszins" value={loanData.darlehenszins} />
                <InputField label="Zinsbindung" value={loanData.zinsbindung} />
                <InputField label="Prolongationszins" value={loanData.prolongationszins} />
                <InputField label="tilgungsfreie Jahre" value={loanData.tilgungsfreieJahre} />
            </div>
        </div>
    </div>
);