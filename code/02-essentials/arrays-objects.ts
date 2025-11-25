let hobbies = ["Sports", "Cooking"];

// hobbies.push(10);

// let users: (string | number)[];
let users: Array<string | number>;

users = [1, "Max"];
users = [5, 1];
users = ["Max", "Anna"];

let possibleResults: [number, number]; // [1, -1]

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

let user: {
  // object type
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Max",
  age: 38,
  hobbies: ["Sports", "Cooking"],
  role: {
    description: "admin",
    id: 5,
  },
};

let val: {} = "is a value"; // non-null type

let data: Record<string, number | string>; // an object with string keys and number or string values Record<Key Types, Value Types>

data = {
  entry1: 1,
  entry2: "som",
  2: "another",
};
