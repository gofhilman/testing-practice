import testingPractice from "./testing-practice";

const testing = testingPractice();

test("factory function is available", () => {
  expect(testing).toBeDefined();
});

describe("capitalize function", () => {
  test("capitalize first letter", () => {
    expect(testing.capitalize("ciau bella!")).toBe("Ciau bella!");
  });
  test("no need to capitalize if it's capital", () => {
    expect(testing.capitalize("Hilman")).toBe("Hilman");
  });
});
