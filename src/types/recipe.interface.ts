import { FoodCategory } from "./enums/FoodCategory.enum";

// TODO: Incorporate more details
export interface Recipe {
  id: number;
  name: string;
  // imgUrl: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  // category: FoodCategory;
}
