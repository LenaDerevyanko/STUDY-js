// switch


// напиши скрипт выбора стоимости отеля по количеству звезд
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Если в переменной stars что - то кроме чисел 1 - 5, выведи строку
// 'Такого количества звезд нет'

// const stars = 5;
// let price;
// if (stars === 1) {
//     price = 20;
// }
// else if (stars === 2) {
//     price = 30;
//  }
// else if (stars === 3) {
//     price = 50;
//  }
// else if (stars === 4) {
//     price = 70;
// }
//  else if (stars === 5) {
//     price = 120;
// }
// else {
//     console.log('Такого количества звезд нет');
// }
// console.log(price);

// переписываем на свич
// const stars = 5;
// let price;
// switch (stars) {
//     case 1:
//         price = 20;
//         break;
    
//      case 2:
//         price = 30;
//         break;
    
//     case 3:
//         price = 50;
//         break;
    
//     case 4:
//         price = 70;
//         break;
    
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('Такого количества звезд нет');
// }
// console.log(price);

// const stars = 1;
// let price;
// if (stars === 1 || stars === 2) {
//     price = 20;
// }
// else if (stars === 3 || stars === 4) {
//     price = 30;
// }
// else if (stars === 5) {
//     price = 50;
// }
// else {
//     console.log('Такого количества звезд нет');
// }
// console.log(price);


// переписиваем на свич / только строгое равенство
// const stars = 3;
// let price;
// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('Такого количества звезд нет');
// }
// console.log(price);


// ЗАДАЧА
// Напиши скрипт выбора опции доставки  товара.
// Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта

// В переменную message записать сообщение в зависимости от опций
//     - Вы сможете забрать товар завтра с 12.00 в нашем офисе
//     - Курьер доставит заказ завтра с 9:00 до 18:00
//     - Посылка будет отправлена сегодня
//     - Вам перезвонит мернеджер

// 1. Сделать переменные
// const option = 3;
// let message = '';
// // 2. Сделать switch 1, 2, 3
// // 3. В каждом кейсе записать message строку
// switch (option) {
//     case 1:
//         message = 'Вы сможете забрать товар завтра с 12.00 в нашем офисе'
//         break;
//     case 2:
//         message = 'Курьер доставит заказ завтра с 9:00 до 18:00'
//         break;
//     case 3:
//         message = 'Посылка будет отправлена сегодня'
//         break;
//     default:
//         message = 'Вам перезвонит мернеджер';
// }
// // 4. сделать лог message
// console.log(message);



// Цикл For(один кусочек вывести произвольное количество раз)
// 1 класический
// for (let i = 0; i < 25; i+=1) {
//     console.log(i);
// }
// console.log('bvfvnjvn');
// 2
// for (let i = 10; i >= 0; i-=2) {
//     console.log(i);
// }
// console.log('bvfvnjvn');
// 3
// for (let i = 0; i < 40; i+=3) {
//    console.log(i);
// }


// Задача 2
// Напиши скрипт который подсчитывает общую сумму зарплат работников
//     *  количество работников хранится в переменной employees
//     *  зарплата каждого это случайное число от 500 до 5000
//     * записать сумму в переменную totalSalary и вывести в консоль
//         * /
// Решение
// 1 Сделать переменные
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 8;
// let totalSalary = 0;
// // 2 перебрать работников в цикле
// // 3 сгенерить случайную ЗП
// // 4 прибавить к ТОТАЛУ
// // 5 лог
// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary
//     )
//     console.log(`ЗП работника номер  ${i} - ${salary}`);
//     totalSalary += salary;
//     // console.log('totalSalary: ', totalSalary);
    
// }

// console.log('totalSalary: ', totalSalary);


// Задача 3
// Напиши скрипт который подсчитывает сумму всех четных чисел,
// которые входят в диапазон чисел в переменных от min до maх,
// Например если min = 0 и max = 5, то диапазон от 0 - 5, и в нем два четных числа - 2 и 4
// их сумма 6.
// const min = 10;
// const max = 50;
// let total = 0;

// фор с шагом от мын до макс с шагом в 1
// проверяем остаток от деления
// пишем сумму
// for (let i = min; i <= max; i+=1) {
//     // console.log(i);
//     if (i % 2 === 0) {
//         console.log('Четное:', i);
//         total += i;
//     }
// }
// console.log('total: ', total);

// логика от обратного если не равно, пропускай
// for (let i = min; i <= max; i+=1) {
//     if (i % 2 !== 0) {
//         console.log('Не четное:', i);
//         continue;
//     }
//     console.log('Четное:', i);
//         total += i;
// }
// console.log('total: ', total);





// Задача 4
// Напиши скрипт обработки покувпки в магазине
// - Баланс пользователя хранится в переменной balance
// - сумма покупки хранится в переменной payment
// - Перед проверкой вывести сообщение:
// "Общая стоимость заказа [число] кредитов.
// Проверяем количество доступных средств на счету"
// - Если сумма покупки не превышает баланс:
//     * вычесть из баланса сумму покупки
//     * Вывести сообщение "На счету осталось [число] кредитов"
// - Если сумма покупки превышает баланс:
//     * Вывести сообщение "На счету недостаточно средств для проведения операции!"
// -В конце вывести сообщение "Операция завершена"
// "Всё хорошо, снимаем деньги за покупку"
// let balance = 10000;
// const payment = 5000;
// console.log(`Общая стоимость заказа ${payment} кредитов.
// Проверяем количество доступных средств на счету`,
// );
// if (balance >= payment) {
//     console.log('OK');
//     balance -= payment;
//     // balance = balance-payment
//     console.log('Все хорошо, снимаем деньги за покупку!');
//     console.log(`На счету осталось ${balance} кредитов`);
// }
// else {
//     console.log('На счету недостаточно средств для проведения операции!');
// }
// console.log('Операция завершена');



// Задача 5
// Напиши скрипт подсчета суммі покупки со скидкой в зависимости
// от потраченой суммі за все время(партнерская программа)

//     - Общая сумма потраченого хранится в totalSpent
//     - Сумма текущего платежа хранится в переменной payment
//     - скидка хранится discount
    
//     - Если потрачено от[100 - 1000)999, бронзовый партнер скидка 2 %
//     - Если потрачено от[1000 - 5000)4999, серебряный партнер скидка 5 %
//     - Если потрачено больше  5000 золотой партнер скидка 10 %
//     - Если потрачено меньше 100 не партнер скидка 0 %
        
//     В результате вывести сообщение
//    "Оформляем заказ на сумму __ со скидкой__ %"
// let totalSpent = 100000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовый партнер, скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Серебряный партнер, скидка 5%');
//     discount = 0.05;
// } else  if (totalSpent >= 5000){
//     console.log('Золотой партнер, скидка 10%');
//     discount = 0.1
// } else {
//     console.log('Не партнер, скидка 0%');
// }
// payment -= payment * discount;
// // payment = payment - payment * discount
// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);
// totalSpent += payment;
// console.log(`Общая сумма потрачена в магазине ${totalSpent}`);




const btnAdd = document.querySelector('button[data-add]');
const btnReset = document.querySelector('button[data-reset]')
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');


console.log(btnAdd);
console.log(valueInput);

let total = 0;

btnAdd.textContent = 'додати';
btnAdd.addEventListener ('click', function () {
    console.log('отримали');
    const value = Number(valueInput.value);

    console.log(value);

    total += value;
    outputEl.textContent = total;
    valueInput.value = '';
})
btnReset.addEventListener('click', function () {
    total = 0;
    outputEl.textContent = total;
})
