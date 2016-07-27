import NullTypeValidator from '../../../src/validators/typeValidators/strict/null';

var assert = require('assert');
describe('Null Type Validator', function() {
    it('should return true when passed a Null', function () {
        assert.equal(NullTypeValidator(null), true);
    });
    it('should return false when passed an undefined', function () {
        assert.equal(NullTypeValidator(undefined), false);
    });
    it('should return false when passed an empty string', function () {
        assert.equal(NullTypeValidator(''), false);
    });
    it('should return false when passed an object', function () {
        assert.equal(NullTypeValidator({}), false);
    });
});