import { Recipe } from "@/types/recipe.interface";
import Link from "next/link";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div>
        <h3>{recipe.name}</h3>
      </div>
    </Link>
  );
};

export default RecipeCard;
