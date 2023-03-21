interface Iundergrad{
    name:string;
    age:number;
    gender:string;
    nationality:string;
    batch:number;
    gpa:number;
}

class Student{
    name:string;
    age:number;
    gender:string;
    nationality:string;

    constructor(studName:string, studAge:number, studGen:string, studNation:string){
        this.name = studName;
        this.age = studAge;
        this.gender = 'Female';
        this.nationality = studNation;
    }
    getNationality() : string{
        return `Nationality: ${this.nationality}`
    }
}

let student1 = new Student("Eddie Van Halen", 64, "male", "Dutch")
let student2 = new Student("Bret Hart", 65, "male", "Canadian")
let student3 = new Student("Razor Ramon", 49, "male", "Cuban")
console.log(student1.getNationality())
console.log(student2)
console.log(student3)

class UnderGraduates extends Student implements Iundergrad{
    batch:number;
    gpa:number;

    constructor(studName:string, studAge:number, studGen:string, studNation:string, studBatch:number, studGpa:number){
        super(studName, studAge, studGen, studNation)
    this.batch = studBatch
    this.gpa = studGpa
    }
}

let student4 = new UnderGraduates ("Ric Flair", 37, "male", "American", 1, 3.7)
console.log(student4)
console.log(student4.getNationality())