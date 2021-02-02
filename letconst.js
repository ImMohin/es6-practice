const hubbyName = "Mohin Uddin";
// hubbyName = "Karim uddin";
console.log('Constant variable : ', hubbyName);

// Constant variable 

const numbers = [12, 45, 50];
numbers[1] = 88;
numbers.push(30);
numbers.push(20, 12, 45);
numbers.push("mohin");
// numbers = ["mohin", "rahim", "karim"];

// Object declare 
const cricketer = { name: "Shakib Al Hasan", phone: 59458 };

console.log('this is array: ', numbers);
console.log("Cricketer list: ", cricketer);

// let variable using 

let patientName = "Rahim Uddin";
patientName = "karim uddin";
//summation of number using let variable
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
// let for loop scope ar baire thke access kora possible na 
// console.log(i);
console.log(sum);
console.log("Patient Name: ", patientName);