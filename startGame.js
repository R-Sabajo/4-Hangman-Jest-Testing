const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
  "patatje",
  "hamer",
  "zalf",
];

const startGame = () => {
  let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  return randomWord;
};

module.exports = startGame;
