import RecipeDetails from "@/components/templates/RecipeDetails";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function RecipePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <main className='flex flex-col gap-4 md:gap-8'>
      <Link
        href='/'
        className='flex items-center gap-2 text-md text-neutral-gray-2 md:gap-4 md:text-lg lg:text-xl xl:text-2xl'
      >
        <FaArrowLeft />
        <p>Go Back</p>
      </Link>
      <RecipeDetails recipeId={params.id} />
    </main>
  );
}
