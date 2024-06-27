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
    <main className='flex flex-col gap-4'>
      <Link href='/'>
        <FaArrowLeft />
      </Link>
      <RecipeDetails recipeId={params.id} />
    </main>
  );
}
