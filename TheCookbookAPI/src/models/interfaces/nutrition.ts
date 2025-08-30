import { Document } from "mongoose";

export interface INutrition extends Document {
    calories: Number;
    protein: Number;
    carbohydrates: Number;
    sugar: Number;
    salt: Number;
    energy: Number;
    fat: Number;
}