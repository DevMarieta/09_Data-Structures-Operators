'use strict';

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);


// ///////////////////////////////////////
// // Primitives vs. Objects in Practice

// // Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName; 
// */
// // 
// //let restorant = {
//     address: 'Sofia; Ovcha Kupel, str: Geo Milev',
//     name: 'Mariya and Viki',
//     menu: ['Pizza Caprichoza', 'Pasta Italianam', 'Tartaleta', 'Gelato'],
//     asist1: {
//         room1: ['Gosho', 'Nikol'],
//         room2: ['Viki', 'Grig', 'Iva']
//     },
//     asist2: {
//         room20: {
//             name1: ['Iva', 'Ivan', 'Mariya']
//         }
//     },
//     order: function (varni1, varni2) {
//         return [this.menu[varni1], this.asist1.room1[varni2]]; // Корекция на пътя до room1
//     }
// };

// // Пример за извикване на метода order с параметри
// let result = restorant.order(0, 1); // Подаваме индексите за menu и room1
// console.log(result); // Трябва да изведе избраните елементи от menu и room1

////
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
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
  const {name,mainMenu,openingHours} = restaurant;
  console.log(name,mainMenu,openingHours);
  /////////////////
  Деструктуриране на Масиви и Обекти:
Масиви: Извличане на стойности от масив в отделни променливи.
javascript
Copy code
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1, 2, 3
Обекти: Извличане на свойства от обект в отделни променливи със същите или нови имена.
javascript
Copy code
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 }, // Open 24 hours
  }
};

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);
Промяна на Имена и Стойности по Подразбиране при Деструктуриране:
Извличане на свойства с промяна на името и задаване на стойности по подразбиране.
javascript
Copy code
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] "starterMenu items"
Мутиране на Променливи:
Мутиране на вече декларирани променливи чрез деструктуриране.
javascript
Copy code
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({a, b} = obj);
console.log(a, b); // 23, 7
Деструктуриране в Параметри на Функция:
Използване на деструктуриране директно в параметрите на функция за опростяване на кода.
javascript
Copy code
const orderPizza = ({ mainIngredient = 'Cheese', time = '20:00', address }) => {
  console.log(`Order received! Pizza with ${mainIngredient} will be delivered to ${address} at ${time}`);
};

orderPizza({
  address: 'Via del Sole, 21',
  mainIngredient: 'Mushrooms'
});
Вложено Деструктуриране:
Извличане на стойности от вложени обекти.
javascript
Copy code
const nested = { starter: 'Garlic Bread', mainCourse: { pizza: 'Margherita', pasta: 'Pomodoro' } };
const { starter, mainCourse: { pizza, pasta } } = nested;
console.log(starter, pizza, pasta); // Garlic Bread, Margherita, Pomodoro