"use client";
import Spinner from "@/components/atoms/Spinner";
import RecipeCard from "@/components/molecules/RecipeCard";
import { RecipesContext } from "@/context/RecipesContext";
import { Recipe } from "@/types/Recipe.interface";
import { useContext, useEffect, useState } from "react";

const RecipeList = () => {
  const { setAllRecipes, filteredRecipes, setFilteredRecipes } = useContext(RecipesContext);
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data): void => {
        setAllRecipes(data.data);
        setFilteredRecipes(data.data);
        setRecipes(data.data);
      });
  }, []);

  if (!recipes) return <Spinner />;

  return (
    <section className='flex flex-wrap justify-center gap-2 lg:gap-4'>
      {filteredRecipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </section>
  );
};

export default RecipeList;
