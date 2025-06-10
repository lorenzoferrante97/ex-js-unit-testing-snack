const tests = require('./test-code.js');
const { createSlug } = tests;

let initialText = '';

beforeEach(() => {
  initialText = 'Testo Slug per Test';
});

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
  expect(createSlug('TESTO MINUSCOLO')).toBe('testo-minuscolo');
  expect(createSlug('sono già minuscolo')).toBe('sono-già-minuscolo');
});

test('La funzione createSlug sostituisce gli spazi con -', () => {
  expect(createSlug(initialText)).toBe('testo-slug-per-test');
});

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido', () => {
  expect(createSlug('')).toThrow('La stringa non può essere vuota');
});
