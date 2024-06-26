import { FoodCategory } from "./enums/FoodCategory.enum";
import { RecipeDifficultyEnum } from "./enums/RecipeDifficulty.enum";

// TODO: Incorporate more details
export interface Recipe {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  difficulty: RecipeDifficultyEnum;
  cookTime: string;
  category: FoodCategory;
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}
