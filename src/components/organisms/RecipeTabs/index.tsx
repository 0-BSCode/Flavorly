"use client";
import { Recipe } from "@/types/Recipe.interface";
import { useState } from "react";

enum RecipeTabsEnum {
  INGREDIENTS,
  PROCEDURE,
}
type RecipeTabsProps = Pick<Recipe, "ingredients" | "instructions">;
const RecipeTabs = (recipeInfo: RecipeTabsProps) => {
  const [activeTab, setActiveTab] = useState<RecipeTabsEnum>(RecipeTabsEnum.INGREDIENTS);

  const handleActiveTabChange = (tab: RecipeTabsEnum) => {
    setActiveTab(tab);
  };

  return (
    <section className='flex flex-col gap-4'>
      {/* Tabs */}
      <div className='flex'>
        <button
          className='flex-1 py-3 rounded-lg font-bold'
          style={{
            backgroundColor: activeTab === RecipeTabsEnum.INGREDIENTS ? "#129575" : "white",
            color: activeTab === RecipeTabsEnum.INGREDIENTS ? "white" : "#71B1A1",
          }}
          onClick={() => handleActiveTabChange(RecipeTabsEnum.INGREDIENTS)}
        >
          Ingredients
        </button>
        <button
          className='flex-1 py-3 rounded-lg font-bold'
          style={{
            backgroundColor: activeTab === RecipeTabsEnum.PROCEDURE ? "#129575" : "white",
            color: activeTab === RecipeTabsEnum.PROCEDURE ? "white" : "#71B1A1",
          }}
          onClick={() => handleActiveTabChange(RecipeTabsEnum.PROCEDURE)}
        >
          Procedure
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        {activeTab === RecipeTabsEnum.INGREDIENTS && (
          <>
            <p className='text-md text-neutral-gray-1'>{recipeInfo.ingredients.length} items</p>
            <ol className='list-decimal list-inside flex flex-col gap-2'>
              {recipeInfo.ingredients.map((ingredient, idx) => (
                <li className='bg-neutral-gray-4 p-4 rounded-lg text-md' key={`ingredient-${idx}`}>
                  {ingredient}
                </li>
              ))}
            </ol>
          </>
        )}
        {activeTab === RecipeTabsEnum.PROCEDURE && (
          <>
            <p className='text-md text-neutral-gray-1'>{recipeInfo.instructions.length} steps</p>
            <ol className='list-inside flex flex-col gap-2'>
              {recipeInfo.instructions.map((instruction, idx) => (
                <li className='bg-neutral-gray-4 p-4 rounded-lg text-md' key={`instruction-${idx}`}>
                  <p className='font-bold'>Step {idx + 1}</p>
                  <p className='mt-1'>{instruction}</p>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </section>
  );
};

export default RecipeTabs;
