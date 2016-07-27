export default function ObjectTypeValidator(object) {
    return (typeof(object) === "object") && (!Array.isArray(object)) && (object !== null);
}