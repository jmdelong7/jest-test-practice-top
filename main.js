export function capitalize(str) {
  return str?.charAt(0).toUpperCase() + str?.slice(1) || '';
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
};
