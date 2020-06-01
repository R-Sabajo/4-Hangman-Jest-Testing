// starten van de game d.m.v. kiezen van woord door functie

const functie = require("./startGame.js");

test("Should return a random word from list to start the game", () => {
  expect(functie.startGame).not.toBe("");
});
