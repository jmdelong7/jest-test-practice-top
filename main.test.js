import { capitalize, reverseString } from './main';

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
