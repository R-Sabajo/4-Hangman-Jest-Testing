// Alle constanten die nodig zijn

const inputValue = document.querySelector(".inputField");

let guessLetter = inputValue.value;

const guessButton = document.querySelector(".guess");

const guessedLettersList = document.querySelector(".guessed_letters");

let answerArray = [];

let numberOfGuesses = 0;

let maxTries = 5;

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

let randomWord = listWords[Math.floor(Math.random() * listWords.length)];
console.log(randomWord);

// 1 Start the game

const startGame = () => {
  // Get random word
  randomWord;
  // create correct empty array
  for (let i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
  }
  document.querySelector(".the_word").innerHTML = answerArray.join(" ");
};

startGame();

// 2 Playing the game

// While word has not been guessed
//
const checkLetter = (letter, randomWord) => {
  if (randomWord.includes(letter)) {
    for (let j = 0; j < randomWord.length; j++) {
      if (randomWord[j] === letter) {
        // console.log(randomWord[j]);
        answerArray[j] = letter;
        document.querySelector(".the_word").innerHTML = answerArray.join(" ");
        // console.log(answerArray);
        winGame(answerArray, letter);
      }
    }
  } else {
    guessedLetterList(letter);
    numberOfGuesses++;

    document.querySelector(".lives span").innerHTML =
      maxTries - numberOfGuesses;
    loseGame(numberOfGuesses);
  }
};

const loseGame = (x) => {
  let incorrectGuess = x;
  if (incorrectGuess === maxTries) {
    return alert("You lose");
  }
};

const winGame = (word, letter) => {
  if (
    answerArray.every((letter) => randomWord.includes(letter)) &&
    randomWord.length == answerArray.length
  ) {
    alert("you win!");
  }
};

const theWordToGuess = function (letter) {
  let display = word.map(function (letter) {
    if (randomWord.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

const guessedLetters = [];

const guessedLetterList = (letter) => {
  if (!guessedLetters.includes(letter)) {
    guessedLetters.push(letter);
    guessedLettersList.innerHTML = guessedLetters.join(" ");
  }
};

guessButton.addEventListener("click", () => {
  const inputText = inputValue.value;
  console.log(inputText);
  checkLetter(inputText, randomWord);
  inputValue.value = "";
});
