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
    if (sentence[i] !== " ") { // Check if the element is a string. Ignore strings!!
      if (!results[sentence[i]]) {
      results[sentence[i]] = [];
     }
     results[sentence[i]].push(i);
    }
  }
  return results;
};

// Test-codes to make sure output for letterPositions correct:
console.log(letterPositions("hello"));
console.log(letterPositions("Vacation time"));

// Codes to test assertions:
assertArraysEqual(letterPositions("hello")["e"], [1]); // Dot notation: ...("hello").e, ...
assertArraysEqual(letterPositions("Vacation time")["a"], [1, 3]); // Dealing with INDICES where letter appears.
assertArraysEqual(letterPositions("Vacation time").v, [undefined]);
// Why TypeError? Answer: No v being passed in, therefore, does not exist in results object.
// There is NO array being passed in into arr1 first argument in eqArrays.
// Cannot compare the length of 'undefined' value.