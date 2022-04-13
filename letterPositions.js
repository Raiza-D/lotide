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

const assertArraysEqual = function(actual, expected) {
  const arrayPass = "✅ Assertion passed. ";
  const arrayFail = "❌ Assertion failed. ";

  if (eqArrays(actual, expected)) {
    console.log(arrayPass + actual + " === " + expected);
  } else {
    console.log(arrayFail + actual + " !== " + expected);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") { // Check if the character is a space. Ignore spaces!!
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  return results;
};

// Test-codes to make sure output for letterPositions correct:
// console.log(letterPositions("hello"));
// console.log(letterPositions("Vacation time")); // Has a space

// Codes to test assertions:
// assertArraysEqual(letterPositions("hello")["e"], [1]); // Dot notation: ...("hello").e, ...
// assertArraysEqual(letterPositions("Vacation time")["a"], [1, 3]);
// Reminder: [1, 3] expected values deals with INDICES where letter appears.

module.exports = letterPositions;
