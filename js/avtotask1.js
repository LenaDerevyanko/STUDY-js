// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// Change code below this line
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits.
// Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function sayHi() {
// console.log("Hello, this is my first function!");
// }
// sayHi();

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
// return a + b + c;
// }
// add(2, 5, 8); // 15
// console.log(add(2, 5, 8));
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage (name, price) {
//     const message = `You picked ${name}, price per item is ${price}
//    credits`;
//   return message;
// };
// console.log(makeMessage('Radar', 6150));;

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     const totalPrice = (orderedQuantity * pricePerItem);
//   return totalPrice;
// };
// console.log(calculateTotalPrice(3, 400));

// function makeOrderMessage(orderedQuantity, pricePerDroid,
//     deliveryFee) {
// const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
//     const message = `You ordered droids worth ${totalPrice} credits.
//      Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// };
// console.log(makeOrderMessage(4, 300, 100));

// function isAdult(age) {
//   const passed = (age >= 18);
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(15));

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jijmdli';
//     const isMatch = (password === SAVED_PASSWORD);
//     return isMatch;
// };
// console.log(isValidPassword("kiwirul3z"));

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// };
// console.log(checkAge(5)); //You are a minor


// function checkStorage(available, ordered) {
//   let message;
// if (available >= ordered) {
//   message = "Order is processed, our manager will contact you.";
// }else {
//   message = "Not enough goods in stock!";
// }
//   return message;
// };
// console.log(checkStorage(100, 103)); //Not enough goods in stock!


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
    
//     const totalPrice = (pricePerDroid * orderedQuantity);
//     if (totalPrice > customerCredits) {
//         message = "Insufficient funds!";
//     } else {
//         message = `You ordered ${orderedQuantity} droids, you
//         have ${customerCredits - totalPrice} credits left`;
//     }
// return message;
// }
// console.log(makeTransaction(100, 5, 2000));

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log(`Invalid subscription type - ${subscription}`);
// }

// console.log(cost); // 500

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message =  'Canceled by user!';
//   } else if (password === 'jqueryismyjam') {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// };
// console.log(checkPassword('jqueryismyjam'));

// function checkStorage(available, ordered) {
//   let message;
// if (ordered === 0) {
//     message =  "There are no products in the order!";
//   } else if (available < ordered) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   return message;
// };
// console.log(checkStorage(50, 0));


// function isNumberInRange(start, end, number) {
//   const isInRange = number > start && number < end;

//   return isInRange;
// };
// console.log(isNumberInRange(20, 40, 35));


// function checkIfCanAccessContent(subType) {
//   const canAccessContent = ("vip" === subType || subType === "pro"); // Change this line

//   return canAccessContent;
// };
// console.log(checkIfCanAccessContent('pro'));

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !'Mango' -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !'' -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false



// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// };
// console.log(isNumberNotInRange(15, 6,25));


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
// if (totalSpent >= 50000) { 
//     discount  = GOLD_DISCOUNT;
//   } else if (totalSpent < 50000 && totalSpent >= 20000) { 
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent < 20000 && totalSpent >= 5000){
//    discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000){
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// };
// console.log(getDiscount(85000));//0.1
