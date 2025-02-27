function sumFirstHalf(arr) {
    const halfLength = Math.floor(arr.length / 2);
    let sum = 0;

    for (let i = 0; i < halfLength; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumFirstHalf([1, 2, 3, 4, 5, 6])); // 6 (1 + 2 + 3)
console.log(sumFirstHalf([10, 20, 30, 40])); // 30 (10 + 20)
console.log(sumFirstHalf([5, 10, 15])); // 15 (5 + 10)
console.log(sumFirstHalf([1, 2])); // 1 (только первый элемент)