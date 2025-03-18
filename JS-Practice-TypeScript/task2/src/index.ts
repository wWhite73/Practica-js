import { MyReadonly, user } from './readonly';
import { throwError } from './error';

console.log(user); // Вывод: { name: 'Alice', age: 30 }

try {
    throwError("This is an error message.");
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error(e.message); // Выведет: This is an error message.
    } else {
        console.error("Unknown error", e);
    }
}