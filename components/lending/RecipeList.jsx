import React from "react";
import RecipeCard from "./RecipeCard";
import { getAllRecipes } from "@/app/actions/recipeActions";

export default async function RecipeList() {
  const allRecipes = await getAllRecipes();
  return (
    <div className="col-span-12 md:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
        {allRecipes?.map((recipe) => (
          <RecipeCard key={recipe._id.toString()} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
}
