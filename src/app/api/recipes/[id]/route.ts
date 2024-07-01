import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { Recipe } from "@/types/recipe.interface";
import FILE_URL from "../_constants/fileUrl";

export async function GET(request: Request) {
  const requestUrl = request.url.split("/");
  const recipeId = parseInt(requestUrl[requestUrl.length - 1]);

  let recipeData: Recipe | undefined;

  try {
    const data = await readFile(FILE_URL, "utf8");
    const recipes: Recipe[] = JSON.parse(data);
    recipeData = recipes.filter((recipe) => recipe.id === recipeId)[0];
    if (recipeData === undefined) {
      throw new Error("Can't find recipe");
    }
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json(
        {
          error: e.message,
        },
        {
          status: 404,
        },
      );
    }
  }

  return NextResponse.json(
    { data: recipeData },
    {
      status: 200,
    },
  );
}
