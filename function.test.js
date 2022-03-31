import {stringLength, reverseString, Calculator, capitalize} from './function.js';

describe('Task 1 - string length: ', () => {
    test("expects stringLength('Hi') to be 2.", () => {
      expect(stringLength('Hi')).toBe(2);
    });
  
    test("expects error message from ''.", () => {
      expect(stringLength('')).toBe('String must contain 1-10 characters.');
    });
  
    test("expects error message from 'hello World!'", () => {
      expect(stringLength('hello World!')).toBe('String must contain 1-10 characters.');
    });
  });
  
  describe('Task 2 - reverse string: ', () => {
    test("expects reverseString('hello') to be 'olleh'.", () => {
      expect(reverseString('hello')).toBe('olleh');
    });
  
    test("expects reverseString('') to be ''.", () => {
      expect(reverseString('')).toBe('');
    });
  });
  
  describe('Task 3 - adition tests:', () => {
    test("1 + 1 = 2", () => {
      expect(Calculator.add(1, 1)).toEqual(2);
    });
  
    test("-11 + 1 = -10", () => {
      expect(Calculator.add(-11, 1)).toEqual(-10);
    });
  
    test("-11 + -1 = -12", () => {
      expect(Calculator.add(-11, -1)).toEqual(-12);
    });
  });
  
  describe('Task 3 - subtraction tests:', () => {
    test("1 - 1 = 0", () => {
      expect(Calculator.subtract(1, 1)).toEqual(0);
    });
  
    test("-11 - 1 = -12", () => {
      expect(Calculator.subtract(-11, 1)).toEqual(-12);
    });
  
    test("-13 - (-3) = -10", () => {
      expect(Calculator.subtract(-13, -3)).toEqual(-10);
    });
  });
  
  describe('Task 3 - multiplication tests:', () => {
    test("3 * 2 = 6", () => {
      expect(Calculator.multiply(3, 2)).toEqual(6);
    });
  
    test("-3 * 2 = -6", () => {
      expect(Calculator.multiply(-3, 2)).toEqual(-6);
    });
  
    test("-3 * -2 = 6", () => {
      expect(Calculator.multiply(-3, -2)).toEqual(6);
    });
  });
  
  describe('Task 3 - division tests:', () => {
    test("4 / 2 = 2", () => {
      expect(Calculator.divide(4, 2)).toEqual(2);
    });
  
    test("-4 / 2 = 2", () => {
      expect(Calculator.divide(-4, 2)).toEqual(-2);
    });
  
    test("2 / (-4) = -0.5", () => {
      expect(Calculator.divide(2, -4)).toEqual(-0.5);
    });
  });
  
  describe('Task 4 - capitalize first letter:', () => {
    test("'' --> ''.", () => {
      expect(capitalize('')).toBe('');
    });
  
    test("'hi' --> 'Hi'.", () => {
      expect(capitalize('hi')).toBe('Hi');
    });
  
    test("'hello world!' --> 'Hello world!'.", () => {
      expect(capitalize('hello world!')).toBe('Hello world!');
    });
  });
