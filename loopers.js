//const zeoa = ["Zakia", "Emma", "Oishee", "Arin"];
/*
let zLen = zeoa.length;

text = "<ul>";
for(let i = 0; i<zLen; i++){
    text += "<li>" + zeoa[i] + "</li>";
}

text += "</ul>"
*/
/*
for(let i = 0; i<zeoa.length; i++){
    console.log(i + ". " + zeoa[i]);
}
*/
const zeoa = ["Zakia", "Emma", "Oishee", "Arin"];
let text = "<ul>";
function myFunction(value){
    console.log(value);
}
zeoa.forEach(myFunction);
text += "</ul>";


console.log("Complete!!!!");


