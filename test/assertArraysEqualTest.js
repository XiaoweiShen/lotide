const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true for ([1,2,3,4,5],[1,2,3,4,5])", () => {
    assertArraysEqual([1,2,3,4,5],[1,2,3,4,5]); 
  });
});


