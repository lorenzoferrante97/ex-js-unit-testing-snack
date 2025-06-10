const getInitials = (fullName) => {
  const names = fullName.split(' ');
  return names.reduce((acc, name) => acc + name[0].toUpperCase(), '');
};

const createSlug = (text) => {
  const slug = text.split(' ').join('-');
  return slug.toLowerCase();
};

const average = (nums) => {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  return sum / nums.length;
};

const isPalindrome = (text) => {
  const reverseText = text.split('').reverse().join('');
  return text === reverseText;
};

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
};
