// console.log("hello");
// const country = "i love bangladesh";
// console.log(country);

let MyName = "pervez Hossain";
MyName = "samira";
let number = 34;
console.log(MyName);

function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(2, 3));

const fruits = ["banana", 10, [], {}];
fruits.push({
  name: "pervez",
});
console.log(fruits);

const person = {
  name: "Pervez",
  age: 27,
  isMuslim: true,
};
person.age = 34;

let a: string;
let b: number;
a = "pervez";
b = 23;
console.log(a, b);

let arr: (number | string | boolean | object)[] = [];
arr.push("pervez", 20, false, {}, []);

let c: {
  name: string;
  age: number;
  adult: boolean;
};
c = {
  name: "pervez",
  age: 35,
  adult: true,
};

//dynamioc type

let d: any;
(d = "pervez"), (d = 7);

let arr2: any[] = [];
arr2.push("bangladesh", 34);

let obj2: {
  name: any;
  age: number;
};
obj2 = {
  name: 34,
  age: 26,
};
obj2.age = 34;

let menu: Function;

menu = () => {
  console.log("conected");
};
menu();

const test = (a: number, b: string, c?: number) => {
  return a + b;
};
console.log(test(12, "10"));

//alius type

type numberOrString = number | string;
type userType = { name: string; age: number };
const userFunction = (id: numberOrString, user: userType) => {
  console.log(`
  user id: ${id} , user name : ${user.name} and user age : ${user.age}
  `);
};

userFunction(1, { name: "pervez", age: 27 });
