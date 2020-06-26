const checkLetter = require('./checkLetter.js');

test('checken of een letter voorkomt in het woord', () => {
  const word = 'appel';
  const letter = 'p';
  expect(checkLetter(letter, word)).toBe(true);
});
