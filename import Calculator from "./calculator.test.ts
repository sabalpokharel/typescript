import Calculator from "./calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should add two numbers correctly", () => {
    expect(calculator.add(3, 7)).toBe(10);
  });

  it("should subtract two numbers correctly", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  it("should multiply two numbers correctly", () => {
    expect(calculator.multiply(5, 6)).toBe(30);
  });

  it("should divide two numbers correctly", () => {
    expect(calculator.divide(20, 5)).toBe(4);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(10, 0)).toThrowError("Division by zero is not allowed.");
  });
});
