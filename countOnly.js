/*eslint linebreak-style: ["error", "windows"]*/

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (const key in itemsToCount) {
    let counts = 0;
    if (itemsToCount[key]) {
      const res = allItems.filter(word => word === key);
      counts = res.length;
    }
    if (counts > 0)
      result[key] = counts;
  }
  return (result);
};

module.exports = countOnly;
