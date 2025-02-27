async function fetchDataAndUse(url1, url2) {
    try {
        // Загружаем данные с первого сервера
        const response1 = await fetch(url1);
        if (!response1.ok) {
            throw new Error(`Ошибка загрузки с первого сервера: ${response1.status}`);
        }
        const data1 = await response1.json();

        // Используем полученные данные для запроса ко второму серверу
        const response2 = await fetch(`${url2}?id=${data1.id}`);
        if (!response2.ok) {
            throw new Error(`Ошибка загрузки с второго сервера: ${response2.status}`);
        }
        const data2 = await response2.json();

        return data2; // Возвращаем данные второго сервера
    } catch (error) {
        console.error('Произошла ошибка:', error.message);
    }
}

const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/posts';

fetchDataAndUse(url1, url2).then(result => {
    if (result) {
        console.log('Данные с второго сервера:', result);
    }
});