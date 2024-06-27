import Badge from "@/components/atoms/Badge";
import { Recipe } from "@/types/Recipe.interface";
import Link from "next/link";
import { FaClock } from "react-icons/fa";
import TimeBadge from "../TimeBadge";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link href={`/recipes/${recipe.id}`} className='w-fit h-fit'>
      <div className='relative flex flex-col rounded-lg bg-neutral-gray-4 w-40 h-40 items-center'>
        <img className='absolute w-full h-full object-cover rounded-lg' src={recipe.imgUrl} alt={recipe.name} />
        <div className='absolute rounded-lg w-full h-full bg-gradient-to-b from-transparent from-50% to-neutral-black to-95%' />
        <div className='z-50 w-full h-full flex flex-col justify-between p-2'>
          <Badge color='white' text={`${recipe.cookTime}m`} icon={<FaClock />} />
          <p className='text-white font-medium text-md'>{recipe.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
