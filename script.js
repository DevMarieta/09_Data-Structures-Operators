// // // //at first
// // 'use strict';

// // // // Data needed for a later exercise
// // // const flights =
// // //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // // Data needed for first part of the section
// const restaurants = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // // //at first
// // // //Understanding Array Destructuring in JavaScript

// // // //Basics of Destructuring Without Destructuring:

// // //   const arr = [1, 2, 3];
// // //   const a = arr[0];
// // //   const b = arr[1];
// // //   const c = arr[2];

// // // //With Destructuring:

// // //   const [x, y, z] = arr;

// // // const restaurant = {
// // //   name: 'Classico Italiano',
// // //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// // //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// // //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// // // };

// //Simple Destructuring
// //Extracting values from an array:

// // const [first, second] = restaurant.categories;

// //Skipping Elements

// // const [main, , secondary] = restaurant.categories;
// // console.log(main, secondary); // Italian Vegetarian

// //Switching Variables

// // let [mainn, secondaryy] = ['Italian', 'Vegetarian'];
// // [mainn, secondaryy] = [secondaryy, mainn];
// /// console.log(main, secondary); // Vegetarian Italian

// //Nested Destructuring
// //Handling nested arrays:

// // const nested = [2, 4, [5, 6]];
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k); // 2 5 6

// ///Default Values
// ///Setting default values for variables:

// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r); // 8 9 1

// //Practical Application
// //Returning multiple values from a function:

// // // const order = (starterIndex, mainIndex) => {
// // //   return [restaurant.starterMenu[starterIndex], restaurant.mainMenu[mainIndex]];
// // // };
// // // const [starter, mainCourse] = order(2, 0);
// // // console.log(starter, mainCourse); // Garlic Bread Pizza

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Rest Pattern and Parameters
// //1) arrays
// // //spread in right side
// // const arg = [1,2, [3,4]];

// // //rest in left side
// // const [a, b, ... others] = [1,2,3,'Mimi','Georgy', 'Nikolay'];
// // console.log(a,b, others);
// //combo
// // const [c, , d, ...otherFood]=[... restaurants.mainMenu, ...restaurants.starterMenu]
// // console.log(c, d, otherFood);

// // //2)object
// // const {sat, ...otherDays} = restaurants.openingHours;
// // console.log(sat, otherDays);

// // //3)functions

// // const add = function (...numbers){
// //   let sum =0;
// //   for(let i=0; i<numbers.length; i++){
// //sum += number[1]
// //     console.log(sum);
// //   }

// // }

// // add(3,5,5,7,6);
// // add(2,3,4,4);
// // add(3,6,22,44,5,8);
// //let x = [1,2,3]
// //add(...x)

// //Short Circuiting (&& and ||)
// // Use any data type, return eny data type, short - circuiting(късо съединение)
// // console.log(3 || 'Mariya');
// // console.log('' || 'Mariya');
// // console.log(true || 0);
// // console.log(undefined || null);
// /*Късо съединение- когато единят операнд е булева стойност а втората не е,
// тя изобщо няма да бъде разгледана.
// Дори един операнд да бъде верен, резултат от сравнението ще бъде true-
// true/true = true;true/false = true;false/false = false */

// // В JavaScript операторът за логическо "ИЛИ" (||) връща първата истинна (truthy) стойност,
// // която срещне. Ако няма такива, връща последната лъжлива (falsy) стойност.

// //"ИЛИ" (||) 
// // console.log(null || undefined || 'Mimi' || '' || 3 || true | false);
// // restaurants.newGuests = 0;
// // //Practis:по-лесен метод за задаване на стойности по подразбиране изявление if else
// // const guests1 = restaurants.numGuests ? restaurants.numGuests : 10;
// // console.log(guests1);
// // //метод за задаване на стойности по подразбиране изявление if else
// // restaurants.numGuests = 0;
// // let guests2 = restaurants.numGuests || 10;
// // console.log(guests2);

// // console.log('--AND--');
// // console.log(0 && 'Mimi');
// // console.log(2 && 'Mimi');
// // console.log('a'&& 2 && null && 'b');
// // //spira i printira do pyrva stoynost 'false'
// // //practical example:
// // if(restaurants.orderPizza){
// //   restaurants.orderPizza('mushrooms','spinach')
// // }
// // restaurants.orderPizza && restaurants.orderPizza ('mushrooms','spinach')

// // //109- (??)
// // const guest = restaurants.newGuests ?? 10;
// // console.log(guest);



// // //
// // const guestCorect = restaurants.numGuests ?? 10;
// // console.log(guestCorect);
// // //
// // // Пример със стойност 0, която е falsy
// // let numGuests = 0;
// // let guests = numGuests || 10;
// // console.log(guests); // Изход: 10

// // // Пример с празен стринг, който е falsy
// // let guestName = '';
// // let name = guestName || 'Anonymous';
// // console.log(name); // Изход: Anonymous

// // // Пример с null
// // let guestID = null;
// // let id = guestID || 999;
// // console.log(id); // Изход: 999
// // //
// // // Пример със стойност 0, която не е null или undefined
// // let numGuests1 = 0;
// // let guests3 = numGuests1 ?? 10;
// // console.log(guests3); // Изход: 0

// // // Пример с празен стринг, който не е null или undefined
// // let guestName1 = '';
// // let name1 = guestName1 ?? 'Anonymous';
// // console.log(name1); // Изход: ""

// // // Пример с null
// // let guestID1 = null;
// // let id1 = guestID1 ?? 999;
// // console.log(id1); // Изход: 999

// // // Пример с undefined
// // let guestAge;
// // let age = guestAge ?? 21;
// // console.log(age); // Изход: 21
// // //// Употреба на логическо ИЛИ (`||`)

// // // 1. **Задаване на стойност по подразбиране:**
// // //    - В случаи, когато искаме да осигурим стойност по подразбиране, ако дадена променлива има лъжлива стойност.

// // function getDiscount(user) {
// //   // Ако user.discount е 0 (например специална промоция), стойността по подразбиране ще бъде използвана
// //   let discount = user.discount || 10;
// //   return discount;
// // }

// // let user5 = { discount: 0 };
// // console.log(getDiscount(user5)); // Изход: 10 (0 е лъжлива стойност)

// // let user4 = { discount: 15 };
// // console.log(getDiscount(user4)); // Изход: 15

// // // 2. **Осигуряване на стойност по подразбиране за входни данни:**
// // //    - Ако входът е празен стринг, ще се използва стойност по подразбиране.

// // function greet(name) {
// //   // Ако name е празен стринг, ще се използва "Guest"
// //   let userName = name || 'Guest';
// //   console.log(`Hello, ${userName}!`);
// // }

// // greet(''); // Изход: Hello, Guest!
// // greet('Alice'); // Изход: Hello, Alice!

// // // Употреба на нулев съюз (`??`)

// // // 1. **Задаване на стойност по подразбиране само за `null` или `undefined`:**
// // //    - В случаи, когато искаме да осигурим стойност по подразбиране само ако променливата е `null` или `undefined`.

// // function getUserAge(user) {
// //   // Ако user.age е null или undefined, ще се използва 21
// //   let age = user.age ?? 21;
// //   return age;
// // }

// // let user1 = { age: 0 };
// // console.log(getUserAge(user1)); // Изход: 0 (0 не е null или undefined)

// // let user2 = { age: null };
// // console.log(getUserAge(user2)); // Изход: 21 (null е)

// // let user3 = {};
// // console.log(getUserAge(user3)); // Изход: 21 (age е undefined)

// // // 2. **Присвояване на стойност по подразбиране при зареждане на конфигурация:**
// // //    - Употреба при конфигурационни настройки, където искаме да осигурим стойност
// // //    по подразбиране само при липса на конфигурация.

// // function getConfig(config) {
// //   // Ако config.maxRetries е null или undefined, ще се използва 3
// //   let maxRetries = config.maxRetries ?? 3;
// //   return maxRetries;
// // }

// // let config1 = { maxRetries: 0 };
// // console.log(getConfig(config1)); // Изход: 0 (0 не е null или undefined)

// // let config2 = { maxRetries: null };
// // console.log(getConfig(config2)); // Изход: 3 (null е)

// // let config3 = {};
// // console.log(getConfig(config3)); // Изход: 3 (maxRetries е undefined)

// // // ### Обобщение

// // // - **Логическо ИЛИ (`||`)** се използва, когато искате да осигурите стойност по подразбиране за всички лъжливи стойности
// // // (`false`, `0`, `""`, `null`, `undefined`, `NaN`).
// // // - **Нулев съюз (`??`)** се използва, когато искате да осигурите стойност по подразбиране само за
// // // `null` или `undefined`, оставяйки другите лъжливи стойности непроменени.

// // // ??
// // const foo = null ?? 'default string';
// // console.log(foo);
// // // Expected output: "default string"

// // const baz = 0 ?? 42;
// // console.log(baz);
// // // Expected output: 0
// // function displayUserProfile(user) {
// //   let userId = user.id ?? "Unknown ID";
// //   let userName = user.name ?? "Anonymous";
  
// //   // Using optional chaining with nullish coalescing
// //   let userTheme = user.preferences?.theme ?? "default-theme";
// //   let userLanguage = user.preferences?.language ?? "en";
// //   let userEmail = user.contact?.email ?? "No email provided";
// //   let userPhone = user.contact?.phone ?? "No phone number provided";

// //   console.log(`User ID: ${userId}`);
// //   console.log(`Name: ${userName}`);
// //   console.log(`Theme: ${userTheme}`);
// //   console.log(`Language: ${userLanguage}`);
// //   console.log(`Email: ${userEmail}`);
// //   console.log(`Phone: ${userPhone}`);
// // }

// // // Calling the function with the example user profile
// // displayUserProfile(userProfile);
// // ////////////
// // let user = {
// //   name: 'Alice',
// //   preferences: {
// //     theme: null
// //   }
// // };

// // let theme = user.preferences?.theme ?? 'default-theme';
// // console.log(theme); // "default-theme"
// // /////////
// // function greet(name) {
// //   name = name ?? 'Guest';
// //   console.log(`Hello, ${name}!`);
// // }

// // greet('Alice'); // "Hello, Alice!"
// // greet(null);    // "Hello, Guest!"
// // greet();        // "Hello, Guest!"
// // /////////
// // let settings = {
// //   user: {
// //     name: 'Bob'
// //   }
// // };

// // let userName = settings.user.name ?? 'Anonymous';
// // let userAge = settings.user.age ?? 30;

// // console.log(userName); // "Bob"
// // console.log(userAge);  // 30
// /////////////
// let numbers = [null, undefined, 0, 2, 3];
// let [first = 1, second = 1, third = 1] = numbers;

// first = first ?? 10;
// second = second ?? 10;
// third = third ?? 10;

// console.log(first);  // 10
// console.log(second); // 1
// console.log(third);  // 0
// //////
// // Дефиниране на функции за демонстрация на различни сценарии

// // Функция за итериране през масив
// function iterateArray() {
//   let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

//   console.log('Iterating through array:');
//   for (let fruit of fruits) {
//       console.log(fruit);
//   }
//   console.log('-----------------------------------');
// }

// // Функция за итериране през низ
// function iterateString() {
//   let greeting = 'hello world';

//   console.log('Iterating through string:');
//   for (let char of greeting) {
//       console.log(char);
//   }
//   console.log('-----------------------------------');
// }

// // Функция за итериране през Set
// function iterateSet() {
//   let mySet = new Set(['apple', 'banana', 'cherry', 'apple']); // Дубликатите в Set ще бъдат игнорирани

//   console.log('Iterating through Set:');
//   for (let fruit of mySet) {
//       console.log(fruit);
//   }
//   console.log('-----------------------------------');
// }

// // Функция за итериране през Map
// function iterateMap() {
//   let myMap = new Map([
//       ['a', 'apple'],
//       ['b', 'banana'],
//       ['c', 'cherry'],
//       ['d', 'date'],
//       ['e', 'elderberry']
//   ]);

//   console.log('Iterating through Map:');
//   for (let [key, value] of myMap) {
//       console.log(`${key}: ${value}`);
//   }
//   console.log('-----------------------------------');
// }

// // Функция за итериране през обект с итериуеми свойства
// function iterateObjectWithIterableProperties() {
//   let user = {
//       name: 'John',
//       hobbies: ['reading', 'hiking', 'coding'],
//       favoriteBooks: new Set(['1984', 'Brave New World', 'Fahrenheit 451']),
//       contacts: new Map([
//           ['email', 'john.doe@example.com'],
//           ['phone', '123-456-7890']
//       ])
//   };

//   console.log('Iterating through object with iterable properties:');

//   // Итериране през масива от хобита
//   console.log('Hobbies:');
//   for (let hobby of user.hobbies) {
//       console.log(hobby);
//   }

//   // Итериране през Set от любими книги
//   console.log('Favorite Books:');
//   for (let book of user.favoriteBooks) {
//       console.log(book);
//   }

//   // Итериране през Map от контакти
//   console.log('Contacts:');
//   for (let [type, contact] of user.contacts) {
//       console.log(`${type}: ${contact}`);
//   }

//   console.log('-----------------------------------');
// }

// // Асинхронна функция за демонстрация на for-await-of
// async function iterateAsync() {
//   let asyncValues = [
//       new Promise(resolve => setTimeout(() => resolve('Async Value 1'), 1000)),
//       new Promise(resolve => setTimeout(() => resolve('Async Value 2'), 500)),
//       new Promise(resolve => setTimeout(() => resolve('Async Value 3'), 1500))
//   ];

//   console.log('Iterating through async values:');
//   for await (let value of asyncValues) {
//       console.log(value);
//   }
//   console.log('-----------------------------------');
// }

// // Извикване на всички функции за демонстрация
// function runAllExamples() {
//   iterateArray();
//   iterateString();
//   iterateSet();
//   iterateMap();
//   iterateObjectWithIterableProperties();
//   iterateAsync();
// }

// // Стартиране на всички примери
// runAllExamples();
// /////
// // Enhanced Object Literals

// // Пример 1: Създаване на обект със съкратени свойства и методи
// function createPerson(name, age, job) {
//   return {
//     name,
//     age,
//     job,
//     introduce() {
//       console.log(`Hi, I'm ${this.name}, a ${this.age} years old ${this.job}.`);
//     }
//   };
// }

// let person1 = createPerson('Alice', 25, 'developer');
// person1.introduce(); // Hi, I'm Alice, a 25 years old developer.

// // Пример 2: Използване на изчислявани имена на свойства
// let dynamicKey = 'dynamicProperty';
// let count = 0;

// let obj1 = {
//   [`prop_${count++}`]: 'value1',
//   [`prop_${count++}`]: 'value2',
//   [dynamicKey]: 'I am dynamic!'
// };

// console.log(obj1);
// // { prop_0: 'value1', prop_1: 'value2', dynamicProperty: 'I am dynamic!' }

// // Пример 3: Кратък синтаксис за задаване на прототип и съчетаване на всички функции
// let defaultAge = 25;
// let job = 'developer';
// let proto = {
//   greet() {
//     console.log('Hello from prototype!');
//   }
// };

// function createEnhancedPerson(name, age = defaultAge) {
//   return {
//     __proto__: proto,
//     name,
//     age,
//     job,
//     ['job_' + job]: job,
//     introduce() {
//       console.log(`Hi, I'm ${this.name}, a ${this.age} years old ${this.job}.`);
//     }
//   };
// }

// let enhancedPerson = createEnhancedPerson('Bob');
// enhancedPerson.introduce(); // Hi, I'm Bob, a 25 years old developer.
// enhancedPerson.greet(); // Hello from prototype!
// console.log(enhancedPerson); // { name: 'Bob', age: 25, job: 'developer', job_developer: 'developer' }

// // Традиционни обектни литерали за сравнение
// let person2 = {
//   name: 'John',
//   age: 30,
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// console.log(person2); // { name: 'John', age: 30, greet: [Function: greet] }
// person2.greet(); // Hello, my name is John

// // Усъвършенствани обектни литерали
// let name = 'John';
// let age = 30;

// let person3 = {
//   name,
//   age,
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// console.log(person3); // { name: 'John', age: 30, greet: [Function: greet] }
// person3.greet(); // Hello, my name is John
// //////////////
// // Примерен обект с вложени свойства
// const user = {
//   name: "Иван",
//   address: {
//       city: "София",
//       postalCode: "1000"
//   }
// };

// // Без опционално верижене, трябва да проверяваме всяко ниво на обекта
// const postalCode1 = user && user.address && user.address.postalCode;
// console.log(postalCode1); // Извежда "1000"

// // С опционално верижене можем да избегнем тези проверки
// const postalCode2 = user?.address?.postalCode;
// console.log(postalCode2); // Извежда "1000"

// // Ако някое от свойствата е undefined или null, резултатът ще бъде undefined
// const country = user?.address?.country;
// console.log(country); // Извежда undefined

// // Пример с масиви
// const users = [
//   { name: "Иван", age: 30 },
//   { name: "Мария", age: 25 }
// ];

// // Достъпване на елемент от масива с опционално верижене
// const secondUserName = users[1]?.name;
// console.log(secondUserName); // Извежда "Мария"

// // Опит за достъпване на несъществуващ елемент
// const thirdUserName = users[2]?.name;
// console.log(thirdUserName); // Извежда undefined

// // Пример с функции
// const person = {
//   getName: () => "Георги"
// };

// // Викаме функция с опционално верижене
// const personName = person.getName?.();
// console.log(personName); // Извежда "Георги"

// // Опит за викаме на несъществуваща функция
// const nonExistentFunctionResult = person.nonExistentFunction?.();
// console.log(nonExistentFunctionResult); // Извежда undefined
// ///////////
// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020
// };

// // Обхождане на ключовете
// Object.keys(car).forEach(key => {
//   console.log(`Key: ${key}`); // Извежда: brand, model, year
// });

// // Обхождане на стойностите
// Object.values(car).forEach(value => {
//   console.log(`Value: ${value}`); // Извежда: Toyota, Corolla, 2020
// });

// // Обхождане на двойките ключ-стойност
// Object.entries(car).forEach(([key, value]) => {
//   console.log(`Entry: ${key} - ${value}`); // Извежда: brand - Toyota, model - Corolla, year - 2020
// });
// ///
// const user = {
//   name: "Иван",
//   age: 30,
//   city: "София"
// };

// // Използване на Object.keys() за обхождане на ключовете
// const keys = Object.keys(user);

// keys.forEach(key => {
//   console.log(key); // Извежда: name, age, city
// });
/////////////
<!DOCTYPE html>
<html>
<head>
    <title>Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .calculator {
            max-width: 400px;
            margin: 100px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .calculator input, .calculator select {
            width: calc(100% - 22px);
            padding: 10px;
            margin-bottom: 10px;
        }
        .calculator button {
            padding: 10px 20px;
        }
    </style>
</head>
<body>

<div class="calculator">
    <h2>Calculator</h2>
    <label for="num1">First Number:</label>
    <input type="number" id="num1" required>
    <label for="num2">Second Number:</label>
    <input type="number" id="num2" required>
    <label for="operation">Operation:</label>
    <select id="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
    </select>
    <button onclick="calculate()">Calculate</button>
    <p id="result"></p>
</div>

<script>
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Invalid input. Please enter numerical values.";
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = "Error! Division by zero.";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid operation.";
        }
    }

    document.getElementById('result').textContent = "The result is: " + result;
}
</script>

</body>
</html>
