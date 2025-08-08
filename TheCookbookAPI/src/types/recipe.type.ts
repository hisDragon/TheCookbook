import mongoose from "mongoose"
import IngredientType from "./ingredient.type";
import UserType from "./user.type";
import CuisineEnum from "./enums/recipe.cuisine.enum";

type RecipeType = {
    _id: mongoose.Schema.Types.ObjectId;
    recipeId: number;
    title: string;
    description: string;
    ingredients: IngredientType[];
    steps: string[];
    category: string;
    servings: number;
    cookingTime: number;
    cuisine: CuisineEnum;
    tags: string;
    images: string[];
    addedBy: mongoose.Schema.Types.ObjectId | UserType;
}

export default RecipeType;