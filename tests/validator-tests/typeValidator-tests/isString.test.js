import StringTypeValidator from '../../../src/validators/typeValidators/strict/string';

var assert = require('assert');
describe('String Type Validator', function() {
    it('should return true when passed a string', function () {
        assert.equal(StringTypeValidator('hello world'), true);
    });
    it('should return false when passed a string created with string object', function () {
        assert.equal(StringTypeValidator(new String('hello world')), false); 
        //new String(string) creates an autoboxed object, which is a full fledged object rather than a primitive string
    });
    it('should return false when passed an undefined', function () {
        assert.equal(StringTypeValidator(undefined), false);
    });
    it('should return false when passed a null', function () {
        assert.equal(StringTypeValidator(null), false);
    });
    it('should return false when passed a number', function () {
        assert.equal(StringTypeValidator(42), false);
    });
});