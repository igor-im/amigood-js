import { StrictTypeValidators } from './validators/typeValidators/typeValidators'

export class TypeValidator {
    constructor(Type, strict) {
        this.validationType = Type;
        this.validators = strict ? StrictTypeValidators : {};
    }
    validate(string, type) {
        if(!this.validationType && (Object.keys(this.validators).indexOf(type) == -1))
            throw "Invalid Validation, type MUST be included or set at constructor";
        type = this.validationType ? this.validationType : type;
        return this.validators[type](string);
    }
}