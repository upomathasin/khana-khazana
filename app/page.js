import HeroSection from "@/components/lending/HeroSection";
import RecipeCategories from "@/components/lending/RecipeCategories";
import RecipeList from "@/components/lending/RecipeList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <RecipeCategories></RecipeCategories>
          <RecipeList></RecipeList>
        </div>
      </section>
    </main>
  );
}
