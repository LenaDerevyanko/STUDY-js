// const arr = [1, 2, 3, 4];
// const arr1 = [5, 6, 7, 8];
// const arr2 = [8, 9, 10, 11];

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


function calcBMI(weight, height) {
    weight = Number(weight.replace(',', '.'));
    height = Number(height.replace(',', '.'));
    return weight/Math.pow(height, 2)
}

const bmi = calcBMI('88,3', '1.75');


console.log(bmi);

