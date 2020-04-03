'use strict';

let a=5;
console.log(a);

var number = 5; 
var string = "Hello";
var sym = Symbol();
var boolean = true; 
null; 
undefined;
var obj={};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = {
    name: "John",
    age: 16,
    isMarried: false
}
console.log(person["name"]);

let array = ['plum.png', 'orange.png', 'apple.bpm'];

console.log(array[0]);

//alert("hello");

//let answer = confirm("как ты ");

//console.log(answer);

//let answer = +prompt("Есть ли вам 18?", "Да"); 
//console.log(typeof(null));
//console.log("arr"+"-object");
//console.log(4+"-object");

let incr = 10,
    decr= 10;


console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2"=== 2);

let isCheced = false,
    isClose = false;
    console.log (isCheced || !isClose);