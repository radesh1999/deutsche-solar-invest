import React from 'react';
import { images } from '../../../../assets/json/documents.json';

const ImageGallery: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Solar panel installation ${index + 1}`}
                        className="rounded-lg object-cover w-full h-32"
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;