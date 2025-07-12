import { projectData } from './mockData';

const DetailItem = ({ label, value }: { label: string; value: string }) => (
    <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold text-gray-800">{value}</p>
    </div>
);

const ProjectDetails = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Projektdaten</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-4">
            {/* Column 1 */}
            <div className="space-y-4 border-black lg:border-r-2 md:border-r-2 sm:border-r-2">
                <DetailItem label="Kaufpreis" value={projectData.kaufpreis} />
                <DetailItem label="Einmalpacht im KP" value={projectData.einmalpachtImKP} />
                <DetailItem label="Einmalpacht für" value={projectData.einmalpachtFür} />
                <DetailItem label="Laufzeit" value={projectData.laufzeit} />
            </div>
            {/* Column 2 */}
            <div className="space-y-4 border-black lg:border-r-2 md:border-r-0 md:border-l-0 sm:border-l-0 lg:px-4 md:px-4 sm:px-0">
                <DetailItem label="Service" value={projectData.service} />
                <DetailItem label="Pacht" value={projectData.pacht} />
                <DetailItem label="Fertigstellung" value={projectData.fertigstellung} />
                <DetailItem label="Netzgang" value={projectData.netagang} />
            </div>
            <div className='border-[#005738] lg:hidden md:block sm:block md:border-t-2 sm:border-t-2 md:col-span-2 sm:col-span-2'></div>
            {/* Column 3 */}
            <div className="space-y-4 border-black md:border-l-0 lg:border-r-0 md:border-r-2 sm:border-r-2">
                <DetailItem label="Steigerung" value={projectData.steigerung1} />
                <DetailItem label="Steigerung" value={projectData.steigerung2} />
                <DetailItem label="Ertrag" value={projectData.ertrag} />
                <DetailItem label="Vergütung" value={projectData.vergütung} />
            </div>
            <p className="mt-6 text-sm text-gray-600">{projectData.erlöseSteigern}</p>

        </div>
    </div>
);

export default ProjectDetails;