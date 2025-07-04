// DSA-FINAL-EXAM..==>

// Q.1 WAP to implement insert, View and delete operations in Array using JavaScript without any function


    //     let myArray = [10, 20, 30];

    // console.log("Current Array:");
    // let i = 0;
    // while (i < myArray.length) {
    //     console.log(myArray[i]);
    //     i++;
    // }

    // let newValue = 40;
    // myArray[myArray.length] = newValue; 

    // console.log("\nArray after insertion:");
    // let j = 0;
    // while (j < myArray.length) {
    //     console.log(myArray[j]);
    //     j++;
    // }

    // let valueToDelete = 20;
    // let k = 0;
    // let foundIndex = -1;
    // while (k < myArray.length) {
    //     if (myArray[k] === valueToDelete) {
    //         foundIndex = k;
    //         break;
    //     }
    //     k++;
    // }

    // if (foundIndex !== -1) {
    //     myArray.splice(foundIndex, 1);
    //     myArray.length--;
    // } else {
    //     console.log("\nValue to delete not found.");
    // }

    // console.log("\nArray after deletion:");
    // let m = 0;
    // while (m < myArray.length) {
    //     console.log(myArray[m]);
    //     m++;
    // }
    






// Q.2 WAP to implement Quick sort using JavaScript with DSA.

// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
// let arrayToSort = [10, 7, 8, 9, 1, 5];
// let sortedArray = quickSort(arrayToSort);
// console.log("Sorted array:", sortedArray);








// Q.3 WAP to count Even and Odd Values from 2D array using JavaScript.

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],

// ];

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] % 2 === 0) {
//             evenCount++;
//         } else {
//             oddCount++;
//         }
//     }
// }

// console.log("Even count:", evenCount);
// console.log("Odd count:", oddCount);






// Q.4 WAP to implement insert and remove element from Queue using JavaScript.


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

//     isEmpty() {
//         return this.items.length == 0;
//     }

//     display() {
//         console.log(this.items.join(" "));
//     }
// }

// let queue = new Queue();

// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.display(); 
// queue.pop();
// queue.display(); 






// Q.5 WAP to implement Bubble sort using JavaScript with DSA.

// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let arrayToSort = [64, 34, 25, 12, 22, 11, 90];
// let sortedArray = bubbleSort(arrayToSort);
// console.log("Sorted array:", sortedArray);
