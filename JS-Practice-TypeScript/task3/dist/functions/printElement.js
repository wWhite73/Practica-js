"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printElement = printElement;
function printElement(element) {
    if (typeof element === 'number') {
        console.log(element); // Выводим значение, если это число
    }
    else if (typeof element === 'string') {
        console.log(element.length); // Выводим длину строки, если это строка
    }
}
