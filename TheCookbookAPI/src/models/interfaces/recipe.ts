import mongoose, { Document } from "mongoose";
import { IIngredient } from "./ingredient";
import { INutrition } from "./nutrition";

export interface IRecipe extends Document {
    recipeId: Number;
    title: string;
    description: string;
    ingredients: IIngredient[];
    steps: string[];
    category: string;
    servings: Number;
    cookingTime: Number;
    cuisine: string;
    images: string[];
    nutrition: INutrition;
    addedBy: mongoose.Schema.Types.ObjectId;
}