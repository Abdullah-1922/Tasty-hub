import { getRecipe } from "@/services/recipeServices";
import Link from "next/link";
import RecipeCard from "../../common/RecipeCard";
import { TRecipe } from "@/types/recipe.types";

const HomeRecipeSection = async () => {
  const res = await getRecipe("6");
  const recipes = await res?.data;

  return (
    <div>
      <div className=" mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <div className="font-semibold inline-block">Cooking Recipe</div>
          </div>
          <Link href="/recipe">See all</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {recipes?.map((recipe: TRecipe) => (
            <RecipeCard recipe={recipe} key={recipe._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRecipeSection;
