import { getAllRecipeById } from "@/app/actions/recipeActions";
import DetailsHeroSection from "@/components/recipe-details/DetailsHeroSection";
import MakingProcess from "@/components/recipe-details/MakingProcess";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params: { id } }) {
  const recipe = await getAllRecipeById(id);
  if (!recipe) {
    notFound();
  }
  return {
    title: `Recipe - ${recipe?.name}`,
    description: `${recipe.description}`,
    openGraph: {
      images: [recipe?.thumbnail],
    },
  };
}

export default async function DetailsPage({ params: { id } }) {
  const recipe = await getAllRecipeById(id);
  if (!recipe) {
    notFound();
  }
  return (
    <main>
      <DetailsHeroSection recipe={recipe}></DetailsHeroSection>
      <MakingProcess steps={recipe.steps}></MakingProcess>
    </main>
  );
}
