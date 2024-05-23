// // //at first
// 'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section
// const restaurants = {
//   name: 'Classico Italiano',
// location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//    openingHours: {
//      thu: {
//        open: 12,       close: 22,
//      },
//     fri: {
//        open: 11, 
//        close: 23,
//      },
//      sat: {
//        open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // //at first
// // //Understanding Array Destructuring in JavaScript


// // //Basics of Destructuring Without Destructuring:
 
// //   const arr = [1, 2, 3];
// //   const a = arr[0];
// //   const b = arr[1];
// //   const c = arr[2];


// // //With Destructuring:

// //   const [x, y, z] = arr;

// // const restaurant = {
// //   name: 'Classico Italiano',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// // };

// // //Simple Destructuring
// // //Extracting values from an array:

// // const [first, second] = restaurant.categories;

// // //Skipping Elements

// // const [main, , secondary] = restaurant.categories;
// // console.log(main, secondary); // Italian Vegetarian

// // //Switching Variables

// // let [mainn, secondaryy] = ['Italian', 'Vegetarian'];
// // [mainn, secondaryy] = [secondaryy, mainn];
// // console.log(main, secondary); // Vegetarian Italian


// // //Nested Destructuring
// // //Handling nested arrays:

// // const nested = [2, 4, [5, 6]];
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k); // 2 5 6


// // //Default Values
// // //Setting default values for variables:

// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r); // 8 9 1


// // //Practical Application
// // //Returning multiple values from a function:

// // const order = (starterIndex, mainIndex) => {
// //   return [restaurant.starterMenu[starterIndex], restaurant.mainMenu[mainIndex]];
// // };
// // const [starter, mainCourse] = order(2, 0);
// // console.log(starter, mainCourse); // Garlic Bread Pizza

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //107. Rest Pattern and Parameters
// //1) arrays
// //spread in right side 
// const arg = [1,2, [3,4]];

// //rest in left side
// const [a, b, ... others] = [1,2,3,'Mimi','Georgy', 'Nikolay'];
// console.log(a,b, others);

// //combo
// const [c, , d, ...otherFood]=[... restaurants.mainMenu, ...restaurants.starterMenu]
// console.log(c, d, otherFood);

// //2)object
// const {sat, ...otherDays} = restaurants.openingHours;
// console.log(sat, otherDays);

// //3)functions

// const add = function (...numbers){
//   let sum =0;
//   for(let i=0; i<numbers.length; i++){
  sum += number[1]
//     console.log(sum);
//   }

// }

// add(3,5,5,7,6);
// add(2,3,4,4);
// add(3,6,22,44,5,8);
let x = [1,2,3]
add(...x)
// // String Methods Practice

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
//24524

