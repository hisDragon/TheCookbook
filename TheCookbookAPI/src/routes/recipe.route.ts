import { Router, Request, Response } from 'express';
import { IRecipe } from '../models/interfaces/recipe';
import Recipe from '../models/recipe.model';
import mongoose from 'mongoose';
const router = Router();

/**
 * @swagger
 * tags:
 *  name: Recipe
 *  description: Recipe management API
 */

//#region GET

/**
 * @swagger
 * /api/recipes:
 *  get:
 *    tags: [Recipe]
 *    summary: Retrieve a list of all the Recipes
 *    description: Endpoint to get all Recipes
 *    responses:
 *      200:
 *        description: A list of all Recipes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/Recipe'
 */
router.get('/', async (_request, response) => {
    const recipes = await Recipe.find();
    response.json(recipes);
});

/**
 * @swagger
 * /api/recipes/{recipeId}:
 *  get:
 *    tags: [Recipe]
 *    summary: Gets a Recipe with `recipeId`
 *    parameters:
 *      - in: path
 *        name: recipeId
 *        required: true
 *        schema:
 *          type: string
 *    description: Endpoint to get the Recipe with Id `recipeId`
 *    responses:
 *      200:
 *        description: Recipe
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/Recipe'
 *      404:
 *        description: Recipe not found
 *      500:
 *        description: Internal server error
 */
router.get('/:recipeId', async (req: Request<{ recipeId: mongoose.Schema.Types.ObjectId }, {}, {}, {}>, res: Response) => {
    try {
        const recipeId: mongoose.Schema.Types.ObjectId = req.params.recipeId;

        const recipe = await Recipe.findById(recipeId);

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found." });
        }

        return res.status(200).json(recipe);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        } else {
            return res.status(500).json({ message: "Unknown Error." });
        }
    }
});

//#endregion GET

//#region POST

/**
 * @swagger
 * /api/recipes:
 *  post:
 *    tags: [Recipe]
 *    summary: Create a new Recipe
 *    description: Endpoint to create a new Recipe
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Recipe'
 *    responses:
 *      201:
 *        description: Created Recipe
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/Recipe'
 */
router.post('/', async (req: Request<{}, {}, { recipeUpdates: IRecipe }, {}>, res) => {
    const newRecipe: IRecipe = new Recipe(req.body);
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
});

//#endregion POST

//#region PATCH

/**
 * @swagger
 * /api/recipes/{recipeId}:
 *  patch:
 *    tags: [Recipe]
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
 *            $ref: '#/components/schemas/Recipe'
 *    description: Endpoint to update the Recipe with Id `recipeId`
 *    responses:
 *      200:
 *        description: Updated Recipe
 */
router.patch('/:recipeId', async (req: Request<{ recipeId: mongoose.Schema.Types.ObjectId }, {}, {}, {}>, res: Response) => {
    try {
        const recipeId: mongoose.Schema.Types.ObjectId = req.params.recipeId;
        // if (!mongoose.Types.ObjectId.isValid(recipeId)) {
        //   return res.status(400).json({ error: 'Invalid user ID format' });
        // }

        const recipeUpdates: Partial<IRecipe> = req.body;

        console.log(recipeUpdates);

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

//#endregion PATCH

//#region DELETE

/**
 * @swagger
 * /api/recipes/{recipeId}:
 *  delete:
 *    tags: [Recipe]
 *    summary: Deletes a Recipe if it exists
 *    parameters:
 *      - in: path
 *        name: recipeId
 *        required: true
 *        schema:
 *          type: string
 *    description: Endpoint to delete the Recipe with Id `recipeId`
 *    responses:
 *      200:
 *        description: Deleted Recipe
 */
router.delete('/:recipeId', async (req: Request<{ recipeId: mongoose.Schema.Types.ObjectId }, {}, {}, {}>, res: Response) => {
    try {
        const recipeId: mongoose.Schema.Types.ObjectId = req.params.recipeId;

        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);

        if (!deletedRecipe) {
            return res.status(404).json({ message: "Recipe not found." });
        }

        return res.status(200).json(deletedRecipe);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        } else {
            return res.status(500).json({ message: "Unknown Error." });
        }
    }
});

//#endregion DELETE

export default router;
