import Badge from "@/components/atoms/Badge";
import CategoryBadge from "@/components/molecules/CategoryBadge";
import DifficultyBadge from "@/components/molecules/DifficultyBadge";
import TimeBadge from "@/components/molecules/TimeBadge";
import { Recipe } from "@/types/Recipe.interface";
import { FaClock } from "react-icons/fa";

type RecipeHeader = Omit<Recipe, "id" | "ingredients" | "instructions">;

const RecipeHeader = (recipeInfo: RecipeHeader) => {
  return (
    <section className='flex flex-col gap-5'>
      <div className='relative w-full h-52'>
        <img className='absolute w-full h-full object-cover rounded-lg' src={recipeInfo.imgUrl} alt={recipeInfo.name} />
        <div className='absolute rounded-lg w-full h-full bg-gradient-to-b from-transparent from-50% to-neutral-black to-95%' />
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <div className='flex justify-center w-full'>
          {/* TODO: Figure out if we should render the remaining badges */}
          <Badge color='#FFCE80' text={`${recipeInfo.cookTime}m`} icon={<FaClock />} />
        </div>
        <h1 className='text-2xl font-bold text-primary-100 text-center'>{recipeInfo.name}</h1>
        <p className='text-md text-black text-center'>{recipeInfo.description}</p>
      </div>
    </section>
  );
};

export default RecipeHeader;
