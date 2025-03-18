"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readonly_1 = require("./readonly");
const error_1 = require("./error");
console.log(readonly_1.user); // Вывод: { name: 'Alice', age: 30 }
try {
    (0, error_1.throwError)("This is an error message.");
}
catch (e) {
    if (e instanceof Error) {
        console.error(e.message); // Выведет: This is an error message.
    }
    else {
        console.error("Unknown error", e);
    }
}
