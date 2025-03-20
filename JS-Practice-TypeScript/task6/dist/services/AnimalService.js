"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnimalService {
    constructor() {
        this.animals = [];
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    getAnimals() {
        return this.animals;
    }
}
exports.default = AnimalService;
