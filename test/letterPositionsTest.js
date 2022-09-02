const {letterPositions} = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
   it("returns 'a' position for the given ('aanaazhe me jian dan ?')", () => {
     assert.deepEqual(letterPositions("aanaazhe me jian dan ?").a,[ 0, 1, 3, 4, 14, 18 ]);
   });
   it("returns 'n' position for the given ('aanaazhe me jian dan ?')", () => {
    assert.deepEqual(letterPositions("aanaazhe me jian dan ?").n,[ 2, 15, 19]);
  });
  it("returns 'e' position for the given ('aanaazhe me jian dan ?')", () => {
    assert.deepEqual(letterPositions("aanaazhe me jian dan ?").e,[ 7,10]);
  });
 });
