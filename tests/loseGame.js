const loseGame = (x) => {
  let maxTries = 5;
  let incorrectGuess = x;
  if (incorrectGuess === maxTries) {
    return true;
  } else {
    return false;
  }
};

module.exports = loseGame;
