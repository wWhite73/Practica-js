function printLastCharacter(str) {
    if (str.length > 0) {
        console.log(str[str.length - 1]);
    } else {
        console.log('Строка пуста');
    }
}

printLastCharacter('Hello'); // o
printLastCharacter('Привет'); // т
printLastCharacter(''); // Строка пуста