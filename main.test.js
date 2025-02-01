import { capitalize, reverseString, calculator } from './main';

test('first character capitalized', () => {
  expect(capitalize('abc')).toBe('Abc');
  expect(capitalize('hello world')).toBe('Hello world');
  expect(capitalize('a')).toBe('A');
});

test('string reversed', () => {
  expect(reverseString('abc')).toBe('cba');
  expect(reverseString('hello world')).toBe('dlrow olleh');
  expect(reverseString('a')).toBe('a');
  expect(reverseString('abcd')).toBe('dcba');
});

test('add, subtract, multiply, divide', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.multiply(3, 4)).toBe(12);
  expect(calculator.divide(3, 4)).toBe(0.75);
});
