import { connectMongo } from "@/dbConnect/connectMongo";
import { recipeModel } from "@/models/recipe-model";
import mongoose from "mongoose";

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
  await connectMongo();
  try {
    const recipes = await recipeModel.find({ category: category }).lean();
    if (recipes.length) {
      return recipes;
    } else {
      return null;
    }
  } catch (err) {
    throw err;
  }
}
