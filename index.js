/*
document
window


camelCase 
 reseved words : function const let var if else for while switch 
*/

// let lastName = "jjjjjj";
// console.log("lastName 111", lastName)

// const fullName = "sandy m";
// console.log("fullName11: ", fullName)

// create function in js 
function printTextInHTML() {
    document.getElementById("h1").innerHTML = "Hello User !!!";
    document.write("Hi , my name is Sandy");
    console.log("I'm in console lol!!");
    // alert("I'm alert");
    
    // variables : var const let
    var name= "sandy";
    
    const fullName = "sandy sawy";

    let lastName;
      lastName = "sawy";
      lastName = "Mohammed";
    
      console.log("fullName: ", fullName)
      console.log("lastName 22", lastName)
      console.log("name: " + name)
      
// =   // ==   // === ""   ''

      let x= 5;   // number
      let y = "5";  // string
      let z = x + y;

      console.log("z: " + z);
      console.log("x: ", typeof(x));
      console.log("y: ", typeof(y));

    }



// printTextInHTML();




window.onload = document.getElementById("h1").innerHTML = "Hello User !!!";