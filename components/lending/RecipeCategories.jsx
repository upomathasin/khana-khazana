import React from "react";
import Link from "next/link";
import { selectedCategory } from "@/app/utils";
export default function RecipeCategories() {
  const categories = [
    "Dessert",
    "Sunrise_Bites_Kitchen",
    "Break_fast_Brunch",
    "Rise_Dine_Eatery",
    "Breakfast_Oasis_Junction",
  ];
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {categories.map((category) => {
          return (
            <li key={crypto.randomUUID()}>
              <Link href={`/categories/${category}`}>
                {selectedCategory(category)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
