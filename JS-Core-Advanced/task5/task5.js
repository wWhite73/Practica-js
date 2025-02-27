function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Флаг для оптимизации: если не было обменов, массив уже отсортирован
        let swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Обмен элементов
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }

    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log(bubbleSort([2, 1, 3])); // [1, 2, 3]
console.log(bubbleSort([10, 1, 5, 3, 7])); // [1, 3, 5, 7, 10]