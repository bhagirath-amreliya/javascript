// DSA-PROJECT-3 

// Q1. Write a program to implement binary search to find the index of a target element in a sorted array.

// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid; 
//         } else if (arr[mid] < target) {
//             left = mid + 1; 
//         } else {
//             right = mid - 1; 
//         }
//     }

//     return -1; 
// }

// let index = binarySearch(data, 5);

// if (index !== -1) {
//     console.log(`Target  found at `, index);
// } else {
//     console.log(`Target  not found in the array.`);
// }



// Q2. write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences.

// let data = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
// function lowerBound(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     let result = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] >= target) {
//             result = mid;
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }

//     return result; 
// }

// function upperBound(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     let result = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] > target) {
//             result = mid;
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }

//     return result;
// }

// let firstOccurrence = lowerBound(data, 3);
// let lastOccurrence = upperBound(data, 3);
// let count = lastOccurrence - firstOccurrence;
// if (firstOccurrence !== -1 && lastOccurrence !== -1) {
//     console.log("First occurrence of target is at index:", firstOccurrence);
//     console.log("Last occurrence of target is at index:", lastOccurrence);
//     console.log("Count of occurrences:", count);
// } else {
//     console.log("Target not found in the array.");
// }


// OUTPUT:
// First occurrence of target is at index: 4
// Last occurrence of target is at index: 5
// Count of occurrences: 1




// Q3. Write a program to find the pivot index where the rotation occurs in a rotated sorted array.

// let data = [ 6, 7, 8, 9, 1, 2, 3, 4, 5];

// function findPivot(arr) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] > arr[mid + 1]) {
//             return mid;
//         }
//         if (arr[mid] < arr[mid - 1]) {
//             return mid - 1;
//         }
//         if (arr[low] >= arr[mid]) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return -1;
// }

// let pivotIndex = findPivot(data);
// if (pivotIndex !== -1) {
//     console.log("Pivot element found at index:", pivotIndex);
// } else {
//     console.log("No pivot element found.");
// }


// OUTPUT:
// Pivot element found at index: 3
