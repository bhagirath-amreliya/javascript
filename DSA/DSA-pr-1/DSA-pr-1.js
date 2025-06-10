// DSA PROJECT 1

// 1. Write a JavaScript Function to Descending Order data converting using Bubble sort.

// function bubblesort(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
       
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 let store = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = store;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubblesort([20, 10, 30, 50, 40, 60, 70, 80, 90, 100]));

// // Output: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]


// 2. Write a JavaScript Function to Ascending Order data converting using Merge sort. not use method.

// let arr = [12, 11, 13, 5, 6, 7];

// function mergesort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let mid = Math.floor(arr.length / 2);
//     let left = mergesort(arr.slice(0, mid));
//     let right = mergesort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// console.log(mergesort(arr));
// Output: [5, 6, 7, 11, 12, 13]



// 3. Write a JavaScript Program 2-D array print and also print its's square of every element.

// let arr = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [75, 85, 95]
// ];

// let squarearray = (arr) => {
//     let res = [];
//     for (let i = 0; i < arr[0].length; i++) {
//         res[i] = [];
//         for (let j = 0; j < arr.length; j++) {
//             res[i][j] = arr[j][i];
//         }
//     }
//     return res;
// }

// console.log(squarearray(arr));

// output: [10, 40, 75],
//         [20, 50, 85],
//         [30, 60, 95]



// 4. Write a JavaScript Program to find the maximum and minimum number in an array.

// let arr = [11, 24, 33, 14, 65, 26, 78, 82, 59, 190];
// let findMaxMin = (arr) => {
//     let max = arr[0];
//     let min = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return { max, min };
// }

// console.log(findMaxMin(arr));

// Output: { max: 190, min: 11 }