/* global suite, bench */

var helloWorld = require('../src/js/test-hello-world.js');

suite('get "hello world"', function () {
    bench('js method call', function () {
        helloWorld.helloWorldJs();
    });
    
    bench('c++ method call', function () {
        helloWorld.helloWorldCpp();
    });
});
