import { checkArray_thenGetActionResult } from './__privy.js';


export function getMax(numbers) {
	return checkArray_thenGetActionResult(numbers, Math.max);
}


export function getMin(numbers) {
	return checkArray_thenGetActionResult(numbers, Math.min);
}
