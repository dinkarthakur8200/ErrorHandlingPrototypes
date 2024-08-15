class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
    getName() {
        return this.name;
    }
    getPostion() {
        return this.position;
    }
}

const employee1 = new Employee("DINKAR THAKUR", "Software Engineer at PW SKILL", 80000);
console.log(employee1.getSalary()); // Output: 80000

// If any case appear , we had to print the out put then , we have to call back the following funciton .. 
// LIke i'm doing this ... as shown ..
const emp2 = new Employee("Narayan Chaudhari","Cyber Security Secialist at Doggy Style..",90000);
console.log(emp2.getPostion());
// Different example usage...
const emp3 = new Employee("Mia Khalifa","PORNSTAR at BARAZZERS",1290000);
console.log(emp3.getName());