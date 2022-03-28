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

const middle = function(array) {
  let middleArr = [];

  if (array.length === 1 || array.length === 2) {
    return middleArr;
  }
  if (array.length % 2 === 0) {
    let y = array.length / 2;   // Contains the second middle element. Working with INDEX.
    let x = y - 1;  // Contains the first middle element, which is the one BEFORE y. Working with INDEX.
    middleArr.push(array[x]); // Pushing ELEMENT indexed at x
    middleArr.push(array[y]); // Pushing ELEMENT indexed at y
  } else {
    let b = (array.length - 1) / 2; // Result is the array's INDEX.
    middleArr.push(array[b]);  // Accessing array's ELEMENT then pushing to middleArr.
  }
  return middleArr;
};

// Test-cases:
console.log(middle([1, 2])); // Should return an empty array
console.log(middle([1, 2, 3])); // Should return the middle element of 2
console.log(middle([1, 2, 3, 4])); // Should return the two middle elements of 2 & 3

//Test-assertion:
assertArraysEqual(middle([1, 2, 3]), [2]);
