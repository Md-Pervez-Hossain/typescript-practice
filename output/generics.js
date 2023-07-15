"use strict";
const addId = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const result = {
    name: "Pervez Hossain",
    age: 26,
    country: "Bangladesh",
};
const result2 = "Pervez";
console.log(addId(result));
const response1 = {
    status: 200,
    type: "good",
    data: [
        {
            name: "pervez",
            age: 26,
        },
    ],
};
let data;
data = {
    status: 200,
    type: "ok",
    data: {
        name: "Pervez",
        age: 27,
        coutry: "bangladesh",
    },
};
console.log(data.data);
