// let maxTries = 5;
let numberOfGuesses = 0;

const incorrectGuess = () => {
  numberOfGuesses++;
  numberOfGuesses++;
  numberOfGuesses++;
  return numberOfGuesses;
};

module.exports = incorrectGuess;
