// const arr = [1, 2, 3, 4];
// const arr1 = [5, 6, 7, 8];
// const arr2 = [8, 9, 10, 11];

// const { number } = require("joi");

////  Declaretion
// function name() {
// }

// function sum(item) {
//     for (let i = 0; i < item.length; i += 1) {
//         arr[i] = arr[i] * 2;
//     }
//     console.log(arr);
// };
// sum(arr)
// sum(arr1)
// sum(arr2)



//// expretion знаходиться в змінній(Функція без назви, анонімна)

// const sum = function (item) {
//     for (let i = 0; i < item.length; i+=1) {
//         item[i] = item[i] * 2;
                
//     }
//     console.log(item);
// }
// sum(arr)
// sum(arr1)
// sum(arr2)

// // //Псевдомасив
// function add(val, val1, val2, val3, val4, val5) {
//     let sum = 0;
//     // const arr = Array.from(arguments);
//     const arr = [...arguments];
//     console.log(arguments);
//     console.log(arguments);
//     // for (let i = 0; i < arguments.length; i+=1) {
//     //  sum+=arguments[i];
        
//     // }
//     for (const value of arguments) {
//         sum += value;
//     }
//     console.log(sum);
//     // console.log(val + val1 + val2 + val3 + val4 + val5);
// }
// add(1, 2, 3, 4,5,6);
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5)



///________________________________________________
// function largeNumber(){
//     let sum = 0;
//     for (const value of arguments) {
//         sum += value;
//         if (sum > 10) {
//             return true
//         }
//     }
//     return false;
// }
// const response = largeNumber(1, 2, 3);
// console.log(response);
// console.log(largeNumber(1, 2, 3, 4));
// console.log(largeNumber(1, 2, 3, 4, 5));


//________________________________________________________________
// function add(val, val1 = 0 ) {
//     console.log('val', val);
//     console.log('val1', val1);
//     return val + val1
// }
// console.log(add(3, 4));
// console.log(add(5));
// console.log(add(11));

//Області видимості
// глобальна
// локальна

// let a = 10;
// function foo() {
//     a = 15
// }
// foo()
// console.log(a);


// let a = 10;
// function foo() {
//    let a = 15
// }
// foo()
// console.log(a);


// let a = 10
// function foo() {
//     let a = 15;
//     a = 45;
// }
// foo()
// console.log(a);

// let a = 10
// function foo() {
//     a = 45;
//     let a = 15;
   
// }
// foo()
// console.log(a);


// let a = 10
// function foo(a) {
//     a = 45;
// }
// foo()
// console.log(a);


// let a = 10
// function foo(a) {
//     a = 45;
// }
// foo(a)
// console.log(a);

// const test = [1, 2, 3];
// function foo(arr) {
//     arr.splice(0,1)
// }
// foo(test)
// console.log(test);  ///[2,3]


///____________________________________________________________
// Порядок виклику функцій


// function createString(name,year) {
//     const result = add(year);
//     return `${name} years  ${result}`
// }
// console.log(createString('Mango', [1, 2, 3]));
// function add(arr) {
//     let sum = 0;
//     for (const num of arr) {
//         sum += num;
//     }
//     return sum;
// }

////________________________________________________________________
//Завдання 1 - Індекс маси тіла
// Напиши скрипт calcBMI(weight, height), яка розраховує і повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмаз на квадрат висоти людини в метрах.
// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24,7 або 24.7, тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри пічля коми.


// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));
//     return Number(weight / height ** 2).toFixed(1);
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi);
////_______________________________________________________________________________--
//Завдання 2 Найменше значення чисел
// Напиши функцію MIDIInput(a,b), яка повертає найменше з чисел a  ta b.

function min(a, b) {
    // if (a > b) {
    //     return b;
    // }
    // return a;

    //аналог

    // return a > b ? b : a 
}
// console.log(min(2, 5));//2
// console.log(min(3, -1));//-1
// console.log(min(1, 1));//1
//_________________________________________________________________________
////Завдання 3 Площа прямокутника
// Напиши функцію  getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка.
// Значення гарантовано розділені пробілом

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');
//     const first = Number(dimensions[0])
//     const second = Number(dimensions[1])

//     return Number(dimensions[0]) * Number(dimensions[1]);
// }
// console.log(getRectArea('8 11'));
// console.log(getRectArea('46 11'));
// console.log(getRectArea('8 112'));
//__________________________________________________________________
//Завдання 4  Логування елементів
// Напиши функцію  logItem(items), яка отримує масив та використовує цикл фор, який для кожного елементу масиву буде виводити в консоль повідомлення у форматі <номер елемента>   <значення елемента>. Нумерація елемента починається з 1.
// Наприклад для першого елемента масису ['Mango', 'Poly','Ajax'] з індексом 0 буде виведено 1- манго, а для індексу 2 виведе 2- аджакс

// function logItem(items) {
//     for (let i = 0, num =1; i < items.length; i+=1, num +=1) {
//         console.log(`${num} - ${items[i]}`);
//     }
// }
// logItem(['Mango', 'Poly', 'Ajax']);
// logItem(['Tomato', 'Banana', 'Lemon']);

//______________________________________________________________________________
////Завдання 5 Логування контактів
// Напиши функцію printContactsInfo(names,phones), яка виводить у консоль ім'я та телефонний номер користувача. У параментри ім'я та тел будуть передані рядки імен та тел номерів розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names,phones) {
//     names = names.split(',')
//     phones = phones.split(',')
//     console.log(phones);
//     for (let i = 0; i < names.length, i < phones.length; i+=1) {
//         console.log(`${names[i]} - ${phones[i]}`);
        
//     }
// }
//     printContactsInfo('Jacobs,William,Solomon,Artemis',
//         '45451252,5458454254,45454544,5424521255');
//__________________________________________________________________________
////Завдання 6 Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві

// function findLargestNumber() {
//     // const arr = Array.from(arguments);//або
//     const arr = [...arguments];
//     let max = arr[0];
//     for (const num of arr) {
//         if (num > max) {
//             max = num
//         }
//     }
//     return max
// }
// console.log(findLargestNumber(2, 17, 94, 1, 23, 37));//94
// console.log(findLargestNumber(49, 4, 7, 83, 12));//94


// function findLargestNumber() {
//     let max;
//     for (const num of arguments) {
//         if (typeof num ==='number') {
//             max = num;
//             break;
//         }
//     }
//     for (const num of arguments) {
//         if (typeof num ==='number') {
//             if (num > max) {
//                 max=num
//             }
//         } else {
//             max = findLargestNumber(...num)
//         }
//     }
//     return max
// }
// console.log(findLargestNumber([1,143,[400,[900]]], 94, 1, 23, 37));//900

//_____________________________________________________________________________
//Завдання 7 Середнє значення
// function callEverage() {
//     console.log(arguments);
//     let total = 0;
//     for (const num of arguments) {
//         total += num;
//     }
//     return total / arguments.length;
// }
// console.log(callEverage(1, 2, 3, 4));//2,5
// console.log(callEverage(14, 8, 2));//8
// console.log(callEverage(27, 43, 2, 8, 36));//23.2
////_____________________________________________________________________
//Завдвння 8 Форматування часу
// Напиши функ яка переведа значення минути у рядок формату годин та хвилин нн:ММ

// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60)
//     minutes = minutes % 60;
//     return `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')}`;
// }
// console.log(formatTime(70));//01:10
// console.log(formatTime(450));//07:30
// console.log(formatTime(1441));//24:01
// ____________________________________________________________________________

///Завдання 9 Колекція курсів
//  Напишіть функ для роботи з колекцією навчальних курсів.

// const courses = ['HTML', 'CSS', 'JS', 'React', 'PostgreSQL'];
// function addCourse(course) {
//     if (courses.includes(course)) {
//         return 'Ви вже маєте такий курс'
//     }
//     courses.push(course)
// }
// addCourse('Express');
// addCourse('CSS');
// console.log(courses);
// console.log(addCourse('CSS'));
//+++++++++++++++++++++++++++++++++++++++++++++++

// function removeCourse(course) {
//     if (courses.includes(course)) {
//         const idx = courses.indexOf(course)
//         courses.splice(idx, 1);
//         return
//     }
//     return "Курсу з таким ім'ям не знайдено"
// }

///аналог
// function removeCourse(course) {
//     const idx = courses.indexOf(course);
//     if (!!~idx) {
//         courses.splice(idx, 1);
//         return;
//     }
//     return "Курсу з таким ім'ям не знайдено"

// }
// removeCourse('React');
// console.log(courses);
// // removeCourse('Vue');
// console.log(courses);
// console.log(removeCourse('Vue'));


//++++++++++++++++++++++++

// function updateCourse(oldCourse, newCourse) {
//     const idx = courses.indexOf(oldCourse);
//     if (!!~idx) {
//         courses.splice(idx, 1, newCourse)
//         return;
//     }
//     return "Курсу з таким ім'ям не знайдено"
// }
// updateCourse('Express', 'NestJS');
// console.log(courses);
// console.log(updateCourse('Express', 'NestJS'));




