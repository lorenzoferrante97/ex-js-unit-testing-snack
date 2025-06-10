const getInitials = (fullName) => {
  const names = fullName.split(' ');
  return names.reduce((acc, name) => acc + name[0].toUpperCase(), '');
};

const toLowerCase = (text) => {
  return text.toLowerCase();
};

module.exports = {
  getInitials,
  toLowerCase,
};
