import mongoose, { Schema, model } from 'mongoose';
// import QuantityTypeEnum from '../types/enums/ingredient.quantityType.enum';
// import CuisineEnum from '../types/enums/recipe.cuisine.enum';
import { IRecipe } from './interfaces/recipe';
import { IIngredient } from './interfaces/ingredient';
import { INutrition } from './interfaces/nutrition';

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
    images: {
        type: [
            String
        ]
    },
    nutrition: {
        type: new Schema<INutrition>({
            calories: {
                type: Number,
                required: true
            },
            protein: {
                type: Number,
                default: 0
            },
            carbohydrates: {
                type: Number,
                default: 0
            },
            sugar: {
                type: Number,
                default: 0
            },
            salt: {
                type: Number,
                default: 0
            },
            energy: {
                type: Number,
                default: 0
            },
            fat: {
                type: Number,
                default: 0
            }
        })
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

export default model('Recipe', RecipeSchema);


// {
//     title: "",
//     description: "",
//     thumbnail: null,
//     servings: 1,
//     cookingTime: 1,
//     category: "",
//     cuisine: "",
//     ingredients: [{ name: "", quantity: "", quantityType: "" }],
//     steps: [""],
//     images: [""],
//     "nutrition": {
//         "calories": 500,
//         "protein": 15,
//         "carbohydrates": 20,
//         "sugar": 10,
//         "salt": 20,
//         "energy": 450,
//         "fat": 18.5
//     },
//     addedBy: {}
// }