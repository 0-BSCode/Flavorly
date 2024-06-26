import { Recipe } from "@/types/Recipe.interface";
import Link from "next/link";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link href={`/recipes/${recipe.id}`} className='w-full flex justify-center'>
      <div className='flex flex-col rounded-lg bg-slate-300 w-[90%] h-fit items-center'>
        <div className='w-full h-3/5 flex flex-col items-center bg-neutral-gray-3 rounded-t-lg'>
          <img className='h-full' src={recipe.imgUrl} alt={recipe.name} />
        </div>
        <div className='flex flex-col gap-3 px-6 text-center py-5'>
          <h3>{recipe.name}</h3>
          <p>{recipe.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
