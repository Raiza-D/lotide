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

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        newArr.push(source[i]);
      }
    }
  }
  return newArr;
};

/* Test-cases to ensure without function works properly
Should output new array with element removed. */
// console.log(without([1, 2, 3], [1]));
// console.log(without([1, 2, 3, 4], [4]));

//Test-case using assertArraysEqual function:
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without([5, 6, 7], [5]), [5,6]);
// assertArraysEqual(without([5, 6, 7], [1]), [5, 6]); // Removing an element that is NOT in array.
// assertArraysEqual(without(["hiking", "camping", "dog"], ["dog"]), ["hiking", "camping"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;