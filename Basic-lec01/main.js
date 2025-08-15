console.log("Hello World");

// This is a simple JavaScript program that prints "Hello World" to the console.



console.log("tushar singh rawat");


var name = "himanshu";
var age = 25;

console.log("name: " + name);
console.log("age: " + age);


x = null
console.log("x: " + x);
console.log(typeof x);

let y = undefined;
console.log("y: " + y);
console.log(typeof y);



console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

var data = 29;
console.log("data1: " + data);
var data = 7;
console.log("same data1: " + data);

let data2 = 10;
console.log("data2: " + data2);
data2 = 20;
console.log("new data2: " + data2);

const data3 = "akshay";
console.log("name: " + data3);
// data3 = "rohit"; // This will throw an error because 'name' is a constant

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");


//object example - reference type
let student = {
    studentName: "Himanshu",
    age: 25,
    emialId: "bG0fW@example.com",
    studentAddress: {
        city: "Ghaziabad",
        state: "Uttar Pradesh"
    }
};

console.log("studentName: " + student.studentName);
console.log("age: " + student.age);
console.log("emialId: " + student.emialId);
console.log("city: " + student.studentAddress.city);
console.log("state: " + student.studentAddress.state);

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");



let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: apple



const greet = name => `Hello ${name}`;
console.log(greet("Himanshu")); // Output: Hello Himanshu

function foo(name){
    return "Hello " + name;
}
console.log(foo("chacha ki kahani")); // Output: Hello chacha ki kahani

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");