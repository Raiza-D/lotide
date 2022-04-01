// assertEqual function to compare Boolean values true/false.
// Compares actual result against what we expect the result to be.
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

// eqObjects compares two objects, their keys, and values. Return true if identical.
const eqObjects = function(object1, object2) {
  let objOneKeys = Object.keys(object1); // Variable to store object's KEYS. Doesn't keys' values.
  let objTwoKeys = Object.keys(object2);
  
  if (objOneKeys.length !== objTwoKeys.length) { // Check number of keys. If not same, don't continue.
    return false;
  }
  for (const key of objOneKeys) {  // Loops through each item in objOneKeys array
    // Takes key referenced in iteration, references them in both given objects,
    // then checks if they're an array in both objects passed in. If yes, proceed.
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // Compares each element within both arrays.
      // If NOT the same, return false and codes below won't run.
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    // If the first IF statement within loop false, then run this ELSE IF.
    } else if (object1[key] !== object2[key]) {
      return false;
      }
    }
  // If two main IF statements above are met, then return true.
  return true;
};

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


// Tests for eqObjects output, using array values:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // false

// Assertion tests for array values:
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);


/* My earlier solution. Reviewed by mentor. Code not efficient.
You're looping through the number of keys in object1 multiplied by number of keys in object2.
Check falsey values first. Checking truthy values will result in nested for loops,
amongst other reasons. Much better to exist code as soon as possible.*/
/*const eqObjects = function(object1, object2) {
objOneKeys = Object.keys(object1);
objTwoKeys = Object.keys(object2);

  if (objOneKeyLength.length === objTwoKeyLength.length) {
    for (const key in object1) { // Loop through object1's key
      for (const key2 in object2) { // Loop through object2's key
        if (key === key2) { // Compare if both keys are the same
          if (object1[key] === object2[key]) { // Compare the values of the key in current iteration
            return true;
          }
        }
      }
    }
  }
  return false;
};*/

/* Additional notes from mentor session:
Just because a code has less lines, doesn't mean it's better.
Code still has to be readable. Readability, functionality (efficiency), pretty factor.
Comparing any two arrays, no matter if identical, will always result in false.
They're two completely separate arrays. They don't have the same reference point.*/

