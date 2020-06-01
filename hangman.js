// Alle constanten die nodig zijn

const inputValue = document.querySelector(".inputField");

var guessLetter = inputValue.value;

const guessButton = document.querySelector(".guess");

const GuessedLettersList = document.querySelector(".guessed_letters");

const listWords = [
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

var randomWord = listWords[Math.floor(Math.random() * listWords.length)];

// 1 Start the game

const startGame = () => {
  // Get random word
  randomWord;
  // create empty array
  let answerArray = [];
  for (let i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
  }
  document.querySelector(".the_word").innerHTML = answerArray.join(" ");
};

startGame();

// 2 Playing the game

// While word has not been guessed
//
const checkLetter = (guessLetter, word) => {
  if (word.includes(guessLetter)) {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === input1) {
        answerArray[j] = input1;
      }
    }
  } else {
    GuessedLetterList(input1);
  }
};

// const theWord = function (word, input1) {
//   let display = word.map(function (letter) {
//     if (inputLetterWords.includes(letter)) {
//       return letter;
//     } else {
//       return '_';
//     }
//   });
//   document.querySelector('.the_word').innerHTML = display.join(' ');
// };

const GuessedLetters = [];

const GuessedLetterList = (letter) => {
  if (!GuessedLetters.includes(letter)) {
    GuessedLetters.push(letter);
  }
};

GuessedLettersList.innerHTML = GuessedLetters;

guessButton.addEventListener("click", () => {
  const inputText = inputValue.value;
  console.log(inputText);
  inputValue.value = "";

  // input1.value = '';
});
