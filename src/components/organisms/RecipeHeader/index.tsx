import Badge from "@/components/atoms/Badge";
import CategoryBadge from "@/components/molecules/CategoryBadge";
import DifficultyBadge from "@/components/molecules/DifficultyBadge";
import TimeBadge from "@/components/molecules/TimeBadge";
import { Recipe } from "@/types/Recipe.interface";
import { FaClock } from "react-icons/fa";

type RecipeHeader = Omit<Recipe, "id" | "ingredients" | "instructions">;

const RecipeHeader = (recipeInfo: RecipeHeader) => {
  return (
    <section className='flex flex-col gap-5 md:gap-8'>
      <div className='relative h-52 w-full md:h-60 md:rounded-xl lg:h-72'>
        <img
          className='absolute h-full w-full rounded-[inherit] object-cover'
          src={recipeInfo.imgUrl}
          alt={recipeInfo.name}
        />
        <div className='absolute h-full w-full rounded-[inherit] bg-gradient-to-b from-transparent from-50% to-neutral-black to-95%' />
      </div>
      <div className='flex flex-col items-center gap-2 md:gap-1'>
        <div className='flex w-full'>
          {/* TODO: Figure out if we should render the remaining badges */}
          <Badge color='#FFCE80' text={`${recipeInfo.cookTime}m`} icon={<FaClock />} />
        </div>
        <h1 className='text-center text-2xl font-bold text-primary-100 md:text-3xl'>{recipeInfo.name}</h1>
        <p className='text-center text-md text-black md:text-lg'>{recipeInfo.description}</p>
      </div>
    </section>
  );
};

export default RecipeHeader;
