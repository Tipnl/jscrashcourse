// let, const

// let age = 30;
// age = 31;

// const age = 3;

// console.log(age);

// string, numbers, boolean, null, undefined, symbol

// const name = "John";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof )

// concatenation

// console.log("My name is " + name + " and i am " + age);

// template string
// console.log(`My name is ${name} and I am ${age}`);

// const s = 'Hello World!';
// console.log(s.length);
// s.toUpperCase();
// s.toLowerCase();
// s.substring(0, 5); = Hello;
// s.split(,); s.split("");

// single line
/* multi
line
comment */

// const numbers = new Array(1,2,3,4,5);

// console.log(numbers);

// const fruits = ["apples", "oranges", "pears"];

// fruits[3] = "grapes";

// fruits.push("mangos");

// fruits.unshift("strawberries");

// fruits.pop();

// console.log(Array.isArray(fruits));

// console.log(Array.isArray("hello"));

// console.log(fruits.indexOf("oranges"));

// console.log(fruits[1]);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "50 main st",
//     city: "Boston",
//     state: "MA",
//   },
// };

// console.log(person.firstName, person.lastName);

// console.log(person.hobbies[1]);

// console.log(person.address.city);

// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person;

// console.log(firstName);

// console.log(city);

// person.email = "john@gmail.com";

// console.log(person);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },

  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },

  {
    id: 1,
    text: "Dentist appt",
    isCompleted: false,
  },
];

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let todo of todos) {
//   console.log(todo.text);
// }

// forEach, map, filter
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// const todoText = todos.map(function (todo) {
//   return todo.text;
// });

// console.log(todoText);

// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoCompleted);

// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);

// console.log(todoJSON);

// For
// for (let i = 0; i <= 10; i++) {
//   console.log(`For Loop Number: ${i}`);
// }

// // While
// let i = 0;
// while (i < 10) {
//   console.log(`While Loop number: ${i}`);
//   i++;
// }

// const x = 4;

// if (x == 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is less than 10");
// }

// const x = 6;
// const y = 11;

// if (x > 5 && y > 10) {
//   console.log("x is more than 5 or y is more than 10");
// }

// const x = 11;

// const color = x > 10 ? "red" : "blue";

// console.log(color);

// switch() {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue:
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is NOT red or blue');
// }

// function addNums(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }

// console.log(addNums(5, 4));

// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums(5, 4));

// // constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// Class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// instantiate object
// const person1 = new Person("John", "Doe", "4-3-1980");
// const person2 = new Person("Mary", "Smith", "3-6-1970");

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// console.log(person1);
