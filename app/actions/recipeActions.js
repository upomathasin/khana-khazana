import { connectMongo } from "@/dbConnect/connectMongo";
import { recipeModel } from "@/models/recipe-model";
import mongoose from "mongoose";
import { selectedCategory } from "../utils";

export async function getAllRecipes() {
  try {
    await connectMongo();
    const allRecipes = await recipeModel.find().lean();
    console.log(allRecipes);
    return allRecipes;
  } catch (err) {
    throw err;
  }
}
export async function getAllRecipeById(id) {
  try {
    await connectMongo();
    const recipe = await recipeModel
      .findById(new mongoose.Types.ObjectId(id))
      .lean();
    console.log(recipe);
    if (recipe) {
      return recipe;
    } else return null;
  } catch (err) {
    throw err;
  }
}

export async function getAllRecipeByCategory(category) {
  try {
    await connectMongo();
    console.log(category);

    if (recipes.length) {
      const recipes = await recipeModel.find({ category: category }).lean();
      console.log(" Categoris based food", recipes);
      return recipes;
    } else return null;
  } catch (err) {
    throw err;
  }
}
