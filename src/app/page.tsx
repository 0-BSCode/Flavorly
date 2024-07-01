import HomepageHeader from "@/components/organisms/HomepageHeader";
import RecipesList from "@/components/templates/RecipesList";

export default function Home() {
  return (
    <main className='mx-auto flex flex-col gap-6 lg:w-5/6 xl:w-3/5'>
      <HomepageHeader />
      <RecipesList />
    </main>
  );
}
