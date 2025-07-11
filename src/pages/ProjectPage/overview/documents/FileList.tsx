import React from 'react';
import { FileImageOutlined, DownloadOutlined } from '@ant-design/icons';
import { files } from '../../../../assets/json/documents.json';

const FileList: React.FC = () => {
    return (
        <div className="bg-white h-full rounded-xl shadow-sm p-6">
            <div className="grid grid-cols-[3fr_3fr_1fr_auto] gap-4 pb-3 border-b border-gray-200 text-brand-text-light font-semibold text-sm">
                <div>Name</div>
                <div>Modification date</div>
                <div>Size</div>
                <div className="w-16"></div> {/* For spacing */}
            </div>
            <ul>
                {files.map((file, index) => (
                    <li key={index} className="grid grid-cols-[3fr_3fr_1fr_auto] gap-4 items-center py-4 border-b border-gray-200 last:border-b-0 text-brand-text-dark">
                        <div>{file.name}</div>
                        <div className="text-brand-text-light">{file.modificationDate}</div>
                        <div className="text-brand-text-light">{file.size}</div>
                        <div className="flex items-center space-x-4 text-gray-400 text-lg">
                            <FileImageOutlined className="cursor-pointer hover:text-brand-green" />
                            <DownloadOutlined className="cursor-pointer hover:text-brand-green" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;