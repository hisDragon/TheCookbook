import mongoose, { Document } from "mongoose";
import { IIngredient } from "./ingredient";

export interface IRecipe extends Document {
    recipeId: Number;
    title: string;
    description: string;
    ingredients: [IIngredient];
    steps: [string];
    category: string;
    servings: Number;
    cookingTime: Number;
    cuisine: string;
    tags: string;
    images: [string];
    addedBy: mongoose.Schema.Types.ObjectId;
}