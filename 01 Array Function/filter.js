const array = [1,2,3,4,5,6];

let newArray = array.filter( (value) => 
{
    return value%2==0;
});

console.log(newArray);

const mobile = [
    {id:1, name: "Samsung", mmodel: "m10", prize: 12000},
    {id:2, name: "Samsung", mmodel: "m12", prize: 15000},
    {id:3, name: "Samsung", mmodel: "m30", prize: 25000},
    {id:4, name: "OnePlus", mmodel: "Nord", prize: 28000},
    {id:5, name: "OnePlus", mmodel: "9T", prize: 35000},
    {id:6, name: "OnePlus", mmodel: "Nord CE", prize: 20000},
    {id:7, name: "IQOO", mmodel: "Z6", prize: 25000},
    {id:8, name: "VIVO", mmodel: "v15", prize: 20000},
    {id:9, name: "VIVO", mmodel: "v10", prize: 14999},
]

let byPrize15k = mobile.filter( (value) => 
{
    return value.prize <=15000;
});

let byPrize25k = mobile.filter( (value) => 
{
    return value.prize >15000 & value.prize<= 25000;
});

let byPrizeExp = mobile.filter( (value) => 
{
    return value.prize >25000;
});

console.log("Mobiles Under 15K : ", byPrize15k);

console.log("Mobiles Under 15K : ", byPrize25k);

console.log("Mobiles Under 15K : ", byPrizeExp);