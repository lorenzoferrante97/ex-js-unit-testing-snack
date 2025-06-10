const getInitials = (fullName) => {
  const names = fullName.split(' ');
  return names.reduce((acc, name) => acc + name[0].toUpperCase(), '');
};

const createSlug = (text) => {
  return text.toLowerCase();
};

const average = (nums) => {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  return sum / nums.length;
};

module.exports = {
  getInitials,
  createSlug,
  average,
};
