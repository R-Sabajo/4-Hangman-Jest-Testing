let input1 = document.querySelector('input').value;

let guessLetter = input1;
console.log(guessLetter);

const GuessButton = document.querySelector('.guess');

const GuessedLettersList = document.querySelector('.guessed_letters');

const wordList = [
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
];

const startGame = () => {
  let randomWord = wordList[Math.floor(Math.random() * wordList.length)];

  return randomWord;
};

const word = startGame();

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}
let remainingLetters = word.length;

document.querySelector('.the_word').innerHTML = answerArray.join(' ');

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

const GuessedLetterList = letter => {
  if (!GuessedLetters.includes(letter)) {
    GuessedLetters.push(letter);
  }
};

GuessedLettersList.innerHTML = GuessedLetters;

GuessButton.addEventListener('click', () => {
  checkLetter(guessLetter, word);

  // input1.value = '';
});
