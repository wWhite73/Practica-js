import Animal from '../models/Animal';

class AnimalService {
    private animals: Animal[] = [];

    addAnimal(animal: Animal): void {
        this.animals.push(animal);
    }

    getAnimals(): Animal[] {
        return this.animals;
    }
}

export default AnimalService;