/* Assignment instructions doesn't mention NOT including this eqArrays function.
If this function not included, any assertion tests calling on assertObjectsEQual will
result in a Reference Error. eqObjects reference eqArrays that's why.*/

// Compares two arrays by comparing its length then comparing each value
const eqArrays = function (arr1, arr2) {
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

// eqObjects compares two objects, their keys, and values. Return true if identical.
const eqObjects = function (object1, object2) {
  let objOneKeys = Object.keys(object1);
  let objTwoKeys = Object.keys(object2);

  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  for (const key of objOneKeys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

/*Function that will take in two objects and log an appropriate message.
Objects will be compared if they are identical (making use of eqObjects function) and return true/false.
That actual value will be compared with our expected value. Then appropriate message will be printed.*/
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  const objectPass = "✅✅✅ Assertion passed for objects: ";
  const objectFail = "🛑🛑🛑 Assertion failed for objects: ";

  if (eqObjects(actual, expected)) {
    console.log(
      objectPass + `${inspect(actual)}` + " === " + `${inspect(expected)}`
    );
  } else {
    console.log(
      objectFail + `${inspect(actual)}` + " !== " + `${inspect(expected)}`
    );
  }
};

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }, true);
assertObjectsEqual({ a: "1", b: [1, 2, "3"]}, { b: [1, 2, "3"], a: "1" }, true);
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 3}, false);

/* Questions and Answers from mentor session:
1. Why is it when using console.log in front of assertObjectsEqual,
I get "undefined" below assertion results in Terminal output?
Undefined because assertObjectsEqual does not have a return value specified.
Compass cautions this. "..we cannot simply compare their return value to an expected value."
Remove the console.log. To try this out, add return value within assertObjectsEqual, before
the closing curly brace & semi-colon. Then declare a variable that will store that returned value.
After, console.log that variable.

2. Why when inserting an object containing a key with an array, getting a Reference Error?
Because the assertObjectsEqual function is calling on eqArrays. So, copy and pasted
the eqArrays function into this file.*/
