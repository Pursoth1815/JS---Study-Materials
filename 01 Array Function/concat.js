let array = [1,3,5,7]
let arrayNew = [2,4,6]

let sp1 = [1,3,5,7]
let sp2 = [2,4,6]

console.log("Using Spread operator :",[...sp1,...sp2]);

let sorta = array.concat(arrayNew)

let sort = sorta.slice(2,6)

console.log("Using Concat : ",sorta);


console.log("Splice methoed :",sort.sort());


let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);

console.log('Using Push Applay',arr); 