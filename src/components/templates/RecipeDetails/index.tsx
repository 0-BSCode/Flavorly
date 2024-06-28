"use client";

import List from "@/components/atoms/List";
import Spinner from "@/components/atoms/Spinner";
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

  if (!recipe) return <Spinner />;

  const isDesktopSize = window.innerWidth >= 1024;
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
      {isDesktopSize ? (
        <div className='flex justify-between gap-7'>
          <List title='Ingredients' items={recipe.ingredients} isOrdered={false} />
          <List title='Procedure' items={recipe.instructions} isOrdered={true} />
        </div>
      ) : (
        <RecipeTabs ingredients={recipe.ingredients} instructions={recipe.instructions} />
      )}
    </>
  );
};

export default RecipeDetails;
