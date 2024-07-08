/*
#### Arrays:
## In programming, you will often need to work with lots of data.
 ## There are many data structures that can help you organize and manage your data.
 One of them is an array.


 ## When an array holds values, or elements, those values are separated by commas. 
 Here is an array that holds two strings:

 // let array = [];
 // let array_1 = ["first"];
 // let array_2 = ["first", "second"];

  ## The order of values in an array is important, so follow that order.
  ##  Remember that strings are case-sensitive.


  --> declare and assign an array variable with name rows values : "first", "second", "third"

## You can access the values inside an array using the index of the value.
 An index is a number representing the position of the value in the array, starting from 0 for the first value.
## You can access the value using bracket notation, such as array[0].

--> Use console.log and bracket notation to print the first value in your rows array.

## you can change the value at an index directly.

## For example, this code would assign the number 25 to the second element in the array:

Example Code
let array = [1, 2, 3];
array[1] = 25;
console.log(array); // prints [1, 25, 3]

--> Update the third element of your rows array to be the number 10. Then print the rows array to your console.
*/

/*

 Currently, your code accesses the last element in the array with rows[2]. 
 But you may not know how many elements are in an array when you want the last one.

You can make use of the .length property of an array - this returns the number of elements in the array.
 To get the last element of any array, you can use the following syntax:

Example Code
array[array.length - 1]
array.length returns the number of elements in the array.
 By subtracting 1, you get the index of the last element in the array.
  You can apply this same concept to your rows array.

 --> Update your rows[2] to dynamically access the last element in the rows array.
*/


// random arrays:
let randomNumbers = [3, 15, 8, 22, 5, 19, 12];
console.log(randomNumbers); // Output: [3, 15, 8, 22, 5, 19, 12]

let randomStrings = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(randomStrings); // Output: ["apple", "banana", "cherry", "date", "elderberry"]


let randomBooleans = [true, false, true, false, true];
console.log(randomBooleans); // Output: [true, false, true, false, true]

let mixedArray = [42, "hello", true, null, { name: "Alice" }, [1, 2, 3]];
console.log(mixedArray); // Output: [42, "hello", true, null, { name: "Alice" }, [1, 2, 3]]

let randomObjects = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" }
];
console.log(randomObjects); // Output: [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Jack" }]

let randomFloats = [1.1, 2.5, 3.7, 4.9, 5.6];
console.log(randomFloats); // Output: [1.1, 2.5, 3.7, 4.9, 5.6]

let randomColors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF"];
console.log(randomColors); // Output: ["#FF5733", "#33FF57", "#3357FF", "#F033FF"]

let randomWords = ["piano", "violin", "guitar", "drums", "flute"];
console.log(randomWords); // Output: ["piano", "violin", "guitar", "drums", "flute"]

let randomValues = [true, false, null, true, null, false];
console.log(randomValues); // Output: [true, false, null, true, null, false]


/**
 ## A method in JavaScript is a function that's associated with certain values or objects. 
 ## An example you've already encountered is the .log() method, which is part of the console object.

## Arrays have their own methods, and the first you will explore is the .push() method. 
## This allows you to "push" a value to the end of an array.
 Here is an example to add the number 12 to the end of an array:
 
array.push(12);

-->Use .push() to add the string "Name" to the end of your rows array. 

## Another method essential for this project is the .pop() method.
## It removes the last element from an array and returns that element.

-->Create a new variable called popped and assign it the result of rows.pop().
 */



// ### 1. `push()`
// The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

// **Example:**
let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// ### 2. `pop()`
// The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: "Orange"
console.log(fruits); // Output: ["Apple", "Banana"]


// ### 3. `shift()`
// The `shift()` method removes the first element from an array and returns that element. 
// This method changes the length of the array.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: "Apple"
console.log(fruits); // Output: ["Banana", "Orange"]


// ### 4. `unshift()`
// The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

// **Example:**

// let fruits = ["Banana", "Orange"];
fruits.unshift("Apple");
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]


// ### 5. `concat()`
// The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays but returns a new array.

// **Example:**

let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Orange", "Mango"];
let allFruits = fruits1.concat(fruits2);
console.log(allFruits); // Output: ["Apple", "Banana", "Orange", "Mango"]


// ### 6. `slice()`
// The `slice()` method returns a shallow copy of a portion of an array into a new array object. You can specify the start and end index.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// slice(start, end)
fruits.slice(1, 3);
console.log(fruits); // Output: ["Banana", "Orange"]


// ### 7. `splice()`
// The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// **Example:**

fruits = ["Apple", "Banana", "Orange", "watermelon"];
fruits.splice(3, 0, "Mango"); // Removes 1 element at index 1 and adds "Mango"
console.log("000000", fruits); // Output: ["Apple", "Mango", "Orange"]


// ### 8. `indexOf()`
// The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
let index = fruits.indexOf("Banana");
console.log(index); // Output: 1


// ### 9. `includes()`
// The `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false`.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
let hasBanana = fruits.includes("Banana");
console.log(hasBanana); // Output: true


// ### 10. `join()`
// The `join()` method joins all elements of an array into a string and returns this string. You can specify a separator.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
let fruitString = fruits.join(", ");
console.log(fruitString); // Output: "Apple, Banana, Orange"


// ### 11. `reverse()`
// The `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
fruits.reverse();
console.log(fruits); // Output: ["Orange", "Banana", "Apple"]


// ### 12. `sort()`
// The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.

// **Example:**

// let fruits = ["Orange", "Banana", "Apple"];
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]






// ******************************************************* with loops *******************************************************
// ### 13. `forEach()`
// The `forEach()` method executes a provided function once for each array element.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
fruits.forEach(function (fruit) {
  console.log(fruit);
});
// Output:
// Apple
// Banana
// Orange


// ### 14. `map()`
// The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

// **Example:**

// let numbers = [1, 2, 3];
let doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled); // Output: [2, 4, 6]


// ### 15. `filter()`
// The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

// **Example:**

// let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]


// ### 16. `reduce()`
// The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// **Example:**

// let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function (total, number) {
  return total + number;
}, 0);
console.log(sum); // Output: 15


// These basic array methods provide powerful tools for manipulating and interacting with arrays in JavaScript.
// Practicing these methods will help you become proficient in handling array operations.