import { ElementType } from '../types/elementTypes';

export function printElement(element: ElementType): void {
    if (typeof element === 'number') {
        console.log(element); // Выводим значение, если это число
    } else if (typeof element === 'string') {
        console.log(element.length); // Выводим длину строки, если это строка
    }
}