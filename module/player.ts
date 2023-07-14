export class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(
      `my Name is ${this.name}, My Age Is: ${this.age} and I am From  ${this.country} `
    );
  }
}
