import React from 'react'
import { FileInput } from "flowbite-react";

const MediaForm = ({ images, setImages }) => {
    const handleMediaChange = (event) => {
        const selectedFiles = event.target.files;
        const newFilesArray = Array.from(selectedFiles);
        setImages(prevFormData => ({
            ...prevFormData,
            images: newFilesArray
        }));
    };

    return (
        <div>
            {/* Media List */}
            <FileInput className="mb-2 text-sm file:bg-primary file:text-white file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 hover:file:bg-gray-300 hover:file:text-black file:cursor-pointer" onChange={handleMediaChange} multiple />

            {images && images.length > 0 && (
                <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">Selected Files:</h4>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
                        {images.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MediaForm