import {errorIfLengthIsZero} from 'error-if-length-is-zero';


export function checkArray_thenGetActionResult(array, action) {
	errorIfLengthIsZero(array);
	return action(...array);
}
