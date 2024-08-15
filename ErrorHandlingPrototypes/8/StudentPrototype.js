// we are going to  Define the Student constructor...
function Student(name) {
    this.name = name;
}

// Add the printDetails method to the Student prototype
Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Instantiate a Student object with the name "Mithun"
const student = new Student("Mithun");

// Call the printDetails method
student.printDetails();
