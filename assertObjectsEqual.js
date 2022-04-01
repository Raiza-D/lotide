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

/* Questions:
1. Why when console logging, I get "undefined true/false".
2. Why when inserting an object containing a key with an array, getting an error?
*/
