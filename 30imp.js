
// 1 reverse each word in string
// "Adi kem"
// "ida mek"
// map return somthing that save in new array
var str = "hows adi doin";

var savedstr = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
}).join(" ");

console.log(savedstr);


// 2 Sort colors
var colors = ["red", "blue", "green", "yellow", "purple"];
colors.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(colors);

// 3 Sort numbers
var numbers = [5, 3, 8, 1, 2];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
// 4 Sort objects by property
var people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 35 }
];
people.sort(function (a, b) {
  return a.age - b.age;
});
console.log(people);
// 5 Filter even numbers
var numbers = [5, 3, 8, 1, 2];
var evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);
// 6 Filter objects by property
var people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 35 }
];
var youngPeople = people.filter(function (person) {
  return person.age < 30;
});
console.log(youngPeople);
// 7 Map to uppercase
var words = ["hello", "world", "javascript"];
var uppercasedWords = words.map(function (word) {
  return word.toUpperCase();
});
console.log(uppercasedWords);
// 8 Map to square numbers
