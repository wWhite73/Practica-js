"use strict";
// src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./models/Animal"));
const AnimalService_1 = __importDefault(require("./services/AnimalService"));
// Создание животных
const dog = new Animal_1.default("Woof");
dog.makeSound(); // Выведет: Woof
const cat = new Animal_1.default("Meow");
cat.makeSound(); // Выведет: Meow
const animalService = new AnimalService_1.default();
animalService.addAnimal(dog);
animalService.addAnimal(cat);
console.log(animalService.getAnimals());
