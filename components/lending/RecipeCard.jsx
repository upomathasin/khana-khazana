import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function RecipeCard({ recipe }) {
  return (
    <Link href={`/details/${recipe._id.toString()}`}>
      <div className="card">
        <Image
          width={300}
          height={160}
          src={recipe.thumbnail}
          className="rounded-md"
          alt=""
        />
        <h4 className="my-2">{recipe.name}</h4>
        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>
            {Array(recipe.rating)
              .fill("star")
              .map((star) => (
                <span key={crypto.randomUUID()}> ⭐️</span>
              ))}
          </span>
          <span>By: {recipe.author}</span>
        </div>
      </div>
    </Link>
  );
}
