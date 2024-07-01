import RecipesList from "@/components/templates/RecipesList";

export default function Home() {
  return (
    <main className='mx-auto flex flex-col gap-6 lg:w-5/6 xl:w-3/5'>
      <section className='flex items-center justify-between'>
        <div className='flex w-full flex-col items-center gap-0'>
          <h1 className='text-2xl font-bold text-black md:text-3xl lg:text-4xl'>Greetings!</h1>
          <p className='text-md italic text-neutral-gray-2 md:text-xl'>What do you want to cook today?</p>
        </div>
      </section>{" "}
      <RecipesList />
    </main>
  );
}
