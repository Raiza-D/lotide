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

  if (objOneKeyLength.length !== objTwoKeyLength.length) {
    return false;
  }

  for (const key in object1) {
    if (object1[key] === object2[key]) {
      return true;
    }
  }
  return false;

  /*arrKeyObj1 = Object.keys(object1);
  arrKeyObj2 = Object.keys(object2);

  if (arrKeyObj1.length !== arrKeyObj2) {
    return false;
  }
  for (const key of arrKeyObj1) {
    if (object1[key] === object2[key]) {
      return true
    }
  }
  return false; */
};

/*
Use Object.keys to grab keys contained in each object.
If both of objects DO NOT have the same number of keys (length), return false. Otherwise proceed.

LOOP through each key of ONE object so you can compare it w/ the other object.

Take the first key in one object and compare it with the FIRST key in the OTHER object (object2).
If they're NOT the same, return false. Otherwise, proceed.
Take the VALUE of the first object's first key and compare it with the first value of the
OTHER object's first key.
If they're NOT the same, return false. Otherwise, proceed.

Return true if everything is matching.
*/

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // false

assertEqual(eqObjects(ab, abc), false);