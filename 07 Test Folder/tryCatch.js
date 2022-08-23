function revStr(s) {
    try {
        let final = s.split("").reverse().join("");
        console.log(final);
    }
    catch(err){
        console.log(err.message);
        let numRev = s.toString().split("").reverse().join("");
        console.log(numRev);
    }

}


revStr('1234');
revStr(Number(1234));

console.log(Number(1234));