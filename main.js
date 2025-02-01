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

export function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const strSplit = str.split('');

  const mapped = strSplit.map((char) => {
    if (!alphabet.includes(char.toLowerCase())) return char;
    const charIdx = alphabet.indexOf(char.toLowerCase());
    const newLetter = alphabet[(charIdx + shift) % alphabet.length];
    return char === char.toLowerCase() ? newLetter : newLetter.toUpperCase();
  });

  return mapped.join('');
}

export function analyzeArray(arr) {
  let sum = 0,
    min = Infinity,
    max = -Infinity,
    length = arr.length;

  arr.forEach((num) => {
    sum += num;
    min = Math.min(min, num);
    max = Math.max(max, num);
  });

  return { average: sum / length, min, max, length };
}
