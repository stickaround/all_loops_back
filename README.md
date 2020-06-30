Write a function that find all the paths from a node that are loops back to itself.

The first argument to the function should be the node and the second should be 
a list that describes each edge in the graph. 

For example, `allLoopsBack(2, [ [1, 2], [2, 3], [1, 3], [3, 4], [4, 2], [5, 6] ])` should 
return `[[ 2, 3, 4, 2 ]]`. See `tests/index.spec.js` for examples.


You are able to use any javascript library you like in the implementation.

The tests should pass in the `test` directory should all pass.

## Install

Ensure you have a recent stable node installed.

Run `npm install` to install the test requirements.

## Run tests

`npm test`
