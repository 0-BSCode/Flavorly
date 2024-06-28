import Badge from "@/components/atoms/Badge";
import { Recipe } from "@/types/recipe.interface";
import Link from "next/link";
import { FaClock } from "react-icons/fa";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link href={`/recipes/${recipe.id}`} className='h-fit w-fit'>
      <div className='relative flex aspect-square w-40 flex-col items-center rounded-lg bg-neutral-gray-4 sm:w-[12.5rem] md:w-52 lg:w-64 xl:w-[16rem]'>
        <img className='absolute h-full w-full rounded-lg object-cover' src={recipe.imgUrl} alt={recipe.name} />
        <div className='absolute h-full w-full rounded-lg bg-gradient-to-b from-transparent from-50% to-neutral-black to-95%' />
        <div className='z-50 flex h-full w-full flex-col justify-between p-2 lg:p-4'>
          <Badge color='white' text={`${recipe.cookTime}m`} icon={<FaClock />} />
          <div className='flex flex-col gap-1'>
            <p className='text-md font-medium text-white lg:text-lg'>{recipe.name}</p>
            <p className='hidden text-xs italic text-white lg:block lg:text-sm'>{recipe.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
