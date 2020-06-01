// let maxTries = 5;
let numberOfGuesses = 0;

const incorrectGuess = () => {
  numberOfGuesses++;
  return numberOfGuesses;
};

module.exports = incorrectGuess;
