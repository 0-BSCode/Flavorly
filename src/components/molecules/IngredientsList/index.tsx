type IngredientsListProps = {
  title: string;
  items: string[];
};

const IngredientsList = ({ title, items }: IngredientsListProps) => {
  return (
    <div className='flex flex-1 flex-col gap-3'>
      <h4 className='rounded-xl bg-primary-100 py-4 text-center text-2xl font-bold text-white'>{title}</h4>
      <p className='my-2 text-center text-xl text-neutral-gray-1'>{items.length} items</p>
      <ol className='flex list-inside flex-col gap-3'>
        {items.map((item, index) => (
          <li className='list-none rounded-lg bg-neutral-gray-4 p-4 text-md' key={index}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default IngredientsList;
