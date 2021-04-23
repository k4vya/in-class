'use strict';

console.log("hello world");

function sayHello(name){
    return "Hello, "+name;
}

let msg = sayHello("Joel");
console.log(msg); //"Hello Joel"

//assign array to variable
let myArray = ['a','b','c'];

typeof myArray //=> 'object'
let other = myArray;

//access value in other
console.log( other[1] ); //print 'b'

//assign function to variable
function sayHello(name) { 
    console.log("Hello, "+name);
 }
 
 typeof sayHello // 'function'
 other = sayHello;
 
 //prints "Hello, everyone"
 other('everyone'); 

 let myArray2 = [1, 2, 3]; //named
 console.log(myArray2);
 console.log([4, 5, 6]); //anonymous :3

 let sayWassup = function(person) { 
     console.log("hello, " + person)
 }

 sayWassup('kavya');

var obj = {}
function sayHello(name) { 
   console.log("Hello, "+name);
}

//assign function to object
obj.sayHi = sayHello;
console.log(obj.sayHi('all'));
//access with dot notation
obj.sayHi('all'); //prints "Hello all"


//assign literal (anonymous value)
obj.otherFunc = function() { 
    console.log("Hello world!");
}


function sayHello(name) { 
    console.log("Hello, "+name);
 }
 
 //takes ANOTHER FUNCTION as an arg
 //will call the arg function, 
 //passing it "world"
 function doWorld(aFunction) {
    aFunction("world");
 }
 
 
 
 //call function and pass value
 doWorld(sayHello); //prints "Hello world"
 
 
 //pass literal (anonymous value)
 doWorld(function(msg) {
   console.log("you said earlier: "+msg);
 }); //prints "you said: world"
 
 /* note where parens and braces close! */

function sayHello3() { //version with no args
    return "Hello version 3";
}

//print out the function
console.log( sayHello3 ); // logs "[Function: sayHello]" 
                         // the function

//resolve the expression, THEN print that out
console.log( sayHello3() ); // logs "Hello", which is 
                            // what `sayHello()` resolves to.

//takes in TWO callback functions!
function doTogether(firstCallback, secondCallback){
    firstCallback();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the same time!');
}

function patHead() {
    console.log('pat your head');
}

function rubBelly() {
    console.log('rub your belly');
}

//pass in the callbacks to do them together
doTogether(patHead, function() { console.log('whistle too!')});


let array = ['a', 'b', 'c'];
let printItem = function(item) { 
    console.log(item);
}

array.forEach(printItem); //call back 

//more common:
array.forEach(function(item) {
    console.log(item);
});

function square(n) { //a function that squares a number
    return n*n;
}

let numbers = [1,2,3,4,5];  //an initial array

//map the numbers using the `square` transforming function
let squares = numbers.map(square);

console.log(squares); // [1, 4, 9, 16, 25]

let squares2 = numbers.map(function(n) { //insert anon funcy here
    return n*n;
})

console.log(squares2); // [1, 4, 9, 16, 25]

let array3 = [3,1,4,2,5];

let isACrowd = array3.filter(function(n) { 
   return n >= 3; //keep if > 3
}); //returns [3,4,5]

console.log(isACrowd);
/////////////////////////
let array4 = [34,20,14,21,55];

let isACrowd2 = array4.filter(function(n) { 
   return n >= 21; //keep if > 3
}); //returns [3,

console.log(isACrowd2);
////////////////////////////////
function add(total, next) { //adds two numbers
    let newTotal = total + next;
    return newTotal;
}

function add(total, next) { //adds two numbers
    let newTotal = total + next;
    return newTotal;
}

numbers = [1,2,3,4,5];  //an initial array

let sum = numbers.reduce(add);

console.log(sum); //15