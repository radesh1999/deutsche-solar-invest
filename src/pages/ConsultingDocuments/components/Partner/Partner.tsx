// src/pages/ProjectPlannerPage.tsx

import React from 'react';
import FolderList from '../FolderList';
import FileList from '../FileList';

const Partner: React.FC = () => {
    return (
        <div className="bg-[#EBECF0] min-h-screen font-sans">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Folders */}
                <div className="lg:col-span-1">
                    <div className="h-full p-6 bg-white rounded-md shadow-sm">
                        <FolderList />
                    </div>
                </div>

                {/* Right Column: Files */}
                <div className="lg:col-span-2">
                    <div className="h-full bg-white rounded-md shadow-sm">
                        <FileList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;