test('La funzione createSlug restituisce una stringa in lowercase.', () => {
  expect(toLowerCase('TESTO MINUSCOLO')).toBe('testo minuscolo');
});
