const tests = require('./test-code.js');
const { isPalindrome } = tests;

test('La funzione isPalindrome verifica se una stringa è un palindromo', () => {
  expect(isPalindrome('osso')).toBeTruthy();
  expect(isPalindrome('ciao')).toBeFalsy();
  expect(isPalindrome('osso ciao')).toBeFalsy();
  expect(isPalindrome('annA osso Anna')).toBeTruthy();
});
