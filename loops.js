
/*
#### loops
To generate a pyramid, you will need to create multiple rows.
 When you have to perform a task repeatedly until a condition is met,
  you will use a loop. There are many ways to write a loop.

You are going to start with a basic for loop. for loops use the following syntax:
for (iterator; condition; iteration) {
  logic;
}



## In JavaScript, a Boolean value can be either true or false.
you will use the less than operator (<). This allows you to check if the value on the left is less than the value on the right.

--> replace iteration by i and increase it by + 1 every time then make condition i < 6

## for (const row of rows) {
  result = result + "\n" + row;
}

## To achieve this, you will use the .repeat() method available to strings. This method accepts a number as an argument, specifying the number of times to repeat the target string. For example, using .repeat() to generate the string "Code! Code! Code!":

Example Code
const activity = "Code! ";
activity.repeat(3);

--> create this pyramid by using loop and repeat
## note :{.repeat(0)} repeating a string zero times results in nothing to print.
#
##
###
####
#####
######
#######


*/



/*

The addition operator is not the only way to add values to a variable. The addition assignment operator can be used as shorthand to mean "take the original value of the variable, add this value, and assign the result back to the variable." For example, these two statements would yield the same result:

Example Code
test = test + 1;
test += 1;

*/




// ********************************************************************************************
// ********************************************************************************************
// ********************************************************************************************

// Loops are used in JavaScript to perform repeated tasks based on a condition. 
// Conditions typically return true or false, and a loop will continue running until the condition returns false.
//  Here are the main types of loops in JavaScript:

// ### 1. `for` Loop
// The `for` loop repeats a block of code a specified number of times.

// **Syntax:**
// for (initialization; condition; increment) {
//     // code to be executed
// }
// ```

// **Example:**
for (let i = 0; i < 5; i++) {
    console.log("The number is " + i);
}
// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4
// ```

// ### 2. `while` Loop
// The `while` loop repeats a block of code as long as a specified condition is true.

// **Syntax:**
// while (condition) {
//     // code to be executed
// }
// ```

// **Example:**
// let i = 0;
// while (i < 5) {
//     console.log("The number is " + i);
//     i++;
// }
// // Output:
// // The number is 0
// // The number is 1
// // The number is 2
// // The number is 3
// // The number is 4
// ```

// ### 3. `do...while` Loop
// The `do...while` loop is similar to the `while` loop, but it will always execute the block of code once before checking the condition.

// **Syntax:**
// do {
//     // code to be executed
// } while (condition);
// ```

// **Example:**
// let i = 0;
// do {
//     console.log("The number is " + i);
//     i++;
// } while (i < 5);
// // Output:
// // The number is 0
// // The number is 1
// // The number is 2
// // The number is 3
// // The number is 4
// ```

// ### 4. `for...in` Loop
// The `for...in` loop iterates over the properties of an object (including arrays, which are a special type of object).

// **Syntax:**
// for (variable in object) {
//     // code to be executed
// }
// ```

// **Example with an Array:**
// let numbers = [45, 4, 9, 16, 25];
// for (let index in numbers) {
//     console.log(numbers[index]);
// }
// // Output:
// // 45
// // 4
// // 9
// // 16
// // 25
// ```


// ### 5. `for...of` Loop
// The `for...of` loop iterates over iterable objects such as arrays, strings, maps, sets, and more. It provides a simpler and more readable way to iterate over array elements.

// **Syntax:**
// for (variable of iterable) {
//     // code to be executed
// }
// ```

// **Example with an Array:**
// let numbers = [45, 4, 9, 16, 25];
// for (let number of numbers) {
//     console.log(number);
// }
// // Output:
// // 45
// // 4
// // 9
// // 16
// // 25
// ```

// **Example with a String:**
// let name = "John";
// for (let char of name) {
//     console.log(char);
// }
// // Output:
// // J
// // o
// // h
// // n
// ```

// ### Examples of Using Loops

// 1. **Sum of Array Elements:**
   let numbers = [1, 2, 3, 4, 5];
   let sum = 0;
   
   for (let i = 0; i < numbers.length; i++) {
       sum += numbers[i];
   }
   
   console.log(sum); // Output: 15
//    ```

// 2. **Finding Even Numbers in an Array:**
  //  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   let evenNumbers = [];
   
   for (let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 === 0) {
           evenNumbers.push(numbers[i]);
       }
   }
   
   console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
//    ```

// 3. **Iterating Over Object Properties:**
//    let car = {brand: "Toyota", model: "Corolla", year: 2020};
   
//    for (let key in car) {
//        console.log(key + ": " + car[key]);
//    }
//    // Output:
//    // brand: Toyota
//    // model: Corolla
//    // year: 2020
//    ```

// 4. **Using `for...of` with Arrays:**
//    ```javascript
//    let colors = ["red", "green", "blue"];
   
//    for (let color of colors) {
//        console.log(color);
//    }
//    // Output:
//    // red
//    // green
//    // blue
//    ```

// By understanding and practicing these different types of loops, you can efficiently handle repetitive tasks and data structures in JavaScript.