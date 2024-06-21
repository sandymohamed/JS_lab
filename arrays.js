/*
#### Arrays:
## In programming, you will often need to work with lots of data.
 ## There are many data structures that can help you organize and manage your data.
 One of them is an array.


 ## When an array holds values, or elements, those values are separated by commas. Here is an array that holds two strings:

 // let array = [];
 // let array_1 = ["first"];
 // let array_2 = ["first", "second"];

  ## The order of values in an array is important, so follow that order.
  ##  Remember that strings are case-sensitive.


  --> declare and assign an array variable with name rows values : "first", "second", "third"

## You can access the values inside an array using the index of the value. An index is a number representing the position of the value in the array, starting from 0 for the first value.
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


/**
 ## A method in JavaScript is a function that's associated with certain values or objects. 
 ## An example you've already encountered is the .log() method, which is part of the console object.

## Arrays have their own methods, and the first you will explore is the .push() method. 
## This allows you to "push" a value to the end of an array. Here is an example to add the number 12 to the end of an array:
 
array.push(12);

-->Use .push() to add the string "Name" to the end of your rows array. 

## Another method essential for this project is the .pop() method.
## It removes the last element from an array and returns that element.

-->Create a new variable called popped and assign it the result of rows.pop().
 */