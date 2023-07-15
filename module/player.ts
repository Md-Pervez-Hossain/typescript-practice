import { isPlayer } from "./interface/isPlayer";

export class Player implements isPlayer {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}
  getAge() {
    return this.age;
  }
  play() {
    console.log(
      `my Name is ${this.name}, My Age Is: ${this.age} and I am From  ${this.country} `
    );
  }
}
