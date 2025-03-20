class Animal {
    public sound: string;

    constructor(sound: string) {
        this.sound = sound; // Инициализируем поле sound
    }

    makeSound(): void {
        console.log(this.sound);
    }
}

export default Animal;