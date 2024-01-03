import React from "react";

const keyboardLetters = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      if (statusObj[letter] === "misplaced" && status === "correct") {
        statusObj[letter] = "correct";
        return;
      } else if (statusObj[letter] === "correct" && status === "misplaced") {
        statusObj[letter] = "misplaced";
        return;
      }

      if (statusObj[letter] === "misplaced" || statusObj[letter] === "correct")
        return;

      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  let statusByLetter = getStatusByLetter(validatedGuesses);
  return (
    <div className="keyboard">
      {keyboardLetters.map((row, index) => {
        return (
          <KeyboardRow row={row} key={index} statusByLetter={statusByLetter} />
        );
      })}
    </div>
  );
}

function KeyboardRow({ row, statusByLetter }) {
  return (
    <div className="keyboard__row">
      {row.map((letter, index) => {
        return (
          <KeyboardButton
            letter={letter}
            key={index}
            statusByLetter={statusByLetter}
          />
        );
      })}
    </div>
  );
}

function KeyboardButton({ letter, statusByLetter }) {
  return (
    <div className={`keyboard__button ${statusByLetter[letter] || ""}`}>
      {letter}
    </div>
  );
}

export default Keyboard;
