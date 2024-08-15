// I have created a class which is not like a fuction .. 
// IN JS Class and Funciton are different .. 
// Now , I'm going to create a class name...

class Person {
    constructor(name = "Unkown", age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person("Mithun", 20);
console.log(person1.getDetails()); // Output: "Name: Mithun, Age: 20"

const person2 = new Person();
console.log(person2.getDetails()); // Output: "Name: Unknown, Age: 0"