const Recipe = require("../models/Recipe");
import { Recipe } from "../types/Recipe";

exports.getAllRecipes = (): Promise<Recipe[]> => Recipe.find({});
exports.createRecipe = (recipe: Recipe): Promise<Recipe> => Recipe.create(recipe);