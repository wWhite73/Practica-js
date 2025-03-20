"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(sound) {
        this.sound = sound; // Инициализируем поле sound
    }
    makeSound() {
        console.log(this.sound);
    }
}
exports.default = Animal;
