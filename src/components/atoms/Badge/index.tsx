export interface BadgeProps {
  text: string;
  color: string;
  icon: JSX.Element;
}

// TODO: Adjust text color based on brightness of bg (make modules for specific badge)
const Badge = ({ text, color, icon }: BadgeProps) => {
  return (
    <div className='flex w-fit gap-2 items-center px-2 rounded-md' style={{ backgroundColor: color }}>
      {icon}
      <p className='text-black'>{text}</p>
    </div>
  );
};

export default Badge;
