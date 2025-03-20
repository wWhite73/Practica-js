export function processData(data: number[]): number; // Для массива чисел
export function processData(data: string[]): number; // Для массива строк
export function processData(data: any[]): number { // Основная реализация
    if (typeof data[0] === 'number') {
        // Если массив чисел, считаем сумму
        return data.reduce((acc, val) => acc + val, 0);
    } else if (typeof data[0] === 'string') {
        // Если массив строк, возвращаем длину массива
        return data.length;
    }
    throw new Error("Unsupported data type");
}