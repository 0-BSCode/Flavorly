const HomepageHeader = () => {
  return (
    <section className='flex items-center justify-between'>
      <div className='flex w-full flex-col items-center gap-0'>
        <h1 className='text-2xl font-bold text-black md:text-3xl lg:text-4xl'>Greetings!</h1>
        <p className='text-md italic text-neutral-gray-2 md:text-xl'>What do you want to cook today?</p>
      </div>
    </section>
  );
};

export default HomepageHeader;
