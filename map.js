// Compares two arrays by comparing its length then comparing each value
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

// Function to test if assertions regarding the two arrays are correct.
// Makes use of eqArrays.
const assertArraysEqual = function(actual, expected) {
  const arrayPass = "✅ Assertion passed. ";
  const arrayFail = "❌ Assertion failed. ";

  if (eqArrays(actual, expected)) {
    console.log(arrayPass + actual + " === " + expected);
  } else {
    console.log(arrayFail + actual + " !== " + expected);
  }
};

// Definition and implementation of our own version of map method
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];

const map = function(array, callback) {
  const results = [];
  for (let item of array) { // Loops through each item in the given array
    results.push(callback(item)); // Callback function passed in and executes task.
    // Results pushed into new array, which we will return in the end.
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(numbers, (num) => num + 2);

console.log(results1); // To make sure results1 output is accurately.
console.log(results2); // To make sure results2 output is accurately.

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // Pass
assertArraysEqual(results2, [3, 4, 5, 6, 7]); // Pass


/* The long way write out the map callback function WITHOUT the use of arrow functions:
const results1 = map(words,function(word) {
  word[0];
});
words is the array being passed into map function as the first argument.
The second argument is the unnamed function (which is a callback). This callback function will
execute specified task on each element of the array being passed in.

Mentor advice: PRACTICE ARROW FUNCTIONS and GET USED TO THEM!!
You will see them a lot more later on.

Mentor provided another way to write syntax for arrow functions used in results1 variable.
Reminder results1 is a variable containing the results returned from running map function.

1. Use curly braces to house the task you want the callback function to complete.
If you use curly braces with your arrow functions, must explicitly include "return" keyword.
The return keyword especially useful if the map function does a more complex task, instead of
just simply returning a letter in a specified index, or computing 1 + 1 as examples.

const results1 = map(words, (word) => {return word[0]});

2. Other way to use arrow functions is WITHOUT the curly braces,
which is what is shown on Compass asgmt. If you don't use curly braces, do not need to
use the "return" keyword.

const results1 = map(words, word => word[0]);
*/
