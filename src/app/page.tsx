import RecipeList from "@/components/organisms/RecipeList";

export default function Home() {
  return (
    <main className='flex flex-col gap-6'>
      <section className='flex justify-between items-center'>
        <div className='flex flex-col gap-0 items-center w-full'>
          <h1 className='text-2xl font-bold text-black'>Greetings!</h1>
          <p className='text-md italic text-neutral-gray-2'>What do you want to cook today?</p>
        </div>
      </section>
      <div className='flex flex-col gap-1'>
        <h3 className='text-xl font-medium text-center'>Recipes</h3>
        <div className='w-full h-1 bg-black' />
      </div>
      <RecipeList />
    </main>
  );
}
