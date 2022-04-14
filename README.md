# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Raiza-D/lotide`

**Require it:**

`const _ = require('@Raiza-D/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Takes in one parameter, an array. Returns the head of an array - the first element only.
* `tail(array)`: Takes in on parameter, an array. Returns all the elements EXCEPT the first element.
* `middle(array)`: Takes in one parameter, an array. Returns the middle elements. If arr length is even, returns the two middle elements. If arr length is odd, returns middle element.
* `takeUntil(array, callback)`: Takes in two parameters: array & callback. Will keep collecting items from a provided array until returns a truthy value.
* `without(source, itemsToRemove)`: Takes in two parameters: array & items to remove. Iterates over given array and removes items specified.
* `flatten(oneLevelArray)`: Takes in one parameter: a one-level array. Will return a flattened version of the array. 
* `countLetters(sentence)`: Takes in one parameter (should be a string). Returns a count of the letters in provided string.
* `countOnly(allItems, itemsToCount)`: Takes in a collection of items and return counts for a specific subject of those items specified. Takes in two parameters - an object to search through and another object containing specific items to count. 
* `letterPositions(sentence)`:  Takes in one parameter such as a string. Returns all the indices (with zero-based positions) within the given parameter where each character is found.
* `map(array, callback)`: A version of the map() array helper method. Takes in an array and callback function. Executes the task specified within the callback function on the provided array and returns a new array with the results.
* `findKey(object, callback)`: Will scan the object passed in and return the first key for which the callback returns a truthy value. If no key is found, returns "undefined". 
* `findKeyByValue(object, value)`: Scans the object and returns the first key containing the value specified as the second parameter.
* `assertArraysEqual(actual, expected)`: Makes use of eqArrays function. Tests to see if our assertions when comparing two arrays are equal. Takes in two parameters - the actual result and expected result.
* `assertEqual(actual, expected)`: Takes in a value and compares it to our expected value. 
* `assertObjectsEqual(actual, expected)`: Makes use of eqObjects function. Tests to see if our assertions comparing two objects are equal. Takes in two parameters - the actual result which is a true/false value and our expected result (either a true/false value).
* `eqArrays(arr1, arr2)`: Compares two arrays if they are identical. 
* `eqObjects(obj1, obj2)`: Compares two objects (their keys and values) if they are identical. 