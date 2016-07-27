import BooleanTypeValidator from '../../../src/validators/typeValidators/strict/boolean';
var assert = require('assert');

describe('Boolean Type Validator', function() {
    it('should return true when passed a Boolean', function () {
        assert.equal(BooleanTypeValidator(true), true);
        assert.equal(BooleanTypeValidator(false), true);
    });
    it('should return false when passed a truthy or falsey non Boolean', function () {
        assert.equal(BooleanTypeValidator(0), false);
        assert.equal(BooleanTypeValidator(1), false);
        assert.equal(BooleanTypeValidator(''), false);
        assert.equal(BooleanTypeValidator('true'), false);
        assert.equal(BooleanTypeValidator(undefined), false);
    });
});