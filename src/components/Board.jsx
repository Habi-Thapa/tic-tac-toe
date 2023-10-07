import { useState } from 'react';
import Square from './square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className=" after:{table clear-both content-none}">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className=" after:{table clear-both content-none}">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className=" after:{table clear-both content-none}">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
};

export default Board;
