import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';


export function getMax(numbers): number {
	return __checkIfArrayPopulated_then_getActionResult(numbers, Math.max);
}


export function getMin(numbers): number {
	return __checkIfArrayPopulated_then_getActionResult(numbers, Math.min);
}


function __checkIfArrayPopulated_then_getActionResult(array, action) {
	errorIfNotPopulatedArray(array);
	return action(...array);
}