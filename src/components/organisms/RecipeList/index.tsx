"use client";
import RecipeCard from "@/components/molecules/RecipeCard";
import { Recipe } from "@/types/Recipe.interface";
import { useEffect, useState } from "react";

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.data));
  }, []);

  if (!recipes) return <p>Loading...</p>;

  return (
    <section className='flex flex-wrap justify-center gap-2 lg:gap-4'>
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </section>
  );
};

export default RecipeList;
