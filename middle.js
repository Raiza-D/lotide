/* middle function returns the middle elements of given array.
If array length is even, two items middle of array returned.
If array length is odd, middle item returned. */
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

module.exports = middle;