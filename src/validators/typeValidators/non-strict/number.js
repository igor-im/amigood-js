export function NonStrictNumberValidator(string) {
    return /^[0-9]+(\.[0-9]{1,2})?$/.test(string);
}

