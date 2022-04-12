// Tail function that returns the "tail" of an array: everything but the first item (head).
// Should not modify original array being passed in. Return new array only with what's wanted.
const tail = function(array) {
  return array.slice(1);
};

/* Can't compare an array with another array.
Even though the values inside both arrays are the same. */

module.exports = tail;