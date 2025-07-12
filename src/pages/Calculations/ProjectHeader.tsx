import { Select } from "antd";
import type React from "react";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { BiSave } from "react-icons/bi";

const ProjectHeader: React.FC = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">

            {/* Selection Block */}
            <div className="flex flex-col gap-4 col-span-1 md:col-span-1 lg:col-span-1">
                <div className="flex items-center w-full gap-2">
                    <label className="w-24 lg:text-[14px]  md:text-[10px] text-gray-600">Projekt</label>
                    <Select
                        className="flex-1 min-w-[120px] rounded-md bg-white"
                        placeholder="Projekt auswählen"
                    />
                </div>
                <div className="flex items-center w-full gap-2">
                    <label className="w-24 lg:text-[14px]  md:text-[10px] text-gray-600">Variante</label>
                    <Select
                        className="flex-1 min-w-[120px] rounded-md bg-white"
                        placeholder="Variante auswählen"
                    />
                </div>
            </div>

            {/* Button Block */}
            <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-3 justify-end">
                <div className="flex flex-col gap-4">
                    <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 flex items-center gap-2 text-sm md:text-base">
                        <FaPlus className="text-base" />
                        <span className="whitespace-nowrap lg:text-[14px] md:text-[10px]">neue Variante anlegen</span>
                    </button>
                    <button className="bg-[#005738] text-white px-4 py-2 rounded-md hover:bg-green-800 flex items-center gap-2 text-sm md:text-base">
                        <FiDownload className="text-base" />
                        <span className="whitespace-nowrap lg:text-[14px] md:text-[10px]">als PDF exportieren</span>
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    <button className="bg-[#D6D9E0] text-black px-4 py-2 rounded-md hover:bg-gray-200 flex items-center gap-2 text-sm md:text-base">
                        <RiDeleteBinLine className="text-base" />
                        <span className="whitespace-nowrap lg:text-[14px] md:text-[10px]">Variante löschen</span>
                    </button>
                    <button className="bg-[#F4CB4D] text-black px-4 py-2 rounded-md hover:bg-yellow-500 flex items-center gap-2 text-sm md:text-base">
                        <BiSave className="text-base" />
                        <span className="whitespace-nowrap lg:text-[14px] md:text-[10px]">Variante speichern</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectHeader;
