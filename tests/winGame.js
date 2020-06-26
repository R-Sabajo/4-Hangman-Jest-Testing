const winGame = () => {
  const answerArray = ["h", "o", "n", "d"];
  const randomWord = "hond";

  if (
    answerArray.every((letter) => randomWord.includes(letter)) &&
    randomWord.length == answerArray.length
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = winGame;
