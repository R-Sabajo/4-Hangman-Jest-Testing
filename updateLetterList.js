const GuessedLetterList = () => {
  const GuessedLetters = ['x', 'y', 'z'];
  const NewLetter = 'b';
  if (!GuessedLetters.includes(NewLetter)) {
    GuessedLetters.push(NewLetter);
    return GuessedLetters;
  } else {
    return false;
  }
};

module.exports = GuessedLetterList;
