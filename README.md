# getMax(numbers): number

Returns max value in `numbers`

# getMin(numbers): number

Returns min value in `numbers`

The items in `numbers` can be of type 'number' or 'string'.   
For string numbers, the only non-numeric characters allowed are a period, plus,  
and minus.

## Examples
```
getMin([1, 10, 2]);
    // --> 1

getMin(['-1.05555', '+1.055']);
    // --> -1.05555

getMin(['-1.05555',  Number.NEGATIVE_INFINITY,  Number.MIN_VALUE]);
    // -->  Number.NEGATIVE_INFINITY

getMax([-1, -10, -2]);
    // --> -1

getMax(['1.05555', '1.055']);
    // -->  1.05555 

getMax(['-1.05555',  Number.POSITIVE_INFINITY,  Number.MAX_VALUE]);
    // -->  Number.POSITIVE_INFINITY
```

## Installation
`npm i  @writetome51/get-max-min`

## Loading
```js
import { getMax, getMin } from '@writetome51/get-max-min';
```
