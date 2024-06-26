import { Recipe } from "@/types/Recipe.interface";
import Link from "next/link";

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
    <main className='flex flex-col items-center p-24'>
      <Link href='/'>Go Back</Link>
      <h1>Recipe Page</h1>
      <h3>{recipe.name}</h3>
    </main>
  );
}
