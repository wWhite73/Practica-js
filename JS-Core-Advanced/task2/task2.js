
var a = 1;
var a = 2; // Повторное объявление допустимо

let b = 1;
// let b = 2; // Ошибка: b уже объявлена

const c = 1;
// const c = 2; // Ошибка: c уже объявлена
console.log(a); // 2
console.log(b); // 1
console.log(c); // 1