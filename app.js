var name = "Anna";
const numStates = 50;
var addNum = 5 + 4;

//This is for problem #7. How to use charCode.
var person = prompt("Please enter your name.");
if(person.charCodeAt(0) === 76){
 alert("Back of the Line!");
} else {
    alert("Next!");
}

//This is for problem #8-9. sayHello function and how to call a function. 
function sayHello() {
    alert("Hello World");
}
sayHello();

//This is for problem #10-11.  checkAge.

function checkAge(name, age) {
    if(age < 21) {
        console.log("Sorry, " + name +  ". You aren't old enough!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);


//Problem #12 Creating an array.
var veg = ["zucchini", "carrots", "brussel sprouts", "cauliflower"];

//Problem #13.  Use loops to display vegetables to the developer console.
veg[0] + "<br>"; 
veg[1] + "<br>"; 
veg[2] + "<br>"; 
veg[3] + "<br>"; 

var i;
for (i = 0; i < veg.length; i++) {
   veg[i] + "<br>";
}
//Problem #14-15. Create an array of 5 objects that contain names/ages
var checkAge = ["Bus", 15, "Bike", 10, "Skateboard", 22, "Taxi", 7, "Skates", 25];
checkAge[0] + "<br>";
checkAge[1] + "<br>";
checkAge[2] + "<br>";
checkAge[3] + "<br>";
checkAge[4] + "<br>";

var i;
for (i = 0; i < checkAge.length; i++) {
   checkAge[i];
}

//Problem #16-18 Create a function called getLength that takes any word as an argument. The function should return the number of characters in the string.
function getLength() {
   console.log("Hello World".length); 
}
getLength();

if(getLength === 10){
    console.log("The world is nice and even!")
} else {
    console.log("The world is an odd place!")
}
  