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

const flatten = function(oneLevelArr) {
  let flatterArr = [];

  for (let i = 0; i < oneLevelArr.length; i++) {
    if (Array.isArray(oneLevelArr[i])) {
       for (let j = 0; j < oneLevelArr[i].length; j++) {
         flatterArr.push(oneLevelArr[i][j]);
       }
    } else {
      flatterArr.push(oneLevelArr[i]);
    }
  }
  return flatterArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [-9, 10], 5, [-7]]), [1, 2, -9, 10, 5, -7]);
