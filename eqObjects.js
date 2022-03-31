const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertion Passed: ";
  const fail = "🛑🛑🛑 Assertion Failed: ";
  if (actual === expected) {
    console.log(`${pass}` + actual + " === " + expected);
  } else {
    console.log(`${fail}` + actual + " !== " + expected);
  }
};

// Return true if both objects have the same keys with identical values.
const eqObjects = function(object1, object2) {
  objOneKeyLength = Object.keys(object1);
  objTwoKeyLength = Object.keys(object2);

  if (objOneKeyLength.length === objTwoKeyLength.length) {
    for (const key in object1) {
      for (const key2 in object2) {
        if (key === key2) {
          if (object1[key] === object2[key]) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abc, ba), false);
