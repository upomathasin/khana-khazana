"use server";
import { connectMongo } from "@/dbConnect/connectMongo";
import { userModel } from "@/models/user-model";
import { performLogin, performRegistration } from "../qeries";

export async function registerAction(formData) {
  try {
    await performRegistration(formData);
  } catch (er) {
    throw er;
  }
}

export async function updateUserFav(recipeId, authId) {
  try {
    await connectMongo();
    const user = await userModel.findById(authId);

    const foundRecipe = user.favourites.find((recipe) => recipe === recipeId);
    if (foundRecipe) {
      user.favourites.pull(recipeId);
    } else {
      user.favourites.push(recipeId);
    }
    user.save();
  } catch (e) {
    throw new Error(e);
  }
}

export async function loginAction(query) {
  try {
    await connectMongo();
    const user = await performLogin(query);
    if (user) {
      return user;
    } else
      throw new Error(
        `User with email (${query?.email}) or password is invalid.`
      );
  } catch (err) {
    throw new Error("Invalid input !");
  }
}
