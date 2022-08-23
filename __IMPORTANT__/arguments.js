function summAdd() {
    let total = 0;

    // Arguements is an defalut name taken by js to process function arguments 
    // instead of redeclaring
    // console.log(arguments);

    for( let value of arguments){
    
        total += value;
    }
    return total;
}

function summRest(...expenses) {

    return expenses.reduce((a,b) => a+b)


}

function summExtra(loan, ...expenses) {

    
    let exp = expenses.reduce((a,b) => a+b);
    // console.log(loan);

    return exp - loan;

}

let result = summAdd(23,34,62,1,4,45,22);

let restResult = summRest(50,123,34,62,145,22);

let extra = summExtra(50,123,34,62,145,22);

console.log(`Your total expenses : ${result }`);

console.log(`Your total expenses in Rest : ${restResult }`);

console.log(`Your total expenses in Extra : ${extra}`);

//... in array is SPREAD OPERATOR
//... in Func. is REST OPERATOR