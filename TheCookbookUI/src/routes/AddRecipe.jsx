import React, { useState } from "react";
import HeroSection from "../components/HeroSection.jsx";
import IngredientsForm from "../forms/IngredientsForm.jsx";
import StepsForm from "../forms/StepsForm.jsx";
import NutritionForm from "../forms/NutritionForm.jsx";
import MediaForm from "../forms/MediaForm.jsx";
import MetadataForm from "../forms/MetadataForm.jsx";

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
        nutritions: {
            calories: "",
            protein: "",
            carbohydrates: "",
            sugar: "",
            salt: "",
            energy: "",
            fat: "",
        },
        steps: [""],
        category: "",
        servings: 1,
        cookingTime: 1,
        cuisine: "",
        images: [],
    });

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
            nutritions: formData.nutritions,
            steps: formData.steps,
            category: formData.category,
            servings: formData.servings,
            cookingTime: formData.cookingTime,
            cuisine: formData.cuisine,
            images: formData.images,
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
                <MetadataForm formData={formData}
                    setFormData={setFormData} />

                {/* Switching Tabs on the Form */}
                <div className="border p-5 border-secondary rounded-lg">
                    <div className="text-md text-left mb-10 w-full">
                        {["ingredients", "nutrition", "steps", "media"].map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 cursor-pointer font-medium ${activeTab === tab
                                    ? "border-b-3 border-primary text-primary"
                                    : "text-gray-500"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {activeTab === "ingredients" && (
                        <IngredientsForm ingredients={formData.ingredients}
                            setIngredients={setFormData}
                        />
                    )}

                    {activeTab === "nutrition" && (
                        <NutritionForm nutritions={formData.nutritions}
                            setNutritions={setFormData} />
                    )}

                    {activeTab === "steps" && (
                        <StepsForm steps={formData.steps}
                            setSteps={setFormData}
                        />
                    )}

                    {activeTab === "media" && (
                        <MediaForm images={formData.images}
                            setImages={setFormData}
                        />
                    )}
                </div>
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
