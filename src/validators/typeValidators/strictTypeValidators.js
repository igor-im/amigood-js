import StringTypeValidator from './strict/string'
import TypedArrayValidator from './strict/array'
import UndefinedValidator from './strict/undefined'
import ArrayTypeValidator from './strict/array'
import BooleanTypeValidator from './strict/boolean'
import NullTypeValidator from './strict/null'
import NumberTypeValidator from './strict/number'
import ObjectTypeValidator from './strict/object'

export const StrictTypeValidators = {
    array: ArrayTypeValidator,
    string: StringTypeValidator,
    boolean: BooleanTypeValidator,
    nullval: NullTypeValidator,
    typedArray: TypedArrayValidator,
    number: NumberTypeValidator,
    undefined: UndefinedValidator,
    object: ObjectTypeValidator
};