export interface BadgeProps {
  text: string;
  color: string;
  icon: JSX.Element;
}

// TODO: Adjust text color based on brightness of bg (make modules for specific badge)
const Badge = ({ text, color, icon }: BadgeProps) => {
  return (
    <div className='flex w-fit items-center gap-2 rounded-md px-2 py-1' style={{ backgroundColor: color }}>
      {icon}
      <p className='text-black lg:text-xl'>{text}</p>
    </div>
  );
};

export default Badge;
