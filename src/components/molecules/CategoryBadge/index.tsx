import Badge from "@/components/atoms/Badge";
import { Recipe } from "@/types/recipe.interface";
import { FaBowlFood } from "react-icons/fa6";

type CategoryBadgeProps = Pick<Recipe, "category">;
const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  return <Badge color='#FFCE80' text={`${category}`} icon={<FaBowlFood />} />;
};

export default CategoryBadge;
