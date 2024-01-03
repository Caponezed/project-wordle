import React from "react";
import { range } from "../../utils";

function Cell({ num, letter, status }) {
  const className = status ? `cell ${status}` : `cell`;
  return (
    <span key={num} className={className}>
      {letter}
    </span>
  );
}

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <Cell
            key={num}
            letter={value ? value[num].letter : undefined}
            status={value ? value[num].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default Guess;
