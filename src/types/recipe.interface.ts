import { FoodCategory } from "./enums/FoodCategory.enum";
import { RecipeDifficultyEnum } from "./enums/RecipeDifficulty.enum";

export interface Recipe {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  difficulty: RecipeDifficultyEnum;
  cookTime: number;
  category: FoodCategory;
}
