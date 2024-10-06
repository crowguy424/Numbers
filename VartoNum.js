/*
Converting variables to numbers -->
    there are 3 JavaScript methods that can be used to convert variables to numbers:
        1. The Number() method
        2. The parseInt() method
        3. The parseFloat() method
*/

console.log(Number(true));  //returns 1
console.log(Number(false)); //returns 0
console.log(Number("19"));
console.log(Number(" 19"));
console.log(Number("19 "));
console.log(Number(" 19 "));
console.log(Number("19.33"));
console.log(Number("19 33")); //returns Nan
console.log(Number("19,33"));//returns Nan
console.log(Number("Simran"));//returns Nan