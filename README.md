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
* `countOnly(...)`: 
* `letterPositions(...)`: 
* `map(...)`: 
* `findKey(...)`: 
* `findKeyByValue(...)`: 
* `assertArraysEqual(...)`: 
* `assertEqual(...)`: 
* `assertObjectsEqual(...)`: 
* `eqArrays(...)`: 
* `eqObjects(...)`: 