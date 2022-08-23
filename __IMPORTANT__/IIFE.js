let no1 = 223;
let no2 = 445;


// IIFE Imediate Invoke Func. Expression

(function addNO(num1, num2) {
    let result = num1 - num2;

    console.log(result);
})(no1,no2);

// by arrow methoed

( (num1, num2) => {
    let result = num1 + num2;

    console.log(result);
})(no1,no2);
