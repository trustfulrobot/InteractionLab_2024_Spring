const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
const vegetables = ["Tomato", "Celery", "Avocado", "Onion"];

// The pop() method removes the last element from an array
// The pop() method returns the value that was "popped out"

// fruits.pop();
// console.log("fruits: ", fruits);



// The push() method adds a new element to an array (at the end)
// The push() method returns the new array length

// fruits.push("Kiwi");
// console.log("fruits: ", fruits);



// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the value that was "shifted out"

// let fruit = fruits.shift();
// console.log("fruit: ", fruit);
// console.log("fruits: ", fruits);



// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
// The unshift() method returns the new array length

// let moreFruits =  fruits.unshift("Lemon");
// console.log("fruits: ", fruits);
// console.log("moreFruits: ", moreFruits);



// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.

// let applePosition = fruits.indexOf("Apple");
// let kiwiPosition = fruits.indexOf("Kiwi");
// console.log("applePosition: ", applePosition);
// console.log("kiwiPosition: ", kiwiPosition);


let applePosition = fruits.lastIndexOf("Apple");
console.log("applePosition: ", applePosition);



// The concat() method creates a new array by merging (concatenating) existing arrays

// let fruitsAndVegetables = fruits.concat(vegetables);
// let fruitsAndVegetables = vegetables.concat(fruits);
// console.log("fruitsAndVegetables: ", fruitsAndVegetables);