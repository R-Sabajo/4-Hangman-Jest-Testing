const checkLetter = (letter, word) => {
  if (word.includes(letter)) {
    return true;
  } else {
    return false;
  }
};

module.exports = checkLetter;
