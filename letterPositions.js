/* const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}; */

/* const assertArraysEqual = function (actual, expected) {
  const arrayPass = "✅ Assertion passed. ";
  const arrayFail = "❌ Assertion failed. ";

  if (eqArrays(actual, expected)) {
    console.log(arrayPass + actual + " === " + expected);
  } else {
    console.log(arrayFail + actual + " !== " + expected);
  }
}; */

const letterPositions = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (!results[letter]) {
      results[letter] = [];
    }
  }
  return results;
};

console.log(letterPositions("hello"));