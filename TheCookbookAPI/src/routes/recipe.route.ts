import { Router } from 'express';
import Recipe from '../models/recipe.model';
const router = Router();

router.get('/', async (request, response) => {
    const recipes = await Recipe.find();
    response.json(recipes);
});

router.post('/', async (req, res) => {
  const newRecipe = new Recipe(req.body);
  const savedRecipe = await newRecipe.save();
  res.status(201).json(savedRecipe);
});

export default router;
