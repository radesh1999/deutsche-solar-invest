import React from 'react';
import FolderList from './FolderLIst';
import FileList from './FileList';
import ImageGallery from './ImageGallery';


const DocumentsPage: React.FC = () => {

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="font-bold text-[17px] leading-[130%] tracking-[0]">Weidhausen</h1>
                    <p className="text-gray-500 text-[12px] leading-[130%] tracking-[0]">Waldstraße 17, 96279 Weidhausen</p>
                </div>
                <span className="bg-[#15A772] h-[30px] flex items-center text-white text-sm font-semibold px-3 rounded-[8px]">
                    Mediplan helm
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                    <FolderList />
                </div>
                <div className='col-span-2 lg:col-span-2'>
                    <FileList />
                </div>
            </div>
            <ImageGallery />
        </div>
    );
};

export default DocumentsPage;