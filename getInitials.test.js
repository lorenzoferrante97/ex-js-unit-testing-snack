// snack 1

const getInitials = (fullName) => {
  const names = fullName.split(' ');
  return names.reduce((acc, name) => acc + name[0].toUpperCase(), '');
};

test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
  expect(getInitials('Lorenzo Ferrante')).toBe('LF');
  expect(getInitials('franco rossi')).toBe('FR');
});
