const firstName = "Md. Mohin";
const middleName = "Uddin";
const lastName = "Talukdar";
const fullName = firstName + " " + lastName + " you are a good boy";

// using template 
 const fullName2 = `${firstName} ${middleName + " " +  lastName} you are a lucky boy` ;

console.log("Your Name is : ", fullName);
console.log("Your Name is : ", fullName2);

const multiLine = "I love you\n"
        + "I miss you\n"
        + "I need you";

console.log('\n');

const multiLine2 = `I don't Love you
I don't miss you
I don't Need you
baily raod a jawar dorkar nai`;

console.log(multiLine);
console.log("using template: \n");
console.log(multiLine2);


