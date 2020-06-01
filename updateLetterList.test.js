const GuessedLetterList = require('./updateLetterList.js');

test('updaten van de lijst met letters die al geraden zijn', () => {
  const letter = 'b';
  expect(GuessedLetterList()).toContain(letter);
});
