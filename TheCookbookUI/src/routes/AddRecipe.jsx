import React, { useState } from "react";
import HeroSection from "../components/HeroSection.jsx";

const AddRecipe = () => {
  const [activeTab, setActiveTab] = useState("ingredients");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: null,
    servingSize: 1,
    ingredients: [{ ingredient: "", quantity: "", unit: "" }],
    nutritions: [
      {
        calories: "",
        protein: "",
        carbohydrates: "",
        sugar: "",
        salt: "",
        energy: "",
        fat: "",
      },
    ],
    cookingTime: 1,
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
        { ingredient: "", quantity: "", unit: "" },
      ],
    });
  };

   const removeIngredientField = (index) => {
    const updated = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: updated });
  };

  //Nutritions
  const handleNutritionChange = (index, field, value) => {
    const updated = [...formData.nutritions];
    updated[index][field] = value;
    setFormData({ ...formData, nutritions: updated });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send to API
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

        {/* Thumbnail */}
        <label className="block mb-2 font-bold">Thumbnail</label>
        <input
          type="file"
          name="thumbnail"
          onChange={handleChange}
          className="mb-4 text-sm file:bg-gray-200 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 hover:file:bg-gray-300 file:cursor-pointer"
        />

        {/* Tabs */}
        <div className="flex text-left mb-4">
          {["ingredients", "nutrition", "directions", "media"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 cursor-pointer font-medium ${
                activeTab === tab
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
            {/* Serving Size */}
            <label className="block mb-2 font-bold">Serving Size</label>
            <input
              type="number"
              name="servingSize"
              value={formData.servingSize}
              onChange={handleChange}
              className="w-24 text-sm border-1 border-secondary outline-none rounded p-2 mb-4" />

            {/* Cooking Time */}
            <label className="block mb-2 font-bold">Cooking Time</label>
            <input
              type="number"
              name="cookingTime"
              value={formData.cookingTime}
              onChange={handleChange}
              rows="4"
              className="w-24 text-sm border-1 border-secondary outline-none rounded p-2 mb-4" />

            {/* Ingredients List */}
            <label className="block mb-2 font-bold">Ingredients</label>
            {formData.ingredients.map((ing, idx) => (
              <div key={idx} className="text-sm flex flex-wrap gap-2 mb-2">
                {/* Ingredient name */}
                <input
                  type="text"
                  placeholder="Ingredient"
                  value={ing.ingredient}
                  onChange={(e) => handleIngredientChange(idx, "ingredient", e.target.value)}
                  className="w-70 border border-secondary outline-none rounded p-2" />

                {/* Quantity */}
                <input
                  type="number"
                  placeholder="Quantity"
                  value={ing.quantity}
                  onChange={(e) => handleIngredientChange(idx, "quantity", e.target.value)}
                  className="w-30 border border-secondary outline-none rounded p-2" />

                {/* Unit */}
                <input
                  type="text"
                  placeholder="Unit (kg, g, pcs)"
                  value={ing.unit}
                  onChange={(e) => handleIngredientChange(idx, "unit", e.target.value)}
                  className="w-40 border border-secondary outline-none rounded p-2" />

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => removeIngredientField(idx)}
                  className="cursor-pointer font-semibold text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
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
                    handleNutritionChange(idx, "carbohydrates", e.target.value)
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

        {activeTab === "directions" && (
          <div className="text-gray-500">Directions form...</div>
        )}

        {activeTab === "media" && (
          <div className="text-gray-500">Media uploads...</div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-primary text-white cursor-pointer font-semibold rounded-lg hover:bg-primary-offset"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddRecipe;
