"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(x) {
    return orElseThrow(x, new Error("Attempting to retrieve value from null or undefined variable"));
}
exports.get = get;
function orElseThrow(x, err) {
    if (isNullOrUndefined(x)) {
        throw err;
    }
    return x;
}
exports.orElseThrow = orElseThrow;
function orElse(x, defaultVal) {
    return isNullOrUndefined(x) ? defaultVal : x;
}
exports.orElse = orElse;
function isNull(x) {
    return x === null;
}
exports.isNull = isNull;
function isNotNull(x) {
    return x !== null;
}
exports.isNotNull = isNotNull;
function isUndefined(x) {
    return x === undefined;
}
exports.isUndefined = isUndefined;
function isDefined(x) {
    return x !== undefined;
}
exports.isDefined = isDefined;
function isNullOrUndefined(x) {
    return isNull(x) || isUndefined(x);
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNotNullorUnDefined(x) {
    return isNotNull(x) && isDefined(x);
}
exports.isNotNullorUnDefined = isNotNullorUnDefined;
