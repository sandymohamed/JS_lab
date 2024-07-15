// In JavaScript, an object is a collection of properties,
//  where each property is defined as a key-value pair.
//  Objects can store various types of data, including strings, numbers, arrays,
// other objects, and functions.
// They are used to group related data and functionalities together and
// can be created using object literals or constructors.

// ### Object Basics

// **1. Object Literals:**
// An object literal is a simple way to create an object using curly braces `{}`.

// **Example:**
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     occupation: "Developer"
// };

// console.log(person.firstName); // Output: John
// console.log(person["lastName"]); // Output: Doe
// ```

// In this example, `person` is an object with four properties:
// `firstName`, `lastName`, `age`, and `occupation`.

// **2. Accessing Object Properties:**
// You can access object properties using dot notation or bracket notation.

// **Dot Notation:**
// console.log(person.firstName); // Output: John
// ```

// **Bracket Notation:**
// console.log(person["lastName"]); // Output: Doe
// ```

// Bracket notation is useful when the property name is dynamic or not a
// valid identifier (e.g., it contains spaces or starts with a number).

// **3. Adding and Modifying Properties:**
// You can add or modify properties using dot or bracket notation.

// **Example:**
// person.email = "john.doe@example.com"; // Adding a new property
// person.age = 31; // Modifying an existing property

// console.log(person.email); // Output: john.doe@example.com
// console.log(person.age); // Output: 31
// ```

// **4. Deleting Properties:**
// You can delete a property using the `delete` operator.

// **Example:**
// delete person.occupation;

// console.log(person.occupation); // Output: undefined
// ```

// ### Nested Objects
// Objects can contain other objects, which is useful for representing more complex data structures.

// **Example:**
// let person = {
//     name: {
//         firstName: "John",
//         lastName: "Doe"
//     },
//     age: 30,
//     contact: {
//         email: "john.doe@example.com",
//         phone: "123-456-7890"
//     }
// };

// console.log(person.name.firstName); // Output: John
// console.log(person.contact.email); // Output: john.doe@example.com
// ```

// ### Methods
// Methods are functions stored as object properties.
// They can be used to perform actions related to the object.

// **Example:**
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     },
//     birthday: function() {
//         this.age++;
//     }
// };

// console.log(person.fullName()); // Output: John Doe
// person.birthday();
// console.log(person.age); // Output: 31
// ```

// In this example, `fullName` and `birthday` are methods.
//  The `this` keyword refers to the current object (`person`).

// ### Looping Through Object Properties
// You can use the `for...in` loop to iterate over an object's properties.

// **Example:**
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }
// // Output:
// // firstName: John
// // lastName: Doe
// // age: 30
// ```

// ### Using Object Methods

// **1. `Object.keys()`**
// This method returns an array of the object's own enumerable property names.

// **Example:**
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };

// let keys = Object.keys(person);
// console.log(keys); // Output: ["firstName", "lastName", "age"]
// ```

// **2. `Object.values()`**
// This method returns an array of the object's own enumerable property values.

// **Example:**
// let values = Object.values(person);
// console.log(values); // Output: ["John", "Doe", 30]
// ```

// **3. `Object.entries()`**
// This method returns an array of the object's own enumerable property `[key, value]` pairs.

// **Example:**
// let entries = Object.entries(person);
// console.log(entries); // Output: [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]
// ```







// ### Practical Example: Managing a Collection of Objects
// Here's an example where we manage a collection of person objects using an array of objects:

// let contacts = [
//     { name: "John Doe", phone: "123-456-7890", email: "john.doe@example.com" },
//     { name: "Jane Smith", phone: "987-654-3210", email: "jane.smith@example.com" }
// ];

// // Add a new contact
// contacts.push({ name: "Sam Brown", phone: "555-555-5555", email: "sam.brown@example.com" });


// // Find a contact by name
// let contact = contacts.find(contact => contact.name === "Jane Smith");
// console.log(contact); // Output: { name: "Jane Smith", phone: "987-654-3210", email: "jane.smith@example.com" }

// // Update a contact's phone number
// contact.phone = "111-111-1111";

// // Delete a contact by name
// let index = contacts.findIndex(contact => contact.name === "John Doe");
// contacts.splice(index, 1);

// console.log(contacts);
// ```

// In this example, we:
// 1. Create an array of contact objects.
// 2. Add a new contact.
// 3. Find a contact by name.
// 4. Update a contact's phone number.
// 5. Delete a contact by name.

// This overview covers the basics of objects in JavaScript, including creating,
//  modifying, and using objects and their properties and methods.