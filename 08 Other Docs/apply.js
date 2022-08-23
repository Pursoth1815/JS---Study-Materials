const person = {
    firstName: 'John',
    lastName: 'Doe'
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}

console.log(greet('hii','suk')); // Show Undefined

console.log(greet.apply(person,['hii','fuku']) ); // Show Undefined