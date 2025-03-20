"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processData_1 = require("./processData");
const numberArray = [1, 2, -3, 4, 5];
const stringArray = ["apple", "banana", "cherry"];
console.log((0, processData_1.processData)(numberArray)); // Выведет: 15
console.log((0, processData_1.processData)(stringArray)); // Выведет: 3
