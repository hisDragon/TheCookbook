import React from 'react'
import { Dropdown, DropdownItem } from "flowbite-react";
import { FileInput, Label } from "flowbite-react";

const MetadataForm = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    return (
        <div>
            {/* Title */}
            <label className="block mb-2 font-bold">Title</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full text-sm border-1 border-secondary outline-none rounded-lg p-2 mb-4"
            />

            {/* Description */}
            <label className="block mb-2 font-bold">Description</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full text-sm border-1 border-secondary outline-none rounded-lg border rounded p-2 mb-4"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-8 mb-4">
                <div>
                    {/* Serving Size */}
                    <label className="block mb-2 font-bold w-32">Serving Size</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        name="servings"
                        value={formData.servings}
                        onChange={handleChange}
                        className="w-full text-sm border-1 border-secondary outline-none rounded p-2 mb-4"
                    />

                    {/* Cooking Time */}
                    <label className="block mb-2 font-bold">Cooking Time</label>
                    <div className="flex items-center gap-2 mb-4">
                        <input
                            type="number"
                            name="cookingTime"
                            value={formData.cookingTime}
                            onChange={handleChange}
                            rows="4"
                            className="w-full text-sm border-1 border-secondary outline-none rounded p-2"
                        />
                        <b>mins</b>
                        {/* <select className="bg-primary text-white px-5 py-3 rounded-r-lg text-sm font-semibold hover:bg-primary-offset">
                            <option value="mins">mins</option>
                            <option>hours</option>
                            <option>day</option>
                        </select> */}
                        {/* <Dropdown label="Select" className="text-sm cursor-pointer rounded">
                            <DropdownItem >mins</DropdownItem>
                            <DropdownItem >hours</DropdownItem>
                            <DropdownItem >days</DropdownItem>
                        </Dropdown> */}
                    </div>
                </div>

                <div>
                    {/* Category */}
                    <label className="block mb-2 font-bold">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full text-sm border-1 border-secondary outline-none rounded p-2 mb-4"
                    />

                    {/* Cuisine */}
                    <label className="block mb-2 font-bold">Cuisine</label>
                    <input
                        type="text"
                        name="cuisine"
                        value={formData.cuisine}
                        onChange={handleChange}
                        rows="4"
                        className="w-full text-sm border-1 border-secondary outline-none rounded p-2 mb-4"
                    />
                </div>
            </div>

            {/* Thumbnail */}
            <Label className="block mb-2 font-bold text-md" htmlFor="thumbnail-upload">
                Thumbnail
            </Label>
            <FileInput className="mb-6 text-sm file:bg-primary file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 hover:file:bg-primary-offset file:cursor-pointer" id="thumbnail-upload" onChange={handleChange} />
        </div>
    )
}

export default MetadataForm