import { getAllRecipeByCategory } from "@/app/actions/recipeActions";
import { selectedCategory } from "@/app/utils";
import RecipeCard from "@/components/lending/RecipeCard";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params: { name } }) {
  return {
    title: `Recipes - ${name}`,
  };
}

export default async function CategoryPage({ params: { name } }) {
  const selected = selectedCategory(name);
  if (selected === "Invalid category") {
    notFound();
  }
  const recipes = await getAllRecipeByCategory(selected);

  return (
    <div>
      <section class="container py-8">
        <div>
          <h3 class="font-semibold text-xl">{selectedCategory(name)}</h3>

          {recipes.length ? (
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
              {recipes?.map((recipe) => (
                <RecipeCard
                  key={recipe._id.toString()}
                  recipe={recipe}
                ></RecipeCard>
              ))}
            </div>
          ) : (
            <div className="h-screen w-full flex flex-col justify-center items-center">
              <h1 className="text-blue-400 text-5xl">
                Nothing Added to this category !
              </h1>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
