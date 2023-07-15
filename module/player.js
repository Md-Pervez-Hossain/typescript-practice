export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    play() {
        console.log(`my Name is ${this.name}, My Age Is: ${this.age} and I am From  ${this.country} `);
    }
}
