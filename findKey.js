/*eslint linebreak-style: ["error", "windows"]*/
// Implement findKey

const findKey = (obj,cb)=>{
  for (let item in obj) {
    if (cb(obj[item]))
      return (item);
  }
};

module.exports = findKey;


