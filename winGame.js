const winGame = () => {
  const correctLetters = ['h', 'o', 'n', 'd'];
  const word = 'hond';

  if (
    correctLetters.every(letter => word.includes(letter)) &&
    word.length == correctLetters.length
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = winGame;
