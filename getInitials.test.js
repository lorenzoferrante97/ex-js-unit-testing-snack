// snack 1

const tests = require('./test-code.js');
const { getInitials } = tests;

test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
  expect(getInitials('Lorenzo Ferrante')).toBe('LF');
  expect(getInitials('franco rossi')).toBe('FR');
});
