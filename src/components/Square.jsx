import { useState } from 'react';

const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        className="bg-white border border-gray-900 border-solid text-[24px] font-bold leading-[34px] h-[34px] p-0 text-center w-[34px] mr-[-1px] mt-[-1px] float-left"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
