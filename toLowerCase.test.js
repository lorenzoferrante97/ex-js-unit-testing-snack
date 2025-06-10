const tests = require('./test-code.js');
const { createSlug } = tests;

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
  expect(createSlug('TESTO MINUSCOLO')).toBe('testo minuscolo');
  expect(createSlug('tEstOaCaSo3234')).toBe('testoacaso3234');
  expect(createSlug('sono già minuscolo')).toBe('sono già minuscolo');
});
