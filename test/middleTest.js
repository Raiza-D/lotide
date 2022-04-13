const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns an empty array [] for an array with only two elements [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
});

// Test-cases for middle function to ensure working as it should:
// console.log(middle([1, 2])); // Should return an empty array
// console.log(middle([1, 2, 3])); // Should return the middle element of 2
// console.log(middle([1, 2, 3, 4])); // Should return the two middle elements of 2 & 3

//Testing assertions for middle function:
// assertArraysEqual(middle([1, 2, 3]), [2]);
