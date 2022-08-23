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

        if(typeof value != "string") {

            const err = new Error(" String la Kudu da Thaioli ");
            throw err;

        }

        if(value.length <= 3) throw " Name Invalid broo";

        let values = value.split(" ")

        this.firstName = values[0];

        this.lastName = values[1] ?? ""; // null-coalescing operator ??
    },
};


try {

    person.fullName = 323

}

catch(exe) {

    console.log(exe);
}


console.log(person.fullName);