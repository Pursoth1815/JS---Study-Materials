// Object 
let person = {

    // data properties
    
    firstName: "Puli",
    
    lastName: "Kutty",

    // Assistive Properties

    get fullName() {
        
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {

        let values = value.split(" ")

        this.firstName = values[0];

        this.lastName = values[1] ?? ""; // null-coalescing operator ??
    },
};

person.fullName = "Tiger"

console.log(person.fullName);