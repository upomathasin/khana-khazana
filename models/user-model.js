import mongoose, { Schema } from "mongoose";

const UsersSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  password: String,
  favourites: {
    type: Array,
  },
});

export const userModel =
  mongoose.models?.users || mongoose.model("users", UsersSchema);
