
/*
#### loops
To generate a pyramid, you will need to create multiple rows.
 When you have to perform a task repeatedly until a condition is met, you will use a loop. There are many ways to write a loop.

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