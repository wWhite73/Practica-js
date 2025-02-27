async function fetchUrls(urls) {
    try {
        // Создание массива промисов для загрузки содержимого каждого URL
        const fetchPromises = urls.map(url => fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки: ${response.status}`);
            }
            return response.text(); // Или response.json(), если ожидается JSON
        }));

        // Ожидание завершения всех промисов
        const results = await Promise.all(fetchPromises);
        return results; // Возвращает массив загруженных данных
    } catch (error) {
        console.error('Произошла ошибка при загрузке URL-адресов:', error.message);
    }
}

const urls = [
    // Типа REST API
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchUrls(urls).then(results => {
    if (results) {
        results.forEach((content, index) => {
            console.log(`Содержимое URL ${index + 1}:`, content);
        });
    }
});