import ArrayTypeValidator from '../../../src/validators/typeValidators/strict/typedArray';
var assert = require('assert');

describe('Typed Array Type Validator', function() {
    it('should return true when passed a typed Array', function () {
        assert.equal(ArrayTypeValidator(new Int8Array(10)), true);
        assert.equal(ArrayTypeValidator(new Uint8Array(10)), true);
        assert.equal(ArrayTypeValidator(new Uint8ClampedArray(10)), true);
        assert.equal(ArrayTypeValidator(new Int16Array(10)), true);
        assert.equal(ArrayTypeValidator(new Uint16Array(10)), true);
        assert.equal(ArrayTypeValidator(new Int32Array(10)), true);
        assert.equal(ArrayTypeValidator(new Uint32Array(10)), true);
        assert.equal(ArrayTypeValidator(new Float32Array(10)), true);
        assert.equal(ArrayTypeValidator(new Float64Array(10)), true);
    });
    it('should return false when passed an ArrayBuffer', function () {
        assert.equal(ArrayTypeValidator(new ArrayBuffer(8)), false);
    });
    it('should return false when passed a regular Array', function () {
        assert.equal(ArrayTypeValidator([]), false);
        assert.equal(ArrayTypeValidator([42]), false);
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