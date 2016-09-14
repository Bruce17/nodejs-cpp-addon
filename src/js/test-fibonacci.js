'use strict';

var binding = require('../../build/Release/binding-fibonacci');

function fibonacciRecursively(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacciRecursively(n - 1) + fibonacciRecursively(n - 2);
}

function fibonacciLoop(num) {
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

module.exports.js = {
    fibonacciRecursively: fibonacciRecursively,
    fibonacciLoop: fibonacciLoop
};

module.exports.cpp = {
    fibonacciRecursively: binding.fibonacciRecursively,
    fibonacciLoop: binding.fibonacciLoop
};
