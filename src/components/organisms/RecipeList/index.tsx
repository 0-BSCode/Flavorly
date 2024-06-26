"use client";
import RecipeCard from "@/components/molecules/RecipeCard";
import { Recipe } from "@/types/Recipe.interface";
import { useEffect, useState } from "react";

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.data));
  }, []);

  return (
    <section>
      <h1>Recipe List</h1>
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </section>
  );
};

export default RecipeList;
