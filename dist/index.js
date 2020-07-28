import {errorIfLengthIsZero} from 'error-if-length-is-zero';


export function getMax(numbers) {
	return __checkIfArrayPopulated_thenGetActionResult(numbers, Math.max);
}


export function getMin(numbers) {
	return __checkIfArrayPopulated_thenGetActionResult(numbers, Math.min);
}


function __checkIfArrayPopulated_thenGetActionResult(array, action) {
	errorIfLengthIsZero(array);
	return action(...array);
}
