const numbersArr = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5];

// Ascending Order
numbersArr.sort((a, b) => a - b);
console.log(numbersArr); // Output: [2,3,3,4,5,5,5,6,9,10,21]

// Descending Order
numbersArr.sort((a, b) => b - a);
console.log(numbersArr); // Output: [21,10,9,6,5,5,5,4,3,3,2]


// How the JavaScript Array sort() Method Works

// let numArray = [3, 4, 1, 7, 2];
// let sortedArr = numArray.sort();
// console.log(sortedArr); // Output: [1,2,3,4,7]

// let numArray = [3, 4, 1, 7, 2];
// numArray.sort();
// console.log(numArray); // Output: [1,2,3,4,7]

// let numArray = [3, 4, 1, 7, 2].sort();
// console.log(numArray); // Output: [1,2,3,4,7]

// let numArray = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5].sort();
// console.log(numArray); // Output: [10,2,21,3,3,4,5,5,5,6,9]



// JavaScript sort() Method Shortcomings And How To Sort Accurately

// let numArr = [10, 5, 80].sort();
// console.log(numArr); // Output: [10, 5, 80]

// let numArr = [10, 5, 80];
// numArr.sort((a, b) => a - b);
// console.log(numArr); // Output: [5, 10, 80]

// let numArr = [10, 5, 80];
// numArr.sort((a, b) => b - a);
// console.log(numArr); // Output: [80, 10, 5]



// How to Avoid Modifying the Original Array When Sorting

// let originalArray = [2, 1, 3];
// let sortedArray = originalArray.slice().sort((a, b) => a - b);

// console.log(originalArray); // Output: [2, 1, 3]
// console.log(sortedArray); // Output: [1, 2, 3]