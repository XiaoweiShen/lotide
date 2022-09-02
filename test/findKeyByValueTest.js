const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
 describe("#findKeyByValue", () => {
   it("returns 'drama' once provide 'The Wire' for the given object", () => {
     assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
   });
   it("returns undefined once provide not exist data for the given object", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
 });