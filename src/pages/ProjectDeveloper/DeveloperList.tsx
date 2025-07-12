// src/components/DeveloperList.tsx

import React from 'react';
import { developers, type Developer } from './developerData';

const DeveloperList: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#0A5440] text-white p-3 flex justify-between font-semibold">
                <span>Name</span>
                <span>Color</span>
            </div>
            <ul className="divide-y divide-gray-200">
                {developers.map((dev: Developer) => (
                    <li key={dev.id} className="p-3 flex justify-between items-center">
                        <span className="text-gray-800">{dev.name}</span>
                        {dev.color ? (
                            <div
                                className="w-5 h-5 rounded-sm"
                                style={{ backgroundColor: dev.color }}
                            ></div>
                        ) : (
                            <div></div> // Empty div to maintain alignment
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeveloperList;