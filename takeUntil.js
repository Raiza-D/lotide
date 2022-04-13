// Compares two arrays by comparing its length then comparing each value
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Function to test if assertions regarding the two arrays are correct.
// Makes use of eqArrays
const assertArraysEqual = function(actual, expected) {
  const arrayPass = "✅ Assertion passed. ";
  const arrayFail = "❌ Assertion failed. ";

  if (eqArrays(actual, expected)) {
    console.log(arrayPass + actual + " === " + expected);
  } else {
    console.log(arrayFail + actual + " !== " + expected);
  }
};

/* takeUntil function with two arguments: an array & callback function.
takeUntil function will keep collecting items from a provided array until
callback provided returns a truthy value. */
const takeUntil = function(array, callback) {
  let resultsArr = [];  // Empty array to store each element in iteration that meets IF condition

  for (let item of array) {  // For..of loop to iterate over each element in given array
    if (callback(item)) {  // As long as item in current iteration and later
      // fed into callback func (which runs specified task) evaluates to true, then BREAK out of loop.
      break;
    }
    resultsArr.push(item); // Push all the items evaluated to true in the new array
  }
  return resultsArr; // Return new array with our results
};

module.exports = takeUntil;

// Test-scenario:
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0); // Store results from takeUntil into this variable
// console.log(results1);

// console.log("---");

// Test-scenario
// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, x => x === ",");
// console.log(results2);

// Testing our assertions
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
// resultsx contains array of results from running takeUntil func
