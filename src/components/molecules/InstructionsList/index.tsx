type InstructionsListProps = {
  title: string;
  items: string[];
};

const InstructionsList = ({ title, items }: InstructionsListProps) => {
  return (
    <div className='flex flex-1 flex-col gap-3'>
      <h4 className='rounded-xl bg-primary-100 py-4 text-center text-2xl font-bold text-white'>{title}</h4>
      <p className='my-2 text-center text-xl text-neutral-gray-1'>{items.length} steps</p>
      <ol className='flex list-inside flex-col gap-3'>
        {items.map((item, index) => (
          <li className='rounded-lg bg-neutral-gray-4 p-4 text-md' key={`instruction-${index}`}>
            <p className='font-bold'>Step {index + 1}</p>
            <p className='mt-1'>{item}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionsList;
