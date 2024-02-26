// //Об'ект аккаут
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction)
// const account = {
//     balance: 0,
//     transactions: [],
//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             amount,
//             type
//         }
//     },
//     deposit(amount) {
//         if (amount <=0) {
//             return "ERROR";
//         }
//         const item = this.createTransaction(amount, Transaction.DEPOSIT)
//         this.balance += amount;
//         this.transactions.push(item);
//     },
//     withdraw(amount) {
//         if (amount > this.balance || amount <= 0) {
//             return 'Недостатньо коштів!!!';
//         }
//         const item = this.createTransaction(amount,
//             Transaction.WITHDRAW)
//         this.transactions.push(item);
//         this.balance -= amount;
//     },
//     getBalance() {
//         return this.balance;
//     },

//     getTransactionDetails(id) {
//         for (const transaction of this.transactions){
//             if (transaction.id === id) {
//                 return transaction;
//             }
//         }
//         return 'Empty';
//     },
//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 sum += transaction.amount;
//             }
//         }
//         return sum;
//     }
// }
// account.deposit(1);
// account.deposit(1231);
// account.deposit(1431);
// console.log(account.withdraw(123));
// console.log(account.getTransactionDetails(16));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.deposit(52));;
// console.log(account.createTransaction(1000, "deposit"));
// console.log(account.withdraw(123));
// console.log(account.getBalance());


const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        this.items.push(product)
     },
    remove(productName) { 
        const { items } = this; 
        for (let i = 0; i < items.length; i += 1) {
            const {name} = items[i];
           if (productName === name) {
               console.log('Нашли цей продукт', productName);
               console.log(i);

               items.splice(i, 1);
        }
       }
    },
    clear() {
        this.items = [];
     },
    countTotalPrise() { },
    increaseQuantity() { },
    decreaseQuantity() { },
};

cart.add({ name: 'apple', price: 50});
cart.add({ name: 'lemon', price: 100});
cart.add({ name: 'pineapple', price: 120});
cart.add({ name: 'mursh', price: 140 });
cart.add({ name: 'juse', price: 80 });
cart.add({ name: 'lemon', price: 100 });
cart.add({ name: 'apple', price: 50 });
cart.remove('apple');
// cart.clear();

console.table(cart.getItems());


