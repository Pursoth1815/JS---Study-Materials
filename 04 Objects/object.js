let person ={
    name: "Puli",
    age: 23,

    print: function() {
        let msg = `Hii my name is ${this.name} & my age is ${this.age}`
        console.log(msg);
    }
};

person.print();

// a = ["red", "blue", "green"]

// print objects in for in loop

// for (i in person) {

//     console.log(i +" : ", person[i]);
// }

// for (i of a) {

//     console.log("Color : "+ i);
// }