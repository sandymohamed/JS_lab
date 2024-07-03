

// ### Conditions in JavaScript

// Conditions are used to perform different actions based on different conditions. 
// The most common way to implement conditions in JavaScript is using `if`, `else if`,
//  and `else` statements.

// ### `if` Statement
// The `if` statement executes a block of code if a specified condition is true.

// **Syntax:**
// ```javascript
// if (condition) {
//     // code to be executed if the condition is true
// }
// ```

// **Example:**
// ```javascript
// let number = 10;

// if (number > 5) {
//     console.log("The number is greater than 5");
// }
// // Output: The number is greater than 5
// ```

// ### `if...else` Statement
// The `if...else` statement executes one block of code if the condition is true,
//  and another block of code if the condition is false.

// **Syntax:**
// ```javascript
// if (condition) {
//     // code to be executed if the condition is true
// } else {
//     // code to be executed if the condition is false
// }
// ```

// **Example:**
// ```javascript
// let number = 3;

// if (number > 5) {
//     console.log("The number is greater than 5");
// } else {
//     console.log("The number is 5 or less");
// }
// // Output: The number is 5 or less
// ```

// ### `if...else if...else` Statement
// The `if...else if...else` statement allows you to test multiple conditions.

// **Syntax:**
// ```javascript
// if (condition1) {
//     // code to be executed if condition1 is true
// } else if (condition2) {
//     // code to be executed if condition2 is true
// } else {
//     // code to be executed if neither condition1 nor condition2 is true
// }
// ```

// **Example:**
// ```javascript
// let number = 7;

// if (number > 10) {
//     console.log("The number is greater than 10");
// } else if (number > 5) {
//     console.log("The number is greater than 5 but 10 or less");
// } else {
//     console.log("The number is 5 or less");
// }
// // Output: The number is greater than 5 but 10 or less
// ```


// ### Comparison and Logical Operators

// - **Comparison Operators:**
//   - `==` Equal to
//   - `===` Strict equal to (equal value and equal type)
//   - `!=` Not equal to
//   - `!==` Strict not equal to (not equal value or not equal type)
//   - `>` Greater than
//   - `<` Less than
//   - `>=` Greater than or equal to
//   - `<=` Less than or equal to

// - **Logical Operators:**
//   - `&&` Logical AND
//   - `||` Logical OR
//   - `!` Logical NOT

// **Example with Comparison and Logical Operators:**
// ```javascript
// let age = 20;
// let isStudent = true;

// if (age >= 18 && isStudent) {
//     console.log("You are an adult student");
// } else {
//     console.log("You are not an adult student");
// }
// // Output: You are an adult student
// ```

// ### Examples

// 1. **Simple `if` statement:**
//    ```javascript
//    let temperature = 30;

//    if (temperature > 25) {
//        console.log("It's hot outside");
//    }
//    // Output: It's hot outside
//    ```

// 2. **`if...else` statement:**
//    ```javascript
//    let temperature = 15;

//    if (temperature > 25) {
//        console.log("It's hot outside");
//    } else {
//        console.log("It's not hot outside");
//    }
//    // Output: It's not hot outside
//    ```

// 3. **`if...else if...else` statement:**
//    ```javascript
//    let temperature = 20;

//    if (temperature > 30) {
//        console.log("It's very hot outside");
//    } else if (temperature > 20) {
//        console.log("It's warm outside");
//    } else if (temperature > 10) {
//        console.log("It's cool outside");
//    } else {
//        console.log("It's cold outside");
//    }
//    // Output: It's cool outside
//    ```



// These examples should help illustrate how conditions work in JavaScript.
//  Students can practice these concepts by creating various scenarios and using different conditional 
//  statements to handle them.