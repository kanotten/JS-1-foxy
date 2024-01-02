//variables
var myName = "Line";
console.log(myName); // output : Line

let age = 31;
console.log(age); // output : 31

const BRAND = "BMW";
console.log(BRAND); // output : BMW

let greeting = "Hello, World";
console.log(typeof greeting); // typeof shows what is in this variable, greeting is a string

let isHappy = true;
console.log(isHappy); // boleans in this case is true.

//Object
let person = {
  firstname: "Hesham",
  lastname: "El Masry",
  age: 31,
};
console.log(person); // will show persons content
console.log(person.firstname); // shows only the "person" first name
console.log(person.lastname); // -- last name
console.log(person.age); // -- age for object/person

let car = {
  brand: "Volvo",
  model: 1992,
  condition: "Used",
  price: 10000,
  service: "yearly service",
  eucertified: 2026,
};
console.log(car); // car is the object, when consolelog it shows all the info/contents.
console.log(
  " I have a " +
    car.brand +
    " and it is " +
    car.model +
    " and it is " +
    car.condition +
    " and the price is " +
    car.price +
    " NOK"
); // this is how to add numbers and txt together.

//Array

let colors = ["Red", "Green", "Blue"];

let random = [
  55656,
  "Green",
  { name: "Hesh", age: 31 },
  ["boy", "girl", "whatever"],
]; // Array can holw many thing, as is a larger storage box. Positions start with 0,1,2,3 etc so first is 0.
console.log(random[0]);

// Type Conversion

let year = "1992"; // string

// fromt string to number

let convertedYear = parseInt(year);
console.log(convertedYear);

//convert number to string

let num = 123;

console.log(num.toString()); //this does not add it out of it scope for further use, thats way we add a variable instead.

let convertedNumber = num.toString();

console.log(convertedNumber); // same result, but can be used out of it scope for further use. because its stored as a variable

// working task 1

var City = "Oslo";

let Age = 28;

const Birthyear = 1995;

console.log(City, Age, Birthyear); // logs all the variables above.
console.log(typeof City, typeof Age, typeof Birthyear); // logs diffirent types of each variable

//working task 2

let Greeting = "Hello, friend";

let quantity = 2457;

let isJavaScriptFun = true;

let thisIsUndefined;
console.log(thisIsUndefined); // undefined statement

let emptyValue = null;
console.log(emptyValue);

console.log(typeof greeting); // string
console.log(typeof quantity); // number
console.log(typeof isJavaScriptFun); // boolean
console.log(typeof thisIsUndefined); // undefined
console.log(typeof emptyValue); // object / empty value

//working task 3

let numString = "25";

let theNum = parseInt(numString);

let num2 = 50;

let numString2 = num2.toString();


console.log("numString2:", numString2); // Output: 50

console.log("num + num2:", theNum + num2); // Output: 75




