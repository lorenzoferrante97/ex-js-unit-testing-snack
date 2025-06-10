const getInitials = (fullName) => {
  const names = fullName.split(' ');
  return names.reduce((acc, name) => acc + name[0].toUpperCase(), '');
};

module.exports = {
  getInitials,
};
