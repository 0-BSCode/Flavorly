"use client";

import RecipeList from "@/components/organisms/RecipeList";
import SearchForm from "@/components/organisms/SearchForm";
import { RecipesContextProvider } from "@/context/RecipesContext";

const RecipesList = () => {
  return (
    <RecipesContextProvider>
      <SearchForm />
      <RecipeList />
    </RecipesContextProvider>
  );
};

export default RecipesList;
