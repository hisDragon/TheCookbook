import mongoose, { Schema, model } from 'mongoose';
import QuantityTypeEnum from '../types/enums/ingredient.quantityType.enum';
import CuisineEnum from '../types/enums/recipe.cuisine.enum';

const RecipeSchema = new Schema({
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
    type: [new Schema({
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
        required: true,
        enum: QuantityTypeEnum
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
    type: String,
    enum: ['CategoryA', 'CategoryB'] // TODO: Ask Bhu
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
    type: String,
    enum: CuisineEnum
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

// {
//   "recipeId": 1,
//   "title": "Brownie",
//   "description": "delectus aut autem",
//   "ingredients": [
//     {
//       "name": "Sugar",
//       "quantity": 1000,
//       "quantityType": "g"
//     }
//   ],
//   "steps": [
//     "Step 1 : Hi",
//     "Step 2 : Bye."
//   ],
//   "category": "CategoryB",
//   "servings": 10,
//   "cookingTime": 100,
//   "cuisine": "CONTINENTAL",
//   "tags": "my-tag",
//   "images": [
//     "image1.png",
//     "image2.png"
//   ],
//   "addedBy": {
//     "$oid": "6885175aff44591e3dc926f0"
//   }
// }