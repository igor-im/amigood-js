export default function NumberTypeValidator(number) {
    if(typeof(number) !== "number" || isNaN(number)) return false;
    if(number > Number.MAX_SAFE_INTEGER) return false;
    if(number < Number.MIN_SAFE_INTEGER) return false;
    return true;
}