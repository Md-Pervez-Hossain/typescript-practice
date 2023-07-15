const addId = <T extends { name: string; age: number }>(obj: T) => {
  const id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
const result = {
  name: "Pervez Hossain",
  age: 26,
  country: "Bangladesh",
};
const result2 = "Pervez";

console.log(addId(result));

interface apiResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: apiResponse<[object]> = {
  status: 200,
  type: "good",
  data: [
    {
      name: "pervez",
      age: 26,
    },
  ],
};

interface dataResponse<T> {
  status: number;
  type: string;
  data: T;
}

let data: dataResponse<{}>;
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
