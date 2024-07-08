/*
## Functions:
A function is a block of code that can be reused throughout your application. Functions are declared with the following syntax:

function name(parameter) {

}

The function keyword tells JavaScript that the name variable is going to be a function.
 parameter is a variable that represents a value that is passed into the function when it is used.
  A function may have as many, or as few, parameters as you'd like.
 Like a for loop, the space between the curly braces is the function body.

## In order to use a function, you need to call it. 
A function call tells your application to run the code from the function wherever you choose to call it. 
The syntax for a function call is the function name followed by parentheses.: name();

## declare variable call and assign the function to it then print it in the console


## In order to return something else, you need to use the return keyword.
 Here is an example of a function that returns the string "Functions are cool!":


 ## . Parameters are special variables that are given a value when you call the function,
  and can be used in your function to dynamically change the result of the function's code.



## If you open your console again, you'll see that your padRow function is returning undefined, 
even though you defined a return value! This is because parameters need to be given a value when you call the function.

When you pass a value to a function call, that value is referred to as an argument.
 Here is an example of calling a demo function and passing "Naomi" as the argument for the name parameter.

Example Code
function demo(name) {
  return name;
}
demo("Naomi");






--> Pass your own name as the argument for the name parameter in your padRow call.
 Remember that your name is a string, so you'll need to use quotes.



const call = padRow("sandy");
call;


task : 
Declare a function named addTwoNumbers. This function should take two arguments and return the sum of those two arguments.

Then declare a sum variable and assign it the value of calling your addTwoNumbers function with 5 and 10 as the arguments.
 Log the sum variable to the console.
 */



 /*

 Variables in JavaScript are available in a specific scope.
  In other words, where a variable is declared determines where in your code it can be used.

The first scope is the global scope. Variables that are declared outside of any "block" like a function or for loop are in the global scope.
 Your character, count, and rows variables are all in the global scope.

When a variable is in the global scope, a function can access it in its definition. Here is an example of a 
function using a global title variable:

Example Code
const title = "Professor ";
function demo(name) {
  return title + name;
}
demo("Naomi")




## Variables can also be declared inside a function. These variables are considered to be in the local scope
, or block scope. A variable declared inside a function can only be used inside that function. 
If you try to access it outside of the function, you get a reference error.
 

--> Below the return statement, log the string "This works!" to the console.

After doing that, you will see that the string "This works!" does not display in the console,
 and the console.log("This works!") line is greyed out.

--> Copy the console log and paste it above the return statement. Now, the string "This works!" should appear in the console.

 ### Note: An important thing to know about the return keyword is that it does not just define a value to be returned from your function, 
it also stops the execution of your code inside a function or a block statement. This means any code after a return statement will not run.
 

function padRow(rowNumber, rowCount) {
  return character.repeat(rowNumber);
}

--> Pass i + 1 and count as the arguments to your padRow call.
 Like parameters, arguments are separated by a comma.

*/





const character = "#";
const count = 8;
const rows = [];
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);


