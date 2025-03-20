import Stack from './stack/Stack';
import { getValue } from './utils/getValueType'; 

const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Выведет: 20

const exampleObject = {
    name: "Alice",
    age: 30,
};

const name = getValue(exampleObject, "name"); // string
const age = getValue(exampleObject, "age");   // number
console.log(name, age);