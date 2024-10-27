const calcutator = require("../models/calculator.js");

test("somar 4 + 4 deveria ser 8", () => {
  const results = calcutator.sum(4, 4);
  expect(results).toBe(8);
});
