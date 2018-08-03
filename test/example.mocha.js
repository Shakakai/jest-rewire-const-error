const assert = require('assert');
const rewire = require('rewire');

const exampleModule = rewire('../example');
exampleModule.__set__( 'a', 2);

describe( 'Show mocha works', function() {
    it( 'should add the numbers together', function() {
        const result = exampleModule( 2 );
        assert.equal( result, 4, "Result is not 4");
    })
})