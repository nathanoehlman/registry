var registry = require('../registry.common'),
    expect = require('expect.js');

describe('function tests', function() {
    it('can define a function handler', function() {
        var def = registry.fn('fn.test', function(input) {
            return input + '-out';
        });
        
        expect(def).to.be.ok();
        expect(def.instance).to.be.ok();
    });
    
    it('can access the function', function() {
        var testFn = registry('fn.test').create();
        
        expect(testFn).to.be.ok();
        expect(typeof testFn).to.equal('function');
        expect(testFn('in')).to.equal('in-out');
    });
});