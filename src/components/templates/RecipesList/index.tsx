"use client";

import RecipeList from "@/components/organisms/RecipeList";
import SearchForm from "@/components/organisms/SearchForm";
import { RecipesContextProvider } from "@/context/RecipesContext";

const RecipesList = () => {
  return (
    <RecipesContextProvider>
      <div className='flex flex-col gap-1'>
        <h3 className='text-center text-xl font-medium md:text-2xl lg:text-3xl'>Recipes</h3>
        <div className='h-1 w-full bg-black' />
      </div>
      <SearchForm />
      <RecipeList />
    </RecipesContextProvider>
  );
};

export default RecipesList;
