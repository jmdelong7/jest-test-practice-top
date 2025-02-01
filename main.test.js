import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './main';

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

test('string shifted - caesarCipher', () => {
  expect(caesarCipher('asdfasdf', 1)).toBe('btegbteg');
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyze array - analyzeArray', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
