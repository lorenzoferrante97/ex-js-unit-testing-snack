const tests = require('./test-code.js');
const { findPostById } = tests;

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
  const posts = [
    { id: 1, title: 'Ciao a tutti', slug: 'ciao-a-tutti' },
    { id: 2, title: 'Test Prova', slug: 'test-prova' },
    { id: 3, title: 'Post di Esempio 1', slug: 'post-di-esempio-1' },
  ];

  expect(findPostById(posts, 2)).toEqual({ id: 2, title: 'Test Prova', slug: 'test-prova' });
  expect(findPostById(posts, 3)).toEqual({ id: 3, title: 'Post di Esempio 1', slug: 'post-di-esempio-1' });
});
