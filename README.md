# js-fp-algorithms [![Build Status](https://api.travis-ci.org/ryanmcdermott/js-fp-algorithms.svg?branch=master)](https://travis-ci.org/ryanmcdermott/js-fp-algorithms)
A collection of algorithms written in JavaScript in a functional programming
style.

## The Philosophy
You might think that a "functional programming style" means monads, cofunctors,
and applicative dinguses. Actually, it just means no loops, no mutations, and
no side effects,

### No loops
Anything expressed in `for` and `while` can also be expressed in recursion.

### No mutations
No variables are mutated because there are no variables, only constants.

### No side effects
Functions will always produce the same output given the same input. No sneaky
global variables, calling the network, or running quicksort and then deleting
all your songs on Spotify.

## Installation
`npm install`

## Testing
`npm t`
