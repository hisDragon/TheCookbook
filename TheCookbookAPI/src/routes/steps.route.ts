import { Router, Request, Response } from 'express';
import { IRecipe } from '../models/interfaces/recipe';
import Recipe from '../models/recipe.model';
import mongoose from 'mongoose';
const router = Router();

/**
 * @swagger
 * tags:
 *  name: Steps
 *  description: Steps management for the Recipe
 */

/**
 * @swagger
 * /api/recipes/steps/{recipeId}:
 *  patch:
 *    tags: [Steps]
 *    summary: Updates an already existing Recipe
 *    parameters:
 *      - in: path
 *        name: recipeId
 *        required: true
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              type: array
 *              items:
 *                  type: string
 *              example: ["Turn on the Gas", "Put oil on the pan"]
 *    description: Endpoint to update the Recipe's Steps with Id `recipeId`
 *    responses:
 *      200:
 *        description: Updated Recipe with new Steps
 */
router.patch('/:recipeId', async (req: Request<{ recipeId: mongoose.Schema.Types.ObjectId }, {}, [string], {}>, res: Response) => {
    try {
        const recipeId: mongoose.Schema.Types.ObjectId = req.params.recipeId;
        const existingRecipe: IRecipe = await Recipe.findById(recipeId) ?? new Recipe();
        const existingRecipeSteps: string[] = existingRecipe?.steps ?? [""];
        const newRecipeSteps: string[] = req.body ?? [""];

        const allRecipeSteps: Array<string> = Array.from(new Set([...existingRecipeSteps, ...newRecipeSteps]));

        existingRecipe.steps = allRecipeSteps;
        const recipeUpdates: Partial<IRecipe> = existingRecipe;

        const updatedRecipeDocument = await Recipe.findByIdAndUpdate(recipeId, recipeUpdates, { new: true, runValidators: false, upsert: true });

        if (!updatedRecipeDocument) {
            return res.status(404).json({ message: "Recipe to update not found." });
        }

        return res.status(200).json({});

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        } else {
            return res.status(500).json({ message: "Unknown Error." });
        }
    }
});

export default router;
