(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.amigood = global.amigood || {})));
}(this, function (exports) { 'use strict';

  function StringTypeValidator(string) {
      return typeof string === "string";
  }

  function ArrayTypeValidator(item) {
      return Array.isArray(item);
  }

  function UndefinedValidator(item) {
      return typeof item === 'undefined';
  }

  function BooleanTypeValidator(boolean) {
      return typeof boolean === "boolean";
  }

  function NullTypeValidator(item) {
      return item === null;
  }

  function NumberTypeValidator(number) {
      if (typeof number !== "number" || isNaN(number)) return false;
      if (number > Number.MAX_SAFE_INTEGER) return false;
      if (number < Number.MIN_SAFE_INTEGER) return false;
      return true;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function ObjectTypeValidator(object) {
      return (typeof object === "undefined" ? "undefined" : _typeof(object)) === "object" && !Array.isArray(object) && object !== null;
  }

  var StrictTypeValidators = {
      array: ArrayTypeValidator,
      string: StringTypeValidator,
      boolean: BooleanTypeValidator,
      nullval: NullTypeValidator,
      typedArray: ArrayTypeValidator,
      number: NumberTypeValidator,
      undefined: UndefinedValidator,
      object: ObjectTypeValidator
  };

  var TypeValidator = function () {
      function TypeValidator(Type, strict) {
          classCallCheck(this, TypeValidator);

          this.validationType = Type;
          this.validators = strict ? StrictTypeValidators : {};
      }

      createClass(TypeValidator, [{
          key: "validate",
          value: function validate(string, type) {
              if (!this.validationType && Object.keys(this.validators).indexOf(type) == -1) throw "Invalid Validation, type MUST be included or set at constructor";
              type = this.validationType ? this.validationType : type;
              return this.validators[type](string);
          }
      }]);
      return TypeValidator;
  }();

  exports.TypeValidator = TypeValidator;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=amigood.browser.js.map