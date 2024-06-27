"use client";

import RecipeHeader from "@/components/organisms/RecipeHeader";
import RecipeTabs from "@/components/organisms/RecipeTabs";
import { Recipe } from "@/types/Recipe.interface";
import { useEffect, useState } from "react";

const RecipeDetails = ({ recipeId }: { recipeId: string }) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch(`/api/recipes/${recipeId}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.data));
  }, []);

  if (!recipe) return <p>Loading...</p>;

  return (
    <>
      <RecipeHeader
        name={recipe.name}
        description={recipe.description}
        imgUrl={recipe.imgUrl}
        cookTime={recipe.cookTime}
        category={recipe.category}
        difficulty={recipe.difficulty}
      />
      <RecipeTabs ingredients={recipe.ingredients} instructions={recipe.instructions} />
    </>
  );
};

export default RecipeDetails;
