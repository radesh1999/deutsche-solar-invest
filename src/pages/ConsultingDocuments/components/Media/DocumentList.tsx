// src/components/DocumentList.tsx

import React from 'react';
import { mediaContent } from './consultingMock';
const Section: React.FC<{ title: string; items: { title: string; link: string }[] }> = ({ title, items }) => (
    <div className="py-4 border-b-2 last:border-b-0 border-gray-200">
        <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
        <ul className="space-y-1">
            {items.map((item, index) => (
                <li key={index}>
                    <a href={item.link} className="text-gray-600 hover:text-green-700 hover:underline transition-colors duration-200">
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const DocumentList: React.FC = () => {
    return (
        <div className="bg-whit h-full p-6 rounded-lg shadow-md">
            <Section title="Webinars" items={mediaContent.webinars} />
            <Section title="Videos" items={mediaContent.videos} />
            <Section title="PDF" items={mediaContent.pdfs} />
        </div>
    );
};

export default DocumentList;