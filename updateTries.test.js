// updaten van het aantal pogingen van de gebruiker

const functie = require("./updateTries.js");

test("Should update tries on wrong guess", () => {
  expect(functie()).toBeLessThan(6);
});
