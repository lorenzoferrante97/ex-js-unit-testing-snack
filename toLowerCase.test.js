const tests = require('./test-code.js');
const { toLowerCase } = tests;

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
  expect(toLowerCase('TESTO MINUSCOLO')).toBe('testo minuscolo');
  expect(toLowerCase('tEstOaCaSo3234')).toBe('testoacaso3234');
  expect(toLowerCase('sono già minuscolo')).toBe('sono già minuscolo');
});
