import UndefinedValidator from '../../../src/validators/typeValidators/strict/undefined';

var assert = require('assert');
describe('Undefined Type Validator', function() {
    it('should return true when passed an undefined', function () {
        assert.equal(UndefinedValidator(undefined), true);
    });
    it('should return false when passed anything else', function () {
        assert.equal(UndefinedValidator('hello'), false);
        assert.equal(UndefinedValidator(42), false);
        assert.equal(UndefinedValidator([]), false);
        assert.equal(UndefinedValidator({}), false);
        assert.equal(UndefinedValidator(null), false);
        assert.equal(UndefinedValidator(true), false);
    });
});