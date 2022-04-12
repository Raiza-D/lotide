const assertEqual = require("../assertEqual");

const eqArrays = require("../eqArrays");

// TEST CODE for eqArrays to make sure function outputting correctly:
console.log(eqArrays([1, 2, 3], [1, 2, 3]));

// TEST CODE for eqArrays making use of assertEqual to test our assertions.
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, "2", 3], ["1", 2, "3", 4]), false);
assertEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", "3", "4"]), true);