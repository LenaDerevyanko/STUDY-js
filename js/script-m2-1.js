////Рисич
////Масиви

// const array = [1, 'Hello', null, true, [1, 2, 3]];
// console.log(typeof array);
// console.log(Array.isArray(array));
// ////Array.isArray(array повертає тру або фолс в залежності від того чи працюємо з масивом чи ні

// const first = array[0];
// console.log(first);
// const last = array[array.length - 1];
// console.log(last);

///щоб працювати з масивом

////For

// const array = [1, 'Hello', null, true, [1, 2, 3]];
// for (let i = 0; i < array.length; i += 1) {
//     if (Array.isArray(array[i])) {
//         for (let j = 0; j < array[i].length; j+=1) {
//             console.log(array[i][j]);
//         }
//         continue;
//     }
//     console.log(array[i]);
// }



///For...of

// const array = [1, 'Hello', null, true, [1, 2, 3]];

// for (let item of array) {
//     if (typeof item === 'string') {
//         item === false;
//     }
// }
// console.log('for of',array);

// for (let i = 0; i < array.length; i+=1) {
//     if (typeof array[i]) {
//         const element = array[i];
//     }
// }
// console.log('ad', array);
// for (let i = 0; i < array.length; i+=1) {
//     if (typeof array[i] === 'string') {
//         array[i] = false;
//     }
// }
// console.log('for', array);

//while//
// const array = [1, 'Hello', null, true, [1, 2, 3]];

// // let i = 0;
// // while (i < array.length) {
// //     console.log(array[i]);
// //     i += 1;
// // }

// let i = 0;
// while (i < array.length) {
//         if (typeof array[i] === 'string') {
//         array[i] = false;
//     }
//     i += 1;
// }
// console.log(array);

//___________________________________________________

// const str = 'hello world';
// // split створює масив
// const arr = str.split(' ');
// // revers розвертає
// const result = arr.reverse().join(' ');
// join зшиває та перетворює в рядок
// console.log(result);
//// скорочений аналог
// const result = str.split(' ').reverse().join(' ');
// console.log(result);

//_______________________________________________________

// const arr = ['Hello world'];
// const idx = arr.indexOf('JS');
////вирізає
// if (arr.indexOf('JS') === -1) {
//     console.log(("NO"));
// }
// else {
//     console.log("YES");
// }
// console.log(idx);


// if (arr.includes('JS')) {
//     console.log(('YES'));
// }
// else {
//     console.log('NO');
// }
//____________________________________________________________
// const arr = ['Hello',  'world'];
//метод push та pop (додають або видаляють елементи з кінця масиву)
// arr.push(1, 'a', [1,2])
// arr.pop();
// arr.pop();//нічого не потрібно вказувати само видаляє останній елемент
//_______________________________________________________________
// shift(видаляє) unshift(додає) з початку масиву
// arr.unshift(1, 'a');
// arr.shift();
// arr.shift();
// console.log(arr);
//________________________________________________________________
//splice(може видалити, додати та замінити елементи масиву)
// const arr = ['Hello',  'world', 'js'];
// // arr.splice(1, 1, 'from', 'react', 'node')
// // console.log(arr);
// const idx = arr.indexOf('world');
// const result = arr.splice(idx, 1, 'from');
////idx, 0(додати еле мент, idx, 1-вирізати другий та додати в його місце, idx, 2(3) вирізати два(три) елементи та дотати в його місце)
// console.log(arr);
// console.log(result);
//________________________________________________________________
//slice(не мутує, а створює певну копію масиву)
// const result = arr.slice(1, 3);
// console.log(result);
// console.log(arr);
//________________________________________________________________
//concat  зшиває

// const arr = [1, 2, 3];
// const arr1 = [4, 5];
// const arr2 = [6, 7];
// const result = arr.concat(arr2, arr1)
// console.log(arr);
// console.log(result);
//________________________________________________________________

// Завдання 1 - Базові операції з масивом
// створіть мaсив з елементами 'Jazz' 'Blues'
// додайте 'RocknRoll'до кінця
// виведіть у консоль перщий елемент масиву
// вивеіть у консоль останній елемент масиву.Код повинен працюватидля масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте 'Contry' та 'Reggae' на початок масиву.
// const genres = ['Jazz', 'Blues'];
// genres.push('RocknRoll');
// console.log(genres.shift());
// console.log(genres[genres.length - 1]);
// genres.unshift('Contry', 'Reggae');
// console.log(genres);
//всі дії замінюємо спайсом
// const genres = ['Jazz', 'Blues'];
// genres.splice(genres.length, 0, 'RocknRoll');
// console.log(genres.splice(0, 1, 'Contry', 'Reggae'));
// console.log(genres);
//________________________________________________________________
//Завдання 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігається у змінній валуе у вигляді рядка. Значення гарантовано розділені пробілом
// const value = '8 11';
// const arr = value.split(' ');
// const first = Number(arr[0]);
// const last = Number(arr[arr.length - 1]);
// const result = first * last
// console.log(result);
//________________________________________________________________
//Завдання 3 -  Перебір масиву
// Напиши скрипт для перебору масиву Фруітс циклом фор. Для кожного елемекнту масиву виведи в консоль рядок у форматі номер_елемента:значення_елемента.Нумерація елементів повинна починатися з 1.
const fruits = ['apple', 'cherry', 'babana', 'lemon', 'pine'];

// for (let i = 0; i < fruits.length; i+=1) {
//     console.log(`${i+1} - ${fruits[i]}`);
// }
//або
// for (let i = 0, n = 1; i < fruits.length; i+=1, n += 1)
// {
//     console.log(`${n} - ${fruits[i]}`);
//  }
//___________________________________________________________
// Завдання 4    Масиви та цифри
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакове.
// let names = 'Jacobs, William, Solomon, Artem';
// let phones = '1548145525, 4422658866, 4541155222,47455588512';
// names = names.split(',');
// phones = phones.split(',');
// for (let i = 0; i < names.length, i < phones.length; i+=1) {
//     console.log(`${names[i]} - ${phones[i]}`);
// }
//_____________________________________________________________
//Завдання 5  Масиви та рядки
//Напиши скрипт , який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися  або закінчуватися символом пробілу. Скрипт повинен працювати для будь якого рядка.
// const string = 'Welcome to the future';
// const arr = string.split(' ');
// arr.pop();
// arr.shift();
// const result = arr.join(' ');
// console.log(result);

//аналог скорочуємо щоб записати все в один рядочок
// const string = 'Welcome to the future';
// const result = string.split(' ').slice(1, -1).join(' ');
// console.log(result);
//________________________________________________________________
//Завдання 6   Масиви та рядки
// Напиши скрипт який розгортає рядок(зворотній порядок букв) і виводить його в консоль
// const string = 'Welcome to the future';
// const result = string.split(' ').reverse().join(' ');
// console.log(result);

// _______________________________________________________________
//Завдання 7 Сортування масиву
// Напиши скрипт сортування масиву рядків в алфавітному порядкуза першою літерою елемента
// const langs = ['cpython', 'bjavascript', 'ac++', 'haskel',
//     'php', 'ruby'];
// const arr = [];

// for (let i = 0; i < langs.length; i += 1) {
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i,1)[0];
//         langs.unshift(result);
//     }
// }
// console.log(langs);
///_____________________________________________________________
//Завдання 8 Напиши скрипт пошуку найменшого числа в масиві. Код повинен працювати для будь якого масиву чисел. Використовуй цикл для розв'язання задачі

// const numbers = [2, 17, 94, 1, 23, -14, 37];
// let min = numbers[0];
// for (const value of numbers) {
//     if (value < min) {
//         min = value;
//     }
// }
// console.log(min);

