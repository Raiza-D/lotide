const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns an empty array [] for an array with only two elements [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns the middle element of [ 2 ] for an array with an odd number of elements [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns the two middle elements [ 2, 3 ] for an array with an even number of elements [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});

