import Badge from "@/components/atoms/Badge";
import { Recipe } from "@/types/recipe.interface";
import { FaTools } from "react-icons/fa";

type DifficultyBadgeProps = Pick<Recipe, "difficulty">;
const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
  return <Badge color='#FFCE80' text={`${difficulty}`} icon={<FaTools />} />;
};

export default DifficultyBadge;
