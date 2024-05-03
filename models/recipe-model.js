import mongoose, { Schema } from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: { type: String },
  activeTime: { type: String },
  totalTime: { type: String },
  thumbnail: { type: String },
  image: { type: String },
  category: { type: String },
  serves: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  steps: {
    type: Array,
  },
});

export const recipeModel =
  mongoose.models?.recipes || mongoose.model("recipes", recipeSchema);
