const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true for ('apple','apple')", () => {
    assertEqual('apple','apple'); 
  });
  it("returns true for ('orange'==='apple',false)", () => {
    assertEqual('orange'==='apple',false); 
 });
});
