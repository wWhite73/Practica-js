'use strict';

function containsValue(arr, value) {
    return arr.includes(value);
}

console.log(containsValue([1, 2, 3, 4], 3)); // true
console.log(containsValue([1, 2, 3, 4], 5)); // false
console.log(containsValue(['apple', 'banana', 'orange'], 'banana')); // true
console.log(containsValue(['apple', 'banana', 'orange'], 'grape')); // false