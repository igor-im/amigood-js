import ArrayTypeValidator from '../../../src/validators/typeValidators/strict/array';
var assert = require('assert');

describe('Array Type Validator', function() {
    // No support yet for Typed Array :(
    it('should return true when passed an Array', function () {
        assert.equal(ArrayTypeValidator([]), true);
        assert.equal(ArrayTypeValidator([42]), true);
    });
    it('should return false when passed an Object with number keys', function () {
        assert.equal(ArrayTypeValidator({1:'a', 0: 'b'}), false);
    });
    it('should return false when passed a string', function () {
        assert.equal(ArrayTypeValidator('hello world'), false);
    });
    it('should return false when passed a Map', function () {
        assert.equal(ArrayTypeValidator(new Map()), false);
    });
    it('should return false when passed a Set', function () {
        assert.equal(ArrayTypeValidator(new Set()), false);
    });
});