import ObjectTypeValidator from '../../../src/validators/typeValidators/strict/object';

var assert = require('assert');
describe('Object Type Validator', function() {
    it('should return true when passed an Object', function () {
        assert.equal(ObjectTypeValidator({}), true);
        assert.equal(ObjectTypeValidator(new Object()), true);
        assert.equal(ObjectTypeValidator(Object.create({})), true);
    });
    it('should return false when passed an Array', function () {
        assert.equal(ObjectTypeValidator([]), false);
        assert.equal(ObjectTypeValidator(new Object([])), false);
    });
});