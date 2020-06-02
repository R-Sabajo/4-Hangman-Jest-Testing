// Alle constanten die nodig zijn

const inputValue = document.querySelector('.inputField');

const guessButton = document.querySelector('.guess');

const restartButton = document.querySelector('.restart');

const guessedLettersList = document.querySelector('.guessed_letters');

let guessLetter = inputValue.value;

const listWords = [
  'vis',
  'toeter',
  'developer',
  'telefoon',
  'moeder',
  'snoer',
  'geeuw',
  'patatje',
  'hamer',
  'zalf',
  'playstation',
  'quokka',
  'javascript',
  'json',
];

const wordRandomizer = list => {
  let index = [Math.floor(Math.random() * list.length)];
  return list[index];
};

// 1 Start the game

const startGame = () => {
  randomWord = wordRandomizer(listWords);
  console.log(randomWord);
  guessedLettersArray = [];
  answerArray = [];
  numberOfGuesses = 0;
  maxTries = 5;
  document.querySelector('.win').style.display = 'none';
  document.querySelector('.lose').style.display = 'none';
  document.querySelector('.lives span').innerHTML = maxTries - numberOfGuesses;
  guessedLettersList.innerHTML = ' ';
  document.querySelector('.the_word').innerHTML = ' ';
  inputValue.maxLength = 1;
  for (let i = 0; i < randomWord.length; i++) {
    answerArray[i] = '_';
  }
  document.querySelector('.the_word').innerHTML = answerArray.join(' ');
};

startGame();

// 2 Playing the game

const checkLetter = (letter, randomWord) => {
  if (randomWord.includes(letter)) {
    for (let j = 0; j < randomWord.length; j++) {
      if (randomWord[j] === letter) {
        answerArray[j] = letter;
        document.querySelector('.the_word').innerHTML = answerArray.join(' ');
        winGame(answerArray, letter);
      }
    }
  } else {
    guessedLetterList(letter);
    numberOfGuesses++;
    document.querySelector('.lives span').innerHTML =
      maxTries - numberOfGuesses;
    loseGame(numberOfGuesses);
  }
};

const loseGame = x => {
  let incorrectGuess = x;
  if (incorrectGuess === maxTries) {
    inputValue.maxLength = 0;
    document.querySelector('.lose').style.display = 'block';
  }
};

const winGame = () => {
  if (
    answerArray.every(letter => randomWord.includes(letter)) &&
    randomWord.length == answerArray.length
  ) {
    inputValue.maxLength = 0;
    document.querySelector('.win').style.display = 'block';
  }
};
<<<<<<< HEAD
/* 
const theWordToGuess = function (letter) {
  let display = word.map(function (letter) {
    if (randomWord.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
}; */

let guessedLetterList = (letter) => {
=======

let guessedLetterList = letter => {
>>>>>>> b57c65d68863ba264f88b06ff818bdee3bc66199
  if (!guessedLettersArray.includes(letter)) {
    guessedLettersArray.push(letter);
    guessedLettersList.innerHTML = guessedLettersArray.join(' ');
  }
};

guessButton.addEventListener('click', () => {
  const inputText = inputValue.value;
  checkLetter(inputText, randomWord);
  inputValue.value = '';
});

restartButton.addEventListener('click', () => {
  startGame();
});
