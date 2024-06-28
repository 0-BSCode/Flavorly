// TODO: Make abstract (then adopt it for ingredients and procedures)
type ListProps = {
  title: string;
  items: string[];
  isOrdered: boolean;
};

const List = ({ title, items, isOrdered }: ListProps) => {
  return (
    <div className='flex flex-1 flex-col gap-3'>
      <h4 className='rounded-xl bg-primary-100 py-4 text-center text-2xl font-bold text-white'>{title}</h4>
      <p className='my-2 text-center text-xl text-neutral-gray-1'>{items.length} items</p>
      <ol className='flex list-inside flex-col gap-3'>
        {items.map((item, index) => (
          <li
            className='rounded-lg bg-neutral-gray-4 p-4 text-md'
            style={{
              listStyleType: isOrdered ? "decimal" : "none",
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
