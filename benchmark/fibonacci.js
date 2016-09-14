'use strict';

/* global suite, bench */

var fibonacci = require('../src/js/test-fibonacci.js');

function prepareBenchLoop(num, type) {
    bench(`${type} method call`, function () {
        fibonacci[type].fibonacciLoop(num);
    });
}

function prepareBenchRecursively(num, type) {
    bench(`${type} method call`, function () {
        fibonacci[type].fibonacciRecursively(num);
    });
}

function prepareSuiteLoop(aryNums) {
    for (let num of aryNums) {
        suite(`calculate fibonacci as loop for ${num}`, function () {
            prepareBenchLoop(num, 'js');
            prepareBenchLoop(num, 'cpp');
        });
        
        // NOTICE: this solutions seems not to be efficient. Use BigInteger solution instead.
        if (num >= 100) {
            continue;
        }
        
        suite(`calculate fibonacci recursively for ${num}`, function () {
            prepareBenchRecursively(num, 'js');
            prepareBenchRecursively(num, 'cpp');
        });
    }
}

prepareSuiteLoop([10, 20, 30, 100, 1000, 10000]);
