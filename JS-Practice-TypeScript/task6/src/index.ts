// src/index.ts

import Animal from './models/Animal';
import AnimalService from './services/AnimalService';

// Создание животных
const dog = new Animal("Woof");
dog.makeSound(); // Выведет: Woof

const cat = new Animal("Meow");
cat.makeSound(); // Выведет: Meow


const animalService = new AnimalService();
animalService.addAnimal(dog);
animalService.addAnimal(cat);
console.log(animalService.getAnimals());