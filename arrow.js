// Normal function 
// function doubleIt(num){
//     return num*2;
// }

// OR 
// const doubleIt = function(num){
//     return num*2;
// }

// arrow function 
const doubleIt = num => num*2;
const add = (x, y) => x + y;

// arrow function multiple parameter 
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}



const result = doubleIt(50);
const result2 = add(50, 70);
const result3 = doMath(7, 5);


console.log("double It this number:", result);
console.log("add two number: ", result2);
console.log("sum and difference multiply:", result3);