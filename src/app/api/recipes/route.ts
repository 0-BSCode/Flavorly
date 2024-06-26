import { Recipe } from "@/types/recipe.interface";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

const FILE_URL = path.join("src", "data", "recipes.json");

export async function GET() {
  let recipeData: Recipe[] | null = null;

  try {
    const data = await readFile(FILE_URL, "utf8");
    recipeData = JSON.parse(data);
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  }

  return NextResponse.json(
    {
      data: recipeData,
    },
    {
      status: recipeData === null ? 500 : 200,
    },
  );
}
