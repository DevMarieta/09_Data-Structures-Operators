// // //at first
// 'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section
const restaurants = {
  name: 'Classico Italiano',
location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   openingHours: {
     thu: {
       open: 12,       close: 22,
     },
    fri: {
       open: 11,
       close: 23,
     },
     sat: {
       open: 0, // Open 24 hours
      close: 24,
    },
  },
};

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

 //Simple Destructuring
 //Extracting values from an array:

 // const [first, second] = restaurant.categories;

//Skipping Elements

 // const [main, , secondary] = restaurant.categories;
 // console.log(main, secondary); // Italian Vegetarian

  //Switching Variables

// let [mainn, secondaryy] = ['Italian', 'Vegetarian'];
 // [mainn, secondaryy] = [secondaryy, mainn];
/// console.log(main, secondary); // Vegetarian Italian

 //Nested Destructuring
 //Handling nested arrays:

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // 2 5 6

///Default Values
///Setting default values for variables:

 // const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 1

//Practical Application
 //Returning multiple values from a function:

// // const order = (starterIndex, mainIndex) => {
// //   return [restaurant.starterMenu[starterIndex], restaurant.mainMenu[mainIndex]];
// // };
// // const [starter, mainCourse] = order(2, 0);
// // console.log(starter, mainCourse); // Garlic Bread Pizza

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Rest Pattern and Parameters
//1) arrays
// //spread in right side
// const arg = [1,2, [3,4]];

// //rest in left side
// const [a, b, ... others] = [1,2,3,'Mimi','Georgy', 'Nikolay'];
// console.log(a,b, others);
//combo
// const [c, , d, ...otherFood]=[... restaurants.mainMenu, ...restaurants.starterMenu]
// console.log(c, d, otherFood);

// //2)object
// const {sat, ...otherDays} = restaurants.openingHours;
// console.log(sat, otherDays);

// //3)functions

// const add = function (...numbers){
//   let sum =0;
//   for(let i=0; i<numbers.length; i++){
//sum += number[1]
//     console.log(sum);
//   }

// }

// add(3,5,5,7,6);
// add(2,3,4,4);
// add(3,6,22,44,5,8);
//let x = [1,2,3]
//add(...x)

//Short Circuiting (&& and ||)
// Use any data type, return eny data type, short - circuiting(късо съединение)
// console.log(3 || 'Mariya');
// console.log('' || 'Mariya');
// console.log(true || 0);
// console.log(undefined || null);
/*Късо съединение- когато единят операнд е булева стойност а втората не е,
тя изобщо няма да бъде разгледана.
Дори един операнд да бъде верен, резултат от сравнението ще бъде true-
true/true = true;true/false = true;false/false = false */

// В JavaScript операторът за логическо "ИЛИ" (||) връща първата истинна (truthy) стойност,
// която срещне. Ако няма такива, връща последната лъжлива (falsy) стойност.

console.log(null || undefined || 'Mimi' || '' || 3 || true | false);

//Practis:
// const guests1 = restaurants.numGuests ? restaurants.numGuests : 10
// console.log(guests1);

