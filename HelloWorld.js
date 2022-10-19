// Write a message to the console.

let myName = "Otkur";
const dir=__dirname;
var mess='Hello!';
function SayHello(){
    console.log(mess + " " + myName);
    console.log("Directory for this objct is " + dir);
}
SayHello();

let nm=require("./Object.js");
console.log(nm.myName);