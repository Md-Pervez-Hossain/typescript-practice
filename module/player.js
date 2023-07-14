export class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`my Name is ${this.name}, My Age Is: ${this.age} and I am From  ${this.country} `);
    }
}
