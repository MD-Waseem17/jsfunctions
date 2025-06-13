// How to convert a function to an arrow function  
// 1.Remove function key word and add let
// 2.Add = sign after function name
// 3.Add => sign after () 
 let fname = "Waseem";
let age = 22;
let sayName = () => {
    console.log(`My Nameis ${fname}, age is ${age}`);
    console.log("My Name is " + fname + " age is " + age);
    console.log("My Name is " + fname + " age is " + age);
    console.log(`My Name is ${fname}, age is ${age}`);
} 
 
 // My Name is Waseem' learning in Global  

// Simples function support Hosting
// Arrow function does not support Hosting  