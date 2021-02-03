const person = {name: "Mohin uddin", age: 24, job: "Antaranga dot com ltd", phone: 018696833333, gfName: "Umme Salma", address: "24/1 Shantinagar"};

const gfName = person.gfName;
// const phone = person.phone;
const { address, name , phone , age } = person;

console.log(gfName, phone, address);
console.log(gfName, phone);


const complexObject = {
    name: 'abc';
    info: {
        address: "Chamelibagh dhaka";
        leader : "tiger leader";
    }
}

const {leader} = complexObject.info