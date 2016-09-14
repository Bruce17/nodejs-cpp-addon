'use strict';

var assert = require('assert');
var binding = require('../../build/Release/binding-helloworld');

// assert.equal('world', binding.hello());
// console.log('binding.hello() =', binding.hello());

function getHelloWorld() {
    return 'world';
}

module.exports.helloWorldJs = function () {
    return 'hello ' + getHelloWorld();
};

module.exports.helloWorldCpp = function () {
    return 'hello ' + binding.hello();
};
