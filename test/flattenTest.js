const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
   it("returns a flat array for the given nested array", () => {
     assert.deepEqual(
      flatten([1, 2, [3, 4,[45,23,99,'kk',[999,333,4444,'xev']]], 5, [6]]),
      [1, 2, 3, 4, 45, 23, 99, 'kk', 999, 333, 4444, 'xev', 5, 6]
      );
   });
 });

