/*
var obj1 = {
  name: "jai",
  age: 23,
  city: "Delhi",
};

var obj2 = obj1;
obj1.city = "hyd";
// console.log(obj2);
// console.log(obj1==obj2);

// obj1 = obj2 => this assignes the reference of obj1, so the changes made in either of the object will change both the objects

// obj1={...obj2} => this creates a new object in memory and no changes will be reflected in either of the objects if changed in one object

var a = 3;
var b = String("3");

//allocate b into new memory location

// console.log(a === b)

// Callback function is a function or peice of code that is passed as an argument to another function

function greet(name) {
  console.log(`Hello ${name}`);
}

function good(time) {
  console.log(`Good ${time}`);
}

function execute() {
  greet("Jhon");
  good("morning");
}
// execute()

let list = [1, 2,44.3, 3, 4,23.423, 5,2.3, 6, 7, 8, 9, 10];

//sort => sort function sorts by converting values into string which may result in wrong result, so always define callback fn with respective to the logic

//ascending order => a-b
list.sort((a, b) => a - b);
// list.sort();
// console.log(list);

//descending order => b-a
list.sort((a, b) => b - a);
// console.log(list);

//reduce => accepts two arguments accumulator and current value and returns single value as an output

let res= list.reduce((acc, value) => acc + value);
// console.log(res);

// filter => filters elements from the list and returns new list
const isEven = (e) => e % 2 == 0;
let newList1 = list.filter(isEven)
// console.log(newList1);

//map => return new array after performing specific operations
let newList = list.map((e, i) => {
    return e * e;
});
// console.log(newList);

//traverse the array
for (let num in list) {
  // logic(list[num])
}

function logic(i) {
  console.log(i + 10);
  console.log(i + 20);
  console.log(i + 30);
  console.log(i + 40);
}

//this keyword -> refers to current object
function sayHello() {
  let name="patel"
  console.log("hello"+this.name);
}

let person = {
  name: "jaimeen",
  greet: sayHello,
}

  // person.greet();

// this works on, which method invoked this
// this works only on regular functions
// this doesnot work in arrow functions
//global object is window (browser)

const msg = new String("hi")


const movie = {
  title: 'badshah',
  year: 2200,
  director:'rohit'
}
*/
/*
Cloning an object

const newMovie = { ...movie,hero:"ss" };
console.log(newMovie);

*/

// for (let entry of Object.entries(movie)) {
//   console.log(entry);
// }

// console.log(Object.keys(movie));
// console.log(Object.values(movie));
/*
function showProperties(obj) {
  for (let key in obj) {
      if (typeof obj[key] === 'number') {
      console.log(key,obj[key]);
    }
  }
}

// showProperties(movie);

const increase = (movie) => {
  movie.year++;
}

increase(movie);
// console.log(movie);

/*
when we deal with parameters and arguments of objects, it is passed as reference
meaning changing its value will result in value change every where in the code

in case of primitive types the value is passed as a copy in the parameter
meaning changing its value will not result in value change every where in the code
*/

/*
PROPERTIES VS METHODS

Properties: it is the information of the object. Ex: color:red ==> it cannot perform any operation

Method: it contains the behaviour of the object. Ex: start:function(){console("start")} ==> it can perform operation in the object
*/

/* Arrays */

// const numbers = [1, 2, 3, 4, 5];

/*
===Adding elements===
END=> 
numbers.push(6);
console.log(numbers);

Beginning=>
numbers.unshift(0);
console.log(numbers);

Middle=>
numbers.splice(2, 0, 2.3)
console.log(numbers);
*/
/*
const numbers = [1, 2, 3, 4, 5];

const except = (numbers, excluded) => {
  const res = [];
  numbers.forEach(element => {
    if (!excluded.includes(element)) res.push(element)
  });
  return res
}

const output = except(numbers, [1, 2])
// console.log(output);
  
*/


// POLYFILL FOR BIND
//Polyfill : it is a fallback option if a desired function donot work

let name1 = {
  fName: "jai",
  lName:"patel"
}

let printName = function () {
  console.log(this.fName+" "+this.lName);
}

// console.log((printName.bind(name1))());

Function.prototype.mybind = function (...args) {
  let obj = this;
  return function () {
    obj.call(args[0]);
  }
}

console.log((printName.mybind(name1))());