import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        handleSubmitGuess(tentativeGuess);

        setTentativeGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        required={true}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Zа-яА-Я]{5}"
        title="The word should consist of 5 letters"
        id="guess-input"
        type="text"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        value={tentativeGuess}
        disabled={gameStatus !== "running"}
      ></input>
    </form>
  );
}

export default GuessInput;
