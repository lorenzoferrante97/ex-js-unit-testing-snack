const tests = require('./test-code.js');
const { average } = tests;

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
  const numbers = [2, 4, 6, 8, 10];
  expect(average(numbers)).toBe(6);
});
