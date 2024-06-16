// // Функция за извличане на данни от API
// async function fetchData() {
//     try {
//         let response = await fetch('https://api.example.com/data');
//         let data = await response.json();
//         displayNotification(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Функция за показване на известие
// function displayNotification(data) {
//     // Предполага се, че използвате библиотека за известия като Toastr
//     toastr.success(`Data fetched: ${data.message}`);
// }

// // Функция за добавяне на бутон към форма
// function addCustomButton() {
//     // Намиране на целевата форма
//     let form = document.querySelector('#targetForm');

//     // Създаване на нов бутон
//     let button = document.createElement('button');
//     button.innerText = 'Fetch Data';
//     button.onclick = fetchData;

//     // Добавяне на бутона към формата
//     form.appendChild(button);
// }

// // Инициализиране на къстамизацията, когато документът е зареден
// document.addEventListener('DOMContentLoaded', (event) => {
//     addCustomButton();
// });
///////////////
