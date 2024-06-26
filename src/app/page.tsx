import RecipeList from "@/components/organisms/RecipeList";

export default function Home() {
  return (
    <main className='flex flex-col gap-3'>
      <section className='flex justify-between'>
        <div>
          <h1>Greetings!</h1>
          <p>What do you want to cook today?</p>
        </div>
        <img src={"https://randomuser.me/api/portraits/thumb/women/39.jpg"} alt='Profile Picture' />
      </section>
      <h3 className='text-xl font-medium'>Recipes</h3>
      <RecipeList />
    </main>
  );
}
