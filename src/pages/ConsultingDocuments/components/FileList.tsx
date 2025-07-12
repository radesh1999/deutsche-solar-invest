// src/components/FileList.tsx

import React from 'react';
import { files, type FileItem } from './mockDataTable';
import { CiImageOn } from "react-icons/ci";
import { GoDownload } from "react-icons/go";

const FileList: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
            <table className="w-full text-left">
                <thead className=" !border-b-2 boder-[#005738] text-gray-700 font-semibold">
                    <tr className="border-b">
                        <th className="py-3 pr-4 font-semibold text-gray-800">Name</th>
                        <th className="py-3 px-4 font-semibold text-gray-800">Modification date</th>
                        <th className="py-3 pl-4 font-semibold text-gray-800">Size</th>
                        <th className="py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file: FileItem) => (
                        <tr key={file.id} className="">
                            <td className="py-4 pr-4 text-gray-700">{file.name}</td>
                            <td className="py-4 px-4 text-gray-600">{file.modificationDate}</td>
                            <td className="py-4 pl-4 text-gray-600">{file.size}</td>
                            <td className="py-4 pl-4">
                                <div className="flex items-center space-x-4 text-gray-500">
                                    <button className="hover:text-green-700">
                                        <CiImageOn color='#667085' className="w-5 h-5" />
                                    </button>
                                    <button className="hover:text-green-700">
                                        <GoDownload color='#005738' className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FileList;