import Badge from "@/components/atoms/Badge";
import { Recipe } from "@/types/recipe.interface";
import { FaClock } from "react-icons/fa";

type TimeBadgeProps = Pick<Recipe, "cookTime">;
const TimeBadge = ({ cookTime }: TimeBadgeProps) => {
  return <Badge color='#FFCE80' text={`${cookTime}m`} icon={<FaClock />} />;
};

export default TimeBadge;
