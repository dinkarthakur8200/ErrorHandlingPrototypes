function getPerson(person) {
    try {
        if (typeof person !== 'object' || person === null || !('name' in person) || !('age' in person)) {
            throw new Error("Invalid parameter type");
        }
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        return error.message;
    }
}

// Example usage:
console.log(getPerson({ name: "John", age: 30 })); // Output: "Name: John, Age: 30"
console.log(getPerson({ name: "Jane" }));          // Output: "Invalid parameter type"
console.log(getPerson("Not an object"));           // Output: "Invalid parameter type"
