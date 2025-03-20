"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processData = processData;
function processData(data) {
    if (typeof data[0] === 'number') {
        // Если массив чисел, считаем сумму
        return data.reduce((acc, val) => acc + val, 0);
    }
    else if (typeof data[0] === 'string') {
        // Если массив строк, возвращаем длину массива
        return data.length;
    }
    throw new Error("Unsupported data type");
}
