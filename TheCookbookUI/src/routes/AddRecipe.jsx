import React, { useState } from "react";
import HeroSection from "../components/HeroSection.jsx";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const AddRecipe = () => {
    const [activeTab, setActiveTab] = useState("ingredients");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        ingredients: [
            {
                name: "",
                quantity: 1,
                quantityType: "",
            },
        ],
        steps: ["", ""],
        category: "",
        servings: 1,
        cookingTime: 1,
        cuisine: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    //Ingredients
    const handleIngredientChange = (index, field, value) => {
        const updated = [...formData.ingredients];
        updated[index][field] = value;
        setFormData({ ...formData, ingredients: updated });
    };

    const addIngredientField = () => {
        setFormData({
            ...formData,
            ingredients: [
                ...formData.ingredients,
                { name: "", quantity: "", quantityType: "" },
            ],
        });
    };

    const removeIngredientField = (index) => {
        const updated = formData.ingredients.filter((_, i) => i !== index);
        setFormData({ ...formData, ingredients: updated });
    };

    const moveIngredient = (index, direction) => {
        const newIngredient = [...formData.ingredients];
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= newIngredient.length) return;

        //Swaping
        [newIngredient[index], newIngredient[targetIndex]] = [
            newIngredient[targetIndex],
            newIngredient[index],
        ];
        setFormData({ ...formData, ingredients: newIngredient });
    };

    //Nutritions
    const handleNutritionChange = (index, field, value) => {
        const updated = [...formData.nutritions];
        updated[index][field] = value;
        setFormData({ ...formData, nutritions: updated });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const recipeData = {
            title: formData.title,
            description: formData.description,
            ingredients: formData.ingredients.map((ing) => ({
                name: ing.name,
                quantity: Number(ing.quantity),
                quantityType: ing.quantityType,
            })),
            steps: formData.steps,
            category: formData.category,
            servings: formData.servings,
            cookingTime: formData.cookingTime,
            cuisine: formData.cuisine,
        };
        console.log(recipeData);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URI}/api/recipes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(recipeData),
            });

            if (!res.ok) {
                console.error("Server error:", res.status, text);
                return;
            }

            const data = await res.json();
            console.log("Recipe saved:", data);
        } catch (err) {
            console.log("Error Message:", err);
        }
    };

    return (
        <>
            <HeroSection
                title="Add Recipe"
                subtitle="Discover and share your favorite recipes on The Cookbook! Add your own delicious dishes and inspire others with new culinary creations."
            />
            <form
                onSubmit={handleSubmit}
                className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg font-fira"
            >
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
                            name="servings"
                            value={formData.servings}
                            onChange={handleChange}
                            className="w-full text-sm border-1 border-secondary outline-none rounded p-2 mb-4"
                        />

                        {/* Cooking Time */}
                        <label className="block mb-2 font-bold">Cooking Time</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                name="cookingTime"
                                value={formData.cookingTime}
                                onChange={handleChange}
                                rows="4"
                                className="w-full text-sm border-1 border-secondary outline-none rounded p-2 mb-4"
                            />
                            <span>mins</span>
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
                <label className="block mb-2 font-bold">Thumbnail</label>
                <input
                    type="file"
                    name="thumbnail"
                    onChange={handleChange}
                    className="mb-6 text-sm file:bg-gray-200 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 hover:file:bg-gray-300 file:cursor-pointer"
                />

                {/* Tabs */}
                <div className="flex text-left mb-4">
                    {["ingredients", "nutrition", "steps", "media"].map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 cursor-pointer font-medium ${activeTab === tab
                                ? "border-b-2 border-primary text-primary"
                                : "text-gray-500"
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === "ingredients" && (
                    <div>
                        {/* Ingredients List */}

                        {formData.ingredients.map((ing, index) => (
                            <div key={index} className="text-sm flex gap-2 mb-2">
                                {/* Move Up button */}
                                <button
                                    type="button"
                                    onClick={() => moveIngredient(index, "up")}
                                    disabled={index === 0}
                                    className="cursor-pointer text-primary hover:text-primary-offset disabled:text-secondary disabled:cursor-not-allowed"
                                >
                                    <FaChevronCircleUp className="w-5 h-5" />
                                </button>

                                {/* Move Down button */}
                                <button
                                    type="button"
                                    onClick={() => moveIngredient(index, "down")}
                                    disabled={index === formData.ingredients.length - 1}
                                    className="cursor-pointer text-primary hover:text-primary-offset disabled:text-secondary disabled:cursor-not-allowed"
                                >
                                    <FaChevronCircleDown className="w-5 h-5" />
                                </button>

                                {/* Ingredient name */}
                                <input
                                    type="text"
                                    placeholder="Ingredient"
                                    value={ing.name}
                                    onChange={(e) =>
                                        handleIngredientChange(index, "name", e.target.value)
                                    }
                                    className="w-full border border-secondary outline-none rounded p-2 md:w-72"
                                />

                                <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-2 md:flex-1">
                                    {/* Quantity */}
                                    <input
                                        type="number"
                                        placeholder="Quantity"
                                        value={ing.quantity}
                                        onChange={(e) =>
                                            handleIngredientChange(index, "quantity", e.target.value)
                                        }
                                        className="w-full border border-secondary outline-none rounded p-2 md:w-30"
                                    />

                                    {/* Unit */}
                                    <input
                                        type="text"
                                        placeholder="Unit (kg, g, pcs)"
                                        value={ing.quantityType}
                                        onChange={(e) =>
                                            handleIngredientChange(
                                                index,
                                                "quantityType",
                                                e.target.value
                                            )
                                        }
                                        className="w-full border border-secondary outline-none rounded p-2 md:w-40"
                                    />

                                    {/* Remove Button */}
                                    <button
                                        type="button"
                                        onClick={() => removeIngredientField(index)}
                                        className="cursor-pointer font-semibold text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addIngredientField}
                            className="text-primary text-sm font-semibold cursor-pointer mb-4"
                        >
                            + Add more
                        </button>
                    </div>
                )}

                {activeTab === "nutrition" && (
                    <div className="flex flex-col gap-4">
                        {/* Nutritions List */}
                        {formData.nutritions.map((nut, idx) => (
                            <div key={idx} className="flex flex-col gap-4">
                                {/* Calories */}
                                <div className="flex items-center gap-2">
                                    <label className="block w-32 font-bold">Calorie</label>
                                    <input
                                        type="text"
                                        value={nut.calories}
                                        onChange={(e) =>
                                            handleNutritionChange(idx, "calories", e.target.value)
                                        }
                                        className="w-24 text-sm border border-secondary outline-none rounded p-2"
                                    />
                                </div>

                                {/* Protein */}
                                <div className="flex items-center gap-2">
                                    <label className="block w-32 font-bold">Protein</label>
                                    <input
                                        type="text"
                                        value={nut.protein}
                                        onChange={(e) =>
                                            handleNutritionChange(idx, "protein", e.target.value)
                                        }
                                        className="w-24 text-sm border border-secondary outline-none rounded p-2"
                                    />
                                </div>

                                {/* Carbohydrates */}
                                <div className="flex items-center gap-2">
                                    <label className="block w-32 font-bold">Carbohydrates</label>
                                    <input
                                        type="text"
                                        value={nut.carbohydrates}
                                        onChange={(e) =>
                                            handleNutritionChange(
                                                idx,
                                                "carbohydrates",
                                                e.target.value
                                            )
                                        }
                                        className="w-24 text-sm border border-secondary outline-none rounded p-2"
                                    />
                                </div>

                                {/* Sugar */}
                                <div className="flex items-center gap-2">
                                    <label className="block w-32 font-bold">Sugar</label>
                                    <input
                                        type="text"
                                        value={nut.sugar}
                                        onChange={(e) =>
                                            handleNutritionChange(idx, "sugar", e.target.value)
                                        }
                                        className="w-24 text-sm border border-secondary outline-none rounded p-2"
                                    />
                                </div>

                                {/* Salt */}
                                <div className="flex items-center gap-2">
                                    <label className="block w-32 font-bold">Salt</label>
                                    <input
                                        type="text"
                                        value={nut.salt}
                                        onChange={(e) =>
                                            handleNutritionChange(idx, "salt", e.target.value)
                                        }
                                        className="w-24 text-sm border border-secondary outline-none rounded p-2"
                                    />
                                </div>

                                {/* Energy */}
                                <div className="flex items-center gap-2">
                                    <label className="block w-32 font-bold">Energy</label>
                                    <input
                                        type="text"
                                        value={nut.energy}
                                        onChange={(e) =>
                                            handleNutritionChange(idx, "energy", e.target.value)
                                        }
                                        className="w-24 text-sm border border-secondary outline-none rounded p-2"
                                    />
                                </div>

                                {/* Fat */}
                                <div className="flex items-center gap-2">
                                    <label className="block w-32 font-bold">Fat</label>
                                    <input
                                        type="text"
                                        value={nut.fat}
                                        onChange={(e) =>
                                            handleNutritionChange(idx, "fat", e.target.value)
                                        }
                                        className="w-24 text-sm border border-secondary outline-none rounded p-2"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "steps" && (
                    <div className="text-gray-500">Steps form...</div>
                )}

                {activeTab === "media" && (
                    <div className="text-gray-500">Media uploads...</div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    className="mt-6 px-6 py-2 bg-primary text-white cursor-pointer font-semibold rounded-lg hover:bg-primary-offset"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default AddRecipe;
