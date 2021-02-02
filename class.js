class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Shiddeshori school";
    }
}

const student1 = new Student(12, "mohin");
const student2 = new Student(22, "Ali");

console.log(student1, student2);