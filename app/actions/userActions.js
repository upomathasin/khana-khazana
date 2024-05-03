import { connectMongo } from "@/dbConnect/connectMongo";
import { userModel } from "@/models/user-model";

export async function registerAction(formData) {
  try {
    const fname = formData.get("fname");
    const lname = formData.get("lname");
    const email = formData.get("email");
    const password = formData.get("password");
    const userData = { fname, lname, email, password };
    await connectMongo();
    const user = await userModel.findOne({ email: email }).lean();
    if (user) {
      throw new Error(`User with this email (${email}) already exists.`);
    } else {
      await new userModel(userData).save();
    }
  } catch (err) {
    throw err;
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
    const user = await userModel.findOne(query).lean();
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
