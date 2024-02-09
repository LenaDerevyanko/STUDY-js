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
const array = [1, 'Hello', null, true, [1, 2, 3]];

// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i += 1;
// }

let i = 0;
while (i < array.length) {
        if (typeof array[i] === 'string') {
        array[i] = false;
    }
    i += 1;
}

