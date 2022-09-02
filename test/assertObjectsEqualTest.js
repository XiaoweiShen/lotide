const assertObjectsEqual = require('../assertObjectsEqual');

describe("#assertObjectsEqual", () => {
  it('returns true for ({ a: "1", b: "2" },{ b: "2", a: "1" })', () => {
    assertObjectsEqual({ a: "1", b: "2" },{ b: "2", a: "1" });
  });
  
});
