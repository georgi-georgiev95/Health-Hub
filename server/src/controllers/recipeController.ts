import { Request, Response } from "express";
import { Recipe } from "../types/Recipe";

const router = require("express").Router();
const recipeService = require("../services/recipeService");

router.get("/catalog", async (req: Request, res: Response) => {
  const recipes: Recipe[] = await recipeService.getAllRecipes();
  res.status(200).send(recipes);
});

router.post("/add", async (req: Request, res: Response) => {
  const recipe: Recipe = req.body;
  
  try {
    const newRecipe: Recipe = await recipeService.createRecipe(recipe);
    res.status(200).send(newRecipe);
  } catch (err) {
    const error = err as Error;
    res.status(400).send({ error: error.message });
  }
})

module.exports = router;
