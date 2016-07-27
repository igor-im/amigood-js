import NumberTypeValidator from '../../../src/validators/typeValidators/strict/number';

var assert = require('assert');
describe('Number Type Validator', function() {
    it('should return true when passed an Integer', function () {
        assert.equal(NumberTypeValidator(42), true);
    });
    it('should return false when passed a number created with "new Number"', function () {
        assert.equal(NumberTypeValidator(new Number(42)), false);
    });
    it('should return false when passed an Integer bigger than MAX_SAFE_INTEGER', function () {
        assert.equal(NumberTypeValidator(9007199254740991), true); // Sanity check
        assert.equal(NumberTypeValidator(9007199254740992), false);
    });
    it('should return true when passed a negative Integer', function () {
        assert.equal(NumberTypeValidator(-42), true);
    });
    it('should return false when passed a negative Integer smaller than MIN_SAFE_INTEGER', function () {
        assert.equal(NumberTypeValidator(-9007199254740991), true); // Sanity check
        assert.equal(NumberTypeValidator(-9007199254740992), false);
    });
    it('should return false when passed a non number', function () {
        assert.equal(NumberTypeValidator('42'), false); // Sanity check
        assert.equal(NumberTypeValidator([42]), false);
        assert.equal(NumberTypeValidator({a: 42}), false);
        assert.equal(NumberTypeValidator(undefined), false);
        assert.equal(NumberTypeValidator(null), false);
    });
});