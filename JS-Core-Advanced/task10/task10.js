async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
        controller.abort(); // Отменяем запрос, если истекает время
    }, timeout);

    try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status}`);
        }
        const data = await response.json();
        return data; // Возвращаем данные, если запрос успешен
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Запрос отменен из-за превышения времени ожидания.'); 
        } else {
            console.error('Произошла ошибка:', error.message);
        }
    } finally {
        clearTimeout(timeoutId); // Очищаем таймер
    }
}

// Пример использования
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const timeout = 100; // 0.1 секунды

fetchDataWithTimeout(url, timeout).then(result => {
    if (result) {
        console.log('Данные:', result);
    }
});

// КОНСОЛЬ
// E:\Practica-js\JS-Core-Advanced\task10> node task10.js
// Запрос отменен из-за превышения времени ожидания.
