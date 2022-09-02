/*eslint linebreak-style: ["error", "windows"]*/
// FUNCTION IMPLEMENTATION

const eqArrays = require('./eqArrays.js');

const eqObjects = function(object1, object2) {
  let flag;
  const recursionEq = (object1,object2)=>{
    flag = flag || false;
    if (Object.keys(object1).length !== Object.keys(object2).length)
      return (flag = false);
    for (let it in object1) {
      if (typeof(object1[it]) !== typeof(object2[it])) {
        return (flag = false);
      }
      if (typeof(object1[it]) === 'object') {
        if (Array.isArray(object1[it])) {
          if (eqArrays(object1[it],object2[it]))
            flag = true;
          else
            return (flag = false);
        } else {
          if (recursionEq(object1[it],object2[it]))
            flag = true;
          else
            return (flag = false);
        }
      } else {
        if (object1[it] === object2[it])
          flag = true;
        else
          return (flag = false);
      }
    }
    return flag;
  };
  return (flag = recursionEq(object1,object2));
};

module.exports = eqObjects;

