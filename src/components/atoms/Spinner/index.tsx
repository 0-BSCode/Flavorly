import React from "react";

const Spinner = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary-100'></div>
    </div>
  );
};

export default Spinner;
