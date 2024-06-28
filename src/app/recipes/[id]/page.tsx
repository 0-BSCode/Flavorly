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
    <main className='mx-auto flex flex-col gap-4 md:gap-8 lg:w-3/5'>
      <Link href='/' className='flex items-center gap-2 text-md text-neutral-gray-2 md:gap-4 md:text-lg lg:text-xl'>
        <FaArrowLeft />
        <p>Go Back</p>
      </Link>
      <div className='flex flex-col gap-4 md:gap-8 lg:gap-12'>
        <RecipeDetails recipeId={params.id} />
      </div>
    </main>
  );
}
