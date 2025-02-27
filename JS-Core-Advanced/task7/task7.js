function accessProperty(obj) {
    try {
        // Попытка доступа к свойству объекта
        console.log(obj.property);
    } catch (error) {
        // Обработка ошибки TypeError
        if (error instanceof TypeError) {
            console.error('Произошла ошибка: объект неопределен или свойство отсутствует.');
        } else {
            // Обработка других ошибок
            console.error('Произошла другая ошибка:', error.message);
        }
    }
}

accessProperty(undefined); // Произошла ошибка: объект неопределен или свойство отсутствует.
accessProperty(null);      // Произошла ошибка: объект неопределен или свойство отсутствует.
accessProperty({});        // undefined (никакой ошибки)