import React from 'react';
import { Button } from 'antd';
import { FolderOutlined, DownloadOutlined } from '@ant-design/icons';
import { folders } from '../../../../assets/json/documents.json';


const FolderList: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between h-full">
            <ul>
                {folders.map((folder, index) => (
                    <li key={index} className="flex items-center space-x-4 mb-5">
                        <FolderOutlined className="text-3xl text-gray-400" />
                        <span className="text-base text-brand-text-dark">{`${folder.name} (${folder.count})`}</span>
                    </li>
                ))}
            </ul>
            <Button
                type="primary"
                icon={<DownloadOutlined />}
                size="large"
                className="w-fit self-center !bg-[#005738] !hover:bg-[#00472e] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]"

            >
                Download as zip-file
            </Button>
        </div>
    );
};

export default FolderList;