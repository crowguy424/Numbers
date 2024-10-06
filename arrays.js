const girls = [
    "Ashfika",
    "Quabbo",
    "Keya"
];
girls[0] = "Rabeya";
console.log(girls);

//Access the full array
//With JavaScript, the full array can be accessed by referring to the array name:

const birds = ["ostrich", "emu", "vulture"];
document.getElementById("bors").innerHTML = birds;


//ARRAYS are objects
const person = ["Saeed", "Haque", 46];
console.log(typeof person);

//Objects use names to access networks
const pers1 = {firstName: "Sithia", lastName: "Ahmed", age: 26};
console.log(pers1);
//Array Elements can be Objects
//myArray[0] = Date.now;
//myArray[1] = myFunction;
//myArray[2] = myCare;
//Array Properties and Methods
//The length property is always one more than the highest array index.
//Accessing the First Array Element
const fruits = ["Jackfruit", "Mango", "Papaya", "Strawberry"];
console.log(fruits[0]);

//Accessing last Array Elements
console.log(fruits[fruits.length-1]);