// https://developer.mozilla.org/ru/



// const a = 'Переменная "а" в script-1.js';
// console.log(a);
// const b = 'Переменная "b" в script-1.js';
// console.log(b);
// const с = 'Переменная "с" в script-1.js';
// console.log(с);

// const a = 'Переменная "а" в script-2.js';
// const b = 'Переменная "b" в script-2.js';
// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = 'Добро пожаловать';
// const isOpen = true;
// const shouldConfirm = false;


// const type = typeof isOpen;
// console.log(type);

// console.log('до');
// alert('Увага');
// console.log('после');

// Всплывающее окно confirm
1
// const message = 'Хотите продлить подписку';
// const shouldRenew = confirm(message);
// console.log(shouldRenew);
2
// const shouldRenew = confirm('Хотите продлить подписку');
// console.log(shouldRenew);

// Всплывающее окно с возможностью ввести даные prompt
// let quantity = prompt('Введите количество товаров');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// Числа (вырезать число до точки 50)
1.
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);
// console.log(typeof result);
2.
// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);
// console.log(typeof elementWidth);

// Числа (вырезать число полностью 200.74)
1.
// let elementWidth = '200.74px';
// const result = Number.parseFloat(elementWidth);
// console.log(result);
// console.log(typeof result);
2.
// let elementWidth = '200.74px';
// elementWidth = Number.parseFloat(elementWidth);
// console.log('elementWidth:', elementWidth);
// console.log(typeof elementWidth);

// Зарплата
// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// console.log(salary);
// console.log(typeof salary);

// Приведение/преобразование к числу
// let quantity = '30';
// let value = 'Эту строку не возможно привести к числу';
// console.log(Number(quantity));
// console.log(Number(value));

// Обьект Math
// const base = 2;
// const power = 5;
// (число в степени)pow
// const result = Math.pow(base, power);
// или вот так
// const result = base ** power;
// console.log(result);
// exponent operator
// два в третей степени
// console.log(2 ** 3);
// квадратный корень sqrt


// задача 1
// // 1. Попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);
// // 2. Попросить ввести степень и сохранить в переменную
// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);
// // 3.Возвести введенные данные в степени и вывести
// const result = base ** power;
// console.log(result);



// Math.random() * (max - min) + min
// const max = 80;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// пример изменения рондомно цвета фона
// const colors = ['tomato', 'orange', 'teal', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;
// const index =  Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// длинна строки
// const message = 'в этой стоке 26 символов  ';
// console.log(message);
// console.log(message.length);

// конкатенация строк(сшить)
// const firstName = 'Chalsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// напиши скрип который выведет строку в формате
// Гость  x y поселяется в номере  z q
// подставь x y z q вместо значение переменных
// const room = 716;
// const type = 'VIP';

// так делать не надо
// const welcomeMsg =
//     'Гость' +
//     ' ' +
//     firstName +
//     ' ' +
//     lastName +
//     ' ' +
//     'поселяется в номере' +
//     ' ' +
//     type +
//     ' ' +
//     room;
//     console.log(welcomeMsg);

// как надо делать
// const welcomeMsg = `Гость  ${firstName} ${lastName} поселяется в номере ${type} ${room}`;
// console.log(welcomeMsg);


// const quantity = 10;
// const orderMsg = `Вы заказываете ${quantity} холодильников.`;
// console.log(orderMsg);



// приведение к нижнему или к верхнему регистру
// let brand = prompt('Давай бренд');
// brand = brand.toUpperCase();
// brand = brand.toLowerCase();
// console.log(brand);
// let brand = 'samSung';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);



// Поиск в строке
// const blackListedWord1 = 'спам';
// const blackListedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите';
// const string3 = 'Рекламная кампания # Fatlivesmater';

// console.log(string1.includes(blackListedWord1));
// console.log(string1.includes(blackListedWord2));

// console.log(string2.includes(blackListedWord1));
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blackListedWord2));

// console.log(string3.includes(blackListedWord1));
// console.log(string3.includes(blackListedWord2));



// Операторы сравнения
// console.log(15 > 10);


// Приведение, преобразование типов к числу!!!!
// console.log('10' > 5);
// console.log(Number('10'));


// Напиши скрипт который показывает входит ли в отрезок х1 - х2
// const x1 = 10;
// const x2 = 30;
// const number = 63;
// console.log(`Число ${number}попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number}попадает в отрезок после ${x2}?`, number > x2);
// const result1 = number > x1 && number < x2;
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}?`, result1);
// const result2 = number < x1 || number > x2;
// console.log(`Число ${number} попадает в отрезок до ${x1} после ${x2}?`, result2);

// chat напишите скрипт который дает возможность открыть чат с пользователем, для этого он должен быть
// 1.Другом
// 2.Онлайн
// 3.без режима не беспокоить
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат?', canOpenChat);


// Написать скрип проверки подписки пользователя при доступе к контенту
// const subscription = 'pro';
// 1.если пользователь pro или vip тогда есть доступ
// const canAccessContent = subscription === 'pro' || subscription === 'vip';
// console.log('Есть доступ к контенту', canAccessContent);


// Оператор ветвления
// if (40 > 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y');
// }

// const salary = 6000;
// if (salary < 500) {
//     console.log('Уровень 1');
// } else if (salary > 500 && salary < 1500) {
//     console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//     console.log('Уровень 3');
// } else {
//     console.log('Уровень 4');
// }


// Тернарный оператор

// let message;
// if (balance >= 0) {
//     message = 'Позитивный баланс'
// } else {
//    message = 'Негативный баланс'
// }
// console.log(message);
// это все заменяеться на_____________: это только если два варианта, если больше то не подходит
// const balance = -1000;
// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(message);

// Примітивні типи даних вони імутабельні, їх можна лише перевизначити за допомогою =

// ______________________________________________________________________________________________
// Математичні оператори

// Задача 1
// Виведи  на екран загальну кількість яблук та винограду.  Різницю яблук та винограду

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);
// ______________________________________________________________
// Example 2 Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=

// let students = 100;
// students = students + 50;
// students += 50;
// console.log(students);
// _____________________________________________________________________
// Example 3 Пріоритет операторів
// Розбери пріоритет в інструкції привласнення значеня змінної result

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// __________________________________________________________________________
// Example 4 клас Math
// Напиши скрипт який виводить у консоль заокруглені вгору / вниз  і тд значення змінної
// value.Використай методи Math.floor(), Math.ceil(), Math.round().
// Перевір що буде в консолі при значеннях 27.3 та 27.9
// const value = 27.3;
// console.log(Math.ceil(value)); округлить в сторону більшого значення
// console.log(Math.floor(value)); округлить в сторону меншого значення
// console.log(Math.round(value)); округлить завжди по математичному принципу

// _______________________________________________________________________________
//  Example 5 Шаблонні рядки
// Склади речення за допомогою шаблонних рядків A has B bots in stock ? де А та В - змінні
// вставлені в рядок

// const name = 'Artem';
// const age = 28;
// const result = name + age;
// console.log(result);

// Рядок при додаванні завжди домінуючий тип даних
// * буде рядок
// const c = 10 + 22 + '11' + 44;
// console.log(typeof c);
// * буде число
// const a = 2 * '3';
// console.log(typeof a);
// * буде число
// const b = 6 - '3';
// console.log(typeof b);


// const value = 10;
// const value_2 = '15';
// const result = value - Number(value_2)
// console.log(result);

// const companyName = 'Cyberdyne System';
// const repairBots = 150;
// const defensBots = 50;

// *неправильно
// const message = companyName + 'has' + repairBots + defensBots + 'bots in stock';
// console.log(message); 'Cyberdyne Systemhas15050bots in stock'

// *правильно
// const message = `${companyName} has ${repairBots + defensBots} bots in stock`;
// console.log(message);

// ______________________________________________________________________________________________
// Exsampe 6 Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини.Для цього необхідно розділити вагу в кілограмах
// на квадрат висоти людини у метрах.

// Вага та висота зберігаються в змунних weight ta innerHeight, але не як числа,
// а в вигляді рядків(спеціально для завдання).Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7
// тобто як роздільник дробової частини може бути кома.бути

// Індекс маси тіла необхідно округлити до однієї цифри після коми.
// let weight = '88,3';
// let height = '1.75';

// weight = Number(weight.replace(',', '.'));
// //* weight = Number(weight);
// height = Number(height);
// //*  height = +height; такий самий вираз як з намбером(унарний плюс )
// console.log(weight);
// console.log(typeof weight);

// // піднесення в степені
// // const bmi = weight / Math.pow(height, 2);
// const bmi = Number((weight / height ** 2).toFixed(1));
// console.log(bmi);
// ________________________________________________________________
// Exsampe 7 Оператори порівняння та приведення типів
// Яким буде результат виразів?
// console.log(5 > 4); true
// console.log(10 >= '7'); true приведення типів
// https://old.unicode-table.com/ru/
// console.log('2' > '12'); 32 > 31 true в рядках порівнюється по uniкоду символа
// console.log('2' < '12'); false 32<31
// console.log('4' == 4); true не строге порівняння
// строге порівняння
// console.log('6' === 6); false
// console.log('false' ===  false); false
// true => 1
// false=> 0
// console.log(1 === true);  false
// console.log('0' == false); true
// console.log('Papaya' < 'papaya'); true 'P'/50 < 'p'/70
// console.log('Papaya' === 'papaya');  false 50===70
// console.log(undefined === null); false
// console.log(undefined == null); true
// ________________________________________________________________________

// Exsampe 8 Логічні оператори
// Яким буде результат виразів ?

// "i"Повертає перший false або останній true
// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(true && 4 && 'kiwi');// kiwi
// console.log(true && 0 &&'kiwi'); // 0

// 'або'повертає перше значення true або останній false
// console.log(true || 3); //true
// console.log(3 || true || 4); //true
// console.log('dsfhu' || false || 7); //true
// console.log(null || 2 || undefined); // 2
//                 false       true
// console.log(1 && null && 2);  //null
// 1 && null && 2 => null
// 1    => true
// null => false   зустріли перше фолс перериваємо виконання
//2
// console.log((null) > 0);//false
// console.log(Number(null));=> 0
// 0>0 false
// console.log((1 && null && 2) > 0); //false;
// console.log((1 && null && 2) >= 0); //true

// console.log(null || (2 && 3) || 4);  //3
            //    false  останняtrue 3  ||4 перше тру тому відповідь 3

// __________________________________________________________________________
// Exsampe 9 Значення за замовчуванням та оператори нульового злиття(??)
//|| АБО працює на 6 значень які повертають false
//?? він працює на два значення null undefined

// const incomingValue = 5;
// const result = incomingValue + Number('12'); //17
// console.log(result);
// const defaultValue = 10;
// const value = result || defaultValue;
// console.log(value);

// const incomingValue = 5;
// let test = 0;
// console.log(test);
// const value = test ?? 'some value';
// console.log(value);