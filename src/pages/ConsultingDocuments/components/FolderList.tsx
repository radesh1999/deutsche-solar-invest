// src/components/FolderList.tsx

import React from 'react';
import { folders, type Folder } from './mockDataTable';
import { FaRegFolder, FaRegFolderOpen } from "react-icons/fa";

const FolderList: React.FC = () => {
    return (
        <ul className="space-y-4">
            {folders.map((folder: Folder, index) => (
                <li key={folder.id} className="flex items-center space-x-4 cursor-pointer text-gray-700 hover:text-green-700">
                    {index % 2 === 0 ? <FaRegFolderOpen className="w-6 h-6 text-gray-500" /> : <FaRegFolder className="w-6 h-6 text-gray-500" />}
                    <span>{`${folder.name} (${folder.fileCount})`}</span>
                </li>
            ))}
        </ul>
    );
};

export default FolderList;