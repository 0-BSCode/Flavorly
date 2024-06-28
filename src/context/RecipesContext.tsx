"use client";
import { Recipe } from "@/types/Recipe.interface";
import { createContext, useState } from "react";

type RecipesContextType = {
  allRecipes: Recipe[];
  filteredRecipes: Recipe[];
  setAllRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  setFilteredRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const initialState: RecipesContextType = {
  allRecipes: [],
  filteredRecipes: [],
  setAllRecipes: () => {},
  setFilteredRecipes: () => {},
};

export const RecipesContext = createContext<RecipesContextType>(initialState);

type RecipesContextProviderProps = {
  children: React.ReactNode;
};

export const RecipesContextProvider = ({ children }: RecipesContextProviderProps) => {
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  return (
    <RecipesContext.Provider
      value={{
        allRecipes,
        filteredRecipes,
        setAllRecipes,
        setFilteredRecipes,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
