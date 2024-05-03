import { connectMongo } from "@/dbConnect/connectMongo";
import { userModel } from "@/models/user-model";

export async function performRegistration(formData) {
  try {
    await connectMongo();
    const fname = formData.get("fname");
    const lname = formData.get("lname");
    const email = formData.get("email");
    const password = formData.get("password");
    const userData = { fname, lname, email, password };

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

export async function performLogin(query) {
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
