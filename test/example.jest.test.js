

const rewire = require('rewire');

const exampleModule = rewire('../example');
exampleModule.__set__( 'a', 2);

test('two plus two is four', () => {
    expect( exampleModule(2) ).toBe(4);
})

