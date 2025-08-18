import { Document } from "mongoose";

export interface IIngredient extends Document {
    name: string;
    quantity: Number;
    quantityType: string;
}