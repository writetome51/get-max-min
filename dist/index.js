"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
function getMax(numbers) {
    return __checkIfArrayPopulated_then_getActionResult(numbers, Math.max);
}
exports.getMax = getMax;
function getMin(numbers) {
    return __checkIfArrayPopulated_then_getActionResult(numbers, Math.min);
}
exports.getMin = getMin;
function __checkIfArrayPopulated_then_getActionResult(array, action) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(array);
    return action.apply(void 0, array);
}
