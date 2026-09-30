let schoolName = "Northwest Samar State Unniversity";  
let totalStudents = 0;                     
let isEnrollmentOpen = true;               

let courses = ["BSIT", "BSIS", "BSCS"];                
let grades = [85, 90, 78, 92];                         
let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];        


const schoolInfo = {  
    name: schoolName,
    location: "Calbayog City",
    founded: 1995
};

const admin = {   
    name: "Dollado, Rodolfo",
    position: "Dean"
};


class Person {  
    #id;  
    constructor(id, name, age) {  
        this.#id = id;
        this.name = name;
        this.age = age;
    }
    getId() { return this.#id; }  
    introduce() {  
        console.log(`Hi, I'm ${this.name}`);
    }
}

class Student extends Person {  
    constructor(id, name, age, course) {  
        super(id, name, age);
        this.course = course;
        this.subjects = []; 
    }
   
    introduce() {  
        console.log(`Hi, I'm ${this.name} and I'm taking ${this.course}`);
    }
    addSubject(subject) { this.subjects.push(subject); } 
}

class Teacher extends Person {  
    constructor(id, name, age, subject) {
        super(id, name, age);
        this.subject = subject;
    }
    teach() { console.log(`${this.name} is teaching ${this.subject}`); } 
}

class Course {
    constructor(code, title) {
        this.code = code;
        this.title = title;
        this.students = []; 
    }
    enrollStudent(student) { this.students.push(student); } 
}


function calculateAverage(arr) {  
    let sum = 0;
    for(let grade of arr) { sum += grade; }
    return sum / arr.length;
}

let student1 = new Student(101, "Jane", 19, "BSIT");  
let student2 = new Student(102, "Bridget", 20, "BSCS");  
let teacher1 = new Teacher(201, "Prof. Ortiz", 35, "Professional Elective 2");
let course1 = new Course("IT303", "Intro to Professional Elective 2");


console.log("--- Courses Offered ---");
for(let i = 0; i < courses.length; i++) {
    console.log(`${i+1}. ${courses[i]}`);
}


let dayIndex = 0;
console.log("\n--- School Days ---");
while(dayIndex < days.length) {
    console.log(days[dayIndex]);
    dayIndex++;
}


console.log("\n--- Student Grades ---");
for(let grade of grades) {
    console.log(`Grade: ${grade}`);
}

if(totalStudents > 100) {
    console.log("\nSchool is full");
} else if(totalStudents > 50) {
    console.log("\nSchool is half full");
} else {
    console.log("\nEnrollment is open");
}


let status = isEnrollmentOpen ? "Enrollment Open" : "Enrollment Closed";
console.log(status);


switch(student1.course) {
    case "BSIT":
        console.log("Welcome to IT Department!");
        break;
    case "BSIS":
        console.log("Welcome to IS Department!");
        break;
    default:
        console.log("Welcome to our school!");
}

console.log("\n========== SYSTEM OUTPUT ==========");
student1.introduce(); 
student2.introduce();
teacher1.teach();
course1.enrollStudent(student1);
student1.addSubject("Math");
student1.addSubject("English");

console.log(`Average Grade: ${calculateAverage(grades).toFixed(2)}`); 
console.log(`School Info: ${schoolInfo.name}, ${schoolInfo.location}`);
console.log(`Admin: ${admin.name}`);
console.log(`Student 1 ID: ${student1.getId()}`); 