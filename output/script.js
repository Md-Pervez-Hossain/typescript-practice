"use strict";
// console.log("hello");
// const country = "i love bangladesh";
// console.log(country);
let MyName = "pervez Hossain";
MyName = "samira";
let number = 34;
console.log(MyName);
function sum(a, b) {
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
let a;
let b;
a = "pervez";
b = 23;
console.log(a, b);
let arr = [];
arr.push("pervez", 20, false, {}, []);
let c;
c = {
    name: "pervez",
    age: 35,
    adult: true,
};
//dynamioc type
let d;
(d = "pervez"), (d = 7);
let arr2 = [];
arr2.push("bangladesh", 34);
let obj2;
obj2 = {
    name: 34,
    age: 26,
};
obj2.age = 34;
let menu;
menu = () => {
    console.log("conected");
};
menu();
const test = (a, b, c) => {
    return a + b;
};
console.log(test(12, "10"));
const userFunction = (id, user) => {
    console.log(`
  user id: ${id} , user name : ${user.name} and user age : ${user.age}
  `);
};
userFunction(1, { name: "pervez", age: 27 });
const userInfo = (id, user) => {
    console.log(`user id: ${id} , user Name:${user.name} , User age : ${user.age}`);
};
userInfo(123, { name: "Pervez Hossain", age: 27 });
//function signature
let add;
add = (a, b) => {
    return a + b;
};
const addResult = add(2, 3);
console.log(addResult);
let calculation = (a, b, c) => number;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
const calculationResult = calculation(5, 6, "minus");
console.log(calculationResult);
let userInformation;
userInformation = (id, user) => {
    console.log(`user id:${id} user name: ${user.name} user age : ${user.age}`);
};
userInformation(123, { name: "pervez", age: 27 });
