
// project name: DSA-PR-5


// 1. Write a program for Circular Queue.

// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         return this.items.shift();
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         return this.items[0];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     display() {
//         return this.items.join(" ");
//     }
// }

// let queue = new Queue();
// queue.push(10);
// queue.push(20);
// queue.push(30);
// queue.push(40);
// queue.push(50);

// console.log("Original Queue:", queue.display());

// output:
// Original Queue: 10 20 30 40 50



// 2.write a program Queue using two stacks.

// class Queue {
//     constructor(){
//         this.items = [];
//     }
//     push(element) {
//         this.items.push(element);
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         return this.items.shift();
//     }
//     isEmpty() {
//         return this.items.length === 0;
//     }
//     display() {
//         return this.items.join(" ");
//     }
// }
// let queue = new Queue();
// queue.push(10);
// queue.push(20);
// queue.push(30);
// queue.push(40);
// queue.push(50);

// console.log("Original Queue:", queue.display());

// queue.pop();


// console.log("After Pop:", queue.display());


// output:
// Original Queue: 10 20 30 40 50
// After Pop: 20 30 40 50



// 3.write a program check first string swap can make strings equal.


// function canSwapToEqual(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let diff = [];
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] !== str2[i]) {
//             diff.push(i);
//         }
//     }

//     if (diff.length === 2) {
//         let [i, j] = diff;
//         return str1[i] === str2[j] && str1[j] === str2[i];
//     }

//     return false;
// }

// console.log(canSwapToEqual("ab", "ba")); // true
// console.log(canSwapToEqual("ab", "ab")); // false
// console.log(canSwapToEqual("ba", "ab")); // true