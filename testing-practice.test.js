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

test("reverse string", () => {
  expect(testing.reverseString("Ciau bella, Hilman!"))
    .toBe("!namliH ,alleb uaiC");
});

describe("calculator object methods", () => {
  test("add", () => {
    expect(testing.calculator.add(-1, 10)).toBe(9);
  });
  test("subtract", () => {
    expect(testing.calculator.subtract(-1, -10)).toBe(9);
  });
  test("divide", () => {
    expect(testing.calculator.divide(-10, 2)).toBe(-5);
  });
  test("multiply", () => {
    expect(testing.calculator.multiply(-2, 10)).toBe(-20);
  });    
});

describe("caesarCipher function", () => {
  test("vanilla", () => {
    expect(testing.caesarCipher("xyz", 3)).toBe("abc");
  });
  test("case preservation", () => {
    expect(testing.caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("punctuation preservation", () => {
    expect(testing.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("outside range shift", () => {
    expect(testing.caesarCipher("a", -3)).toBe("x");
  })
});

test("analyzeArray function", () => {
  expect(testing.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});