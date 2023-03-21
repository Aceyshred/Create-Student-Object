var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello world');
var Student = /** @class */ (function () {
    function Student(studName, studAge, studGen, studNation) {
        this.name = studName;
        this.age = studAge;
        this.gender = 'Female';
        this.nationality = studNation;
    }
    Student.prototype.getNationality = function () {
        return "Nationality: ".concat(this.nationality);
    };
    return Student;
}());
var student1 = new Student("Eddie Van Halen", 64, "male", "Dutch");
var student2 = new Student("Bret Hart", 65, "male", "Canadian");
var student3 = new Student("Moneer", 27, "male", "Yemeni");
console.log(student1.getNationality());
console.log(student2);
console.log(student3);
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(studName, studAge, studGen, studNation, studBatch, studGpa) {
        var _this = _super.call(this, studName, studAge, studGen, studNation) || this;
        _this.batch = studBatch;
        _this.gpa = studGpa;
        return _this;
    }
    return UnderGraduates;
}(Student));
var student4 = new UnderGraduates("Owen Hart", 37, "male", "Canadian", 1, 3.7);
console.log(student4);
console.log(student4.getNationality());
