import RecipeHeader from "@/components/organisms/RecipeHeader";
import RecipeTabs from "@/components/organisms/RecipeTabs";
import { Recipe } from "@/types/Recipe.interface";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

// TODO: Use useEffect to fetch data
export async function getRecipeData(id: number) {
  const res = await fetch(`http://localhost:3000/api/recipes/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  // TODO: Reinforce this type
  return data.data;
}

export default async function RecipePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const recipe: Recipe = await getRecipeData(parseInt(params.id));
  return (
    <main className='flex flex-col gap-4'>
      <Link href='/'>
        <FaArrowLeft />
      </Link>
      <RecipeHeader
        name={recipe.name}
        description={recipe.description}
        imgUrl={recipe.imgUrl}
        cookTime={recipe.cookTime}
        category={recipe.category}
        difficulty={recipe.difficulty}
      />
      <RecipeTabs ingredients={recipe.ingredients} instructions={recipe.instructions} />
    </main>
  );
}
