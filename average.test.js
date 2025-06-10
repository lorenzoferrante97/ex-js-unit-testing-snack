const average = (nums) => {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  return sum / nums.length;
};

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
  const numbers = [2, 4, 6, 8, 10];
  expect(average(numbers)).toBe(6);
});
