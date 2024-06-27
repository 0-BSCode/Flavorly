import RecipeList from "@/components/organisms/RecipeList";

export default function Home() {
  return (
    <main className='flex flex-col gap-6'>
      <section className='flex items-center justify-between'>
        <div className='flex w-full flex-col items-center gap-0'>
          <h1 className='text-2xl font-bold text-black'>Greetings!</h1>
          <p className='text-md italic text-neutral-gray-2'>What do you want to cook today?</p>
        </div>
      </section>
      <div className='flex flex-col gap-1'>
        <h3 className='text-center text-xl font-medium'>Recipes</h3>
        <div className='h-1 w-full bg-black' />
      </div>
      <RecipeList />
    </main>
  );
}
