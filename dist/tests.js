"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("../dist");
// Test 1:
var result = dist_1.getMax([1, 10]);
if (result === 10)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2:
result = dist_1.getMin([1, 10, '2', 1, 10, '2', 1, 10, '2']);
if (result === 1)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3:
result = dist_1.getMax([-1, -10, -2]);
if (result === -1)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4:
result = dist_1.getMin([-1, -10]);
if (result === -10)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5:
result = dist_1.getMax(['-1', '-10']);
if (result === -1)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6:
result = dist_1.getMin(['-1', '-10']);
if (result === -10)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7:
result = dist_1.getMax(['1.05555', '1.0555']);
if (result === 1.05555)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8:
result = dist_1.getMin(['1.05555', '1.0555']);
if (result === 1.0555)
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9:
result = dist_1.getMax(['-1.05555', '+1.0555']);
if (result === 1.0555)
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10:
result = dist_1.getMin(['-1.05555', '+1.0555']);
if (result === -1.05555)
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11:
result = dist_1.getMax(['-1.05555', Number.POSITIVE_INFINITY, Number.MAX_VALUE]);
if (result === Number.POSITIVE_INFINITY)
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
// Test 12:
result = dist_1.getMin(['-1.05555', Number.NEGATIVE_INFINITY, Number.MIN_VALUE]);
if (result === Number.NEGATIVE_INFINITY)
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
