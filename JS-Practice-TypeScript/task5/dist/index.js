"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = __importDefault(require("./stack/Stack"));
const getValueType_1 = require("./utils/getValueType");
const stack = new Stack_1.default();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Выведет: 20
const exampleObject = {
    name: "Alice",
    age: 30,
};
const name = (0, getValueType_1.getValue)(exampleObject, "name"); // string
const age = (0, getValueType_1.getValue)(exampleObject, "age"); // number
console.log(name, age);
