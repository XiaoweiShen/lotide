
/*eslint linebreak-style: ["error", "windows"]*/

const middle = function(array) {
  let res = [];
  if (array.length % 2 === 0)
    res.push(array[array.length / 2 - 1],array[array.length / 2]);
  else
    res.push(array[(array.length - 1) / 2]);
  return (res);
};

module.exports = middle;