// verliezen van de game wanneer er geen pogingen meer over zijn

const functie = require("./loseGame.js");

test("Should end game after no more tries", () => {
  expect(functie(7)).toBe(true);
});
