// let name  = 'John';

// function greet (name) {
//     return 'hello' + name; 
// }

// let fruits = ["apple", "banana", "cherry"];
// fruits.push("date");

// console.log(fruits)


// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, 1000);
//   });
//   myPromise.then(result => console.log(result));
  

//   async function fetchData() {
//     let response = await fetch("https://api.example.com/data");
//     let data = await response.json();
//     console.log(data);
//   }
//   const add = (a,b) => {
//     a + b;
//   }

//   let wtf = 'wtf';
//   console.log (`wtf is ${wtf}`)

//   const student = {
//     firstName: "John",
//     lastName: "Doe"
//   };
//   console.log (student.firstName);

//   const {firstName ,  lastName} = student;

// //   console.log (firstName);

// let arr1 = [1,2,3];
// let arr2 = [...arr1, 4, 5];

// // console.log (arr2);

// let obj1 = {
//     a:1,
//     b:2
// };

// let obj2 = {
//     ...obj1,
//     c: 3 
// }

// console.log (obj2);

// function logArgs (...args) {
//     console.log (args);
// }


// logArgs (1,2,3,4);

// const add = (a,b) => a + b;
export const add = (a, b) => a+b;

import {add} from './math';