class Parent{
    constructor(){
        this.fatherName = "Abdur Rashid";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }   
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("mohin");
const baby2 = new Child("Karim");

console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());