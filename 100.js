// function fruit(){
//     console.log(name);
//      console.log(color);

//     var name = "apple"; //undefined 
//     let color = "20"; // error
// }
// fruit();

// for(var i = 0; i < 3; i++){
//     setTimeout(() =>
//         console.log(i), 1);
// }
// this have global scope,loop will ne finished before settimeout

//3)
// console.warn(+true); // + sign bef string or bool it ll convert into num
// console.warn(typeof +true);

//4(
// console.warn(!"adi"); -> false !!"adi" -> true
// console.warn(typeof ("adi")); -> string

//5)
// let data = "size";

// const bird = {
//     size: "small",
// };

// console.warn(bird[data]); // small
// console.warn(bird["size"]); // smalls
// console.warn(bird.size); //small
// console.warn(bird.data);//undefined //bird[data] -> small


//6)
    // let c = { name : "adi"};
    // let d;
    // d =c;  // d is a reference to the same object as c
    // c.name = "sai";
    // console.log(d.name); 

//7)
// let a= 3;
// let b = new Number(3);

// console.warn(a == b); // true, because value is same    
// cons(ole.warn(a === b); // dataType check false, because a is primitive and b is object

//8
// let num = 0;
// console.log(num++); // 0, post-increment returns the value before incrementing
// console.log(++num); // 2, pre-increment returns the value after incrementing
// console.log(num); // 2, final value after both increments

//9)

// function getAge(...args){
//     // console.log(args.length); // 3, because we passed three arguments
//     console.log(typeof args); // object, because rest parameter is an array-like object

//     getAge(10);
// }

//10)

// const sum = eval("10*20+5");
// console.log(sum); // 205, eval evaluates the expression as JavaScript code

//11)
// how long is secret stored in session storage?
// sessionStorage.setItem("secret", 123);

//12

//you can check the property as numeric as well as string

// let obj = {1: "a", 2: "2", 3: "3"};

// // console.log(obj.hasOwnProperty("1")); if hello instead of 1 only string hello work 
// console.warn(obj.hasOwnProperty(1));   

// //override the property
// const obj = {a: "one", b: "two", a: "repeat"};
// console.warn(obj);// { a: 'repeat', b: 'two' }

//13)
// for(let i =1 ;i<5;i++){
//     if(i === 3){
//         continue; // skips the current iteration when i is 3
//     }   
//     console.log(i); // prints 1, 2, 4
// }

//14
// const foo = () => console.log("First");
// const bar =() => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");
// // First
// // Third
// // Second

// bar();
// foo();
// baz();

//15)
// const preson = {name:'lydia'}

// function sayHi(age){
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(preson, 21)); // "lydia is 21"
// console.log(sayHi.bind(preson, 21)()); // "lydia is 21"

//16)
// function dayHi() {
//     return (() => 0)();
// }
// console.log(dayHi()); // 0, because the inner arrow function is immediately invoked and returns 0

//17)
// console.log(typeof typeof 1); // "string", because typeof 1 returns "number", and typeof "number" returns "string"

// const num = [1,2,3];
// num[9] = 11; // setting a value at index 9
// console.log(num); // [1, 2, 3, <6 * empty items>, 11]

//18)
// everything in js is either primitive or obj 

//19)
// console.log(typeof null); // "object", this is a known quirk in JavaScript, where null is considered an object type

//20)
// console.log(typeof undefined); // "undefined", because undefined is a primitive type representing the absence of value

//21)
// console.log(typeof NaN); // "number", NaN is a special numeric value representing "Not-a-Number"    

//22)
// console.log(typeof 3+4+"5") number45
// console.log(typeof (3+4)+"5"); // "number5", because (3+4) evaluates to 7, and typeof 7 is "number"
// console.log(typeof (3+4+ +"5")); //number // "number", because (3+4+ +"5") evaluates to 12, and typeof 12 is "number" 
// console.log(typeof (3+4+"5") ); //string // "string", because (3+4+"5") evaluates to "75", and typeof "75" is "string"  

// //23)
// console.log([] + []); // "", because adding two empty arrays results in an empty string
// console.log([] + {}); // "[object Object]", because adding an empty array to an object coerces the object to a string
// console.log({} + []); // "[object Object]", because adding an object to an empty array coerces the object to a string
// console.log({} + {}); // "[object Object][object Object]", because adding two objects coerces both to strings and concatenates them
// console.log({} + 1); // "[object Object]1", because adding an object to a number coerces the object to a string and concatenates it with the number
// console.log([] + 1); // "1", because adding an empty array to a number coerces the array to an empty string, resulting in "1"
// console.log({} + "1"); // "[object Object]1", because adding an object to a string coerces the object to a string and concatenates it with the string "1"
// console.log([] + "1"); // "1", because adding an empty array to a string coerces the array to an empty string, resulting in "1"
// console.log({} + true); // "[object Object]true", because adding an object to a boolean coerces the object to a string and concatenates it with "true"  
// console.log([] + true); // "true", because adding an empty array to a boolean coerces the array to an empty string, resulting in "true" 
// console.log({} + false); // "[object Object]false", because adding an object to a boolean coerces the object to a string and concatenates it with "false"   
// console.log([] + false); // "false", because adding an empty array to a boolean coerces the array to an empty string, resulting in "false"
// console.log({} + null); // "[object Object]null", because adding an object to null coerces the object to a string and concatenates it with "null"
// console.log([] + null); // "null", because adding an empty array to null coerces the array to an empty string, resulting in "null"  
// console.log({} + undefined); // "[object Object]undefined", because adding an object to undefined coerces the object to a string and concatenates it with "undefined"
// console.log([] + undefined); // "undefined", because adding an empty array to undefined coerces the array to an empty string, resulting in "undefined"  
// console.log({} + ""); // "[object Object]", because adding an object to an empty string coerces the object to a string
// console.log([] + ""); // "", because adding an empty array to an empty string results in an empty string
// console.log([] == []); // false, because two different empty arrays are not equal in JavaScript
// console.log({} == {}); // false, because two different empty objects are not equal in JavaScript
// console.log([] == {}); // false, because an empty array is not equal to an empty object in JavaScript
// console.log([] == true); // false, because an empty array is not equal to true in JavaScript
// console.log([] == false); // true, because an empty array is coerced to false in JavaScript
// console.log({} == true); // false, because an empty object is not equal to true in JavaScript
// console.log({} == false); // false, because an empty object is not equal to false in JavaScript
// console.log([] == null); // false, because an empty array is not equal to null in JavaScript
// console.log([] == undefined); // false, because an empty array is not equal to undefined in JavaScript
// console.log({} == null); // false, because an empty object is not equal to null in JavaScript
// console.log({} == undefined); // false, because an empty object is not equal to undefined in JavaScript
// console.log([] == ""); // true, because an empty array is coerced to an empty string in JavaScript
// console.log({} == ""); // false, because an empty object is not equal to an empty string in JavaScript
// console.log([] == 0); // true, because an empty array is coerced to 0 in JavaScript
// console.log({} == 0); // false, because an empty object is not equal to 0 in JavaScript
// console.log([] == "0"); // false, because an empty array is not equal to the string "0" in JavaScript
// console.log({} == "0"); // false, because an empty object is not equal to the string "0" in JavaScript
// console.log([] == "1"); // false, because an empty array is not equal to the string "1" in JavaScript
// console.log({} == "1"); // false, because an empty object is not equal to the string "1" in JavaScript
// console.log([] == true); // false, because an empty array is not equal to true in JavaScript
// console.log([] == false); // true, because an empty array is coerced to false in JavaScript
// console.log({} == true); // false, because an empty object is not equal to true in JavaScript
// console.log({} == false); // false, because an empty object is not equal to false in JavaScript
// console.log([] == null); // false, because an empty array is not equal to null in JavaScript
// console.log([] == undefined); // false, because an empty array is not equal to undefined in JavaScript
// console.log({} == null); // false, because an empty object is not equal to null in JavaScript
// console.log({} == undefined); // false, because an empty object is not equal to undefined in JavaScript
// console.log([] == ""); // true, because an empty array is coerced to an empty string in JavaScript
// console.log({} == ""); // false, because an empty object is not equal to an empty string in JavaScript
// console.log([] == 0); // true, because an empty array is coerced to 0 in JavaScript

// //24
// console.log([] === []); // false, because two different empty arrays are not strictly equal in JavaScript
// console.log({} === {}); // false, because two different empty objects are not strictly equal in JavaScript
// console.log([] === {}); // false, because an empty array is not strictly equal to an empty object in JavaScript
// console.log([] === true); // false, because an empty array is not strictly equal to true in JavaScript
// console.log([] === false); // false, because an empty array is not strictly equal to false in JavaScript

//25

// function getInfo(member){
//     member.name = 'John';
// }
//     const person = { name: 'Doe'};

//     getInfo(person);

//     console.log(person);

//26

//blocks scope
// (() => {
//     let x = (y=10);
// })();

// console.log(typeof x); // undefined, because x is declared with let inside an IIFE and is not accessible outside
//console.log(typeof y); // "number", because y is assigned a value of 10 without var, let, or const, making it a global variable 

//27

// let x= 10;

// (() => {
//     var x = 20; // var is function-scoped, so this x is different from the outer x
//     console.log(x); // 20, because the inner var x shadows the outer x
// })();
// console.log(x); // 10, because the outer x is not affected by the inner var x

// //28
// console.warn(true+ +"10") // 11, because true is coerced to 1, and +"10" is coerced to 10, resulting in 1 + 10 = 11
// console.warn(true + "10"); // "true10", because true is coerced to the string "true", and concatenated with "10"