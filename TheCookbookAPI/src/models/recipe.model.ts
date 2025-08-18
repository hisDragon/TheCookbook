import mongoose, { Schema, model } from 'mongoose';
// import QuantityTypeEnum from '../types/enums/ingredient.quantityType.enum';
// import CuisineEnum from '../types/enums/recipe.cuisine.enum';
import { IRecipe } from './interfaces/recipe';
import { IIngredient } from './interfaces/ingredient';

const RecipeSchema: Schema<IRecipe> = new Schema<IRecipe>({
    recipeId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    ingredients: {
        type: [new Schema<IIngredient>({
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            quantityType: {
                type: String,
                required: true
            }
        })]
    },
    steps: {
        type: [
            String
        ],
        required: true
    },
    category: {
        type: String
    },
    servings: {
        type: Number,
        required: true
    },
    cookingTime: {
        type: Number,
        required: true
    },
    cuisine: {
        type: String
    },
    tags: {
        type: String
    },
    images: {
        type: [
            String
        ]
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

export default model('Recipe', RecipeSchema);
