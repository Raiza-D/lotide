// assertEqual function to compare Boolean values true/false:
const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertion Passed: ";
  const fail = "🛑🛑🛑 Assertion Failed: ";
  if (actual === expected) {
    console.log(`${pass}` + actual + " === " + expected);
  } else {
    console.log(`${fail}` + actual + " !== " + expected);
  }
};

// eqArrays function to compare TWO arrays:
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

// Return true if both objects have the same keys with identical values.
const eqObjects = function(object1, object2) {
  objOneKeyLength = Object.keys(object1);
  objTwoKeyLength = Object.keys(object2);
  
  if (objOneKeyLength.length !== objTwoKeyLength.length) {
    return false;
  }
  for (const key of objOneKeyLength) {
      if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


/*
My questions:
How does it know to look at the same key within object2? Line comparing
the key values of object1 and object2? Since we're looping through the ARRAY ELEMENTS of objOneKeyLength.

I don't understand the CORRECT ANSWER IN COMPASS. Ask mentor.
*/

/*
// Tests to make sure output for eqObjects correct, using primitive values:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // false

// Assertion tests for primitive values:
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abc, ba), false); */

/*
// Tests for eqObjects output, using array values:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // false

// Assertion tests for array values:
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false); */


// My earlier solution
// It compares key first, then values second.
 /*objOneKeyLength = Object.keys(object1);
  objTwoKeyLength = Object.keys(object2);

  if (objOneKeyLength.length === objTwoKeyLength.length) {

    }
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
  return false; */

  /*
  const eqObjects = function(object1, object2) {
  objOneKeyLength = Object.keys(object1);
  objTwoKeyLength = Object.keys(object2);

// Alternative way of writing the code logic.
// Less lines of code. No nested for's and if's.
  if (objOneKeyLength.length !== objTwoKeyLength.length) {
    return false;
    }
    for (const key of objOneKeyLength) {
      if (object1[key].isArray && object2[key].isArray) {
       eqArrays(object1[key], object2[key]);
        if (object1[key] !== object2[key]) { //How does it know to look at at the same key within object2?
        // Since we're looping throught the ARRAY ELEMENTS of objOneKeyLength?
        return false;
      }
    }
  }
  return true;
  };
  */

  /*
  if (object1[key].isArray && object2[key].isArray) {
    eqArrays(object1[key], object2[key]);
  }
  */