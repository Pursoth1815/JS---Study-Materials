const donation = [456,900,540,34022,22,1,40]

let result = donation.reduce((pre, current) => {
    return pre + current;
});

console.log(` Total : ${result}`);


const users =[
    {name:"Ram",age:12,city:"Salem",salary:10000},
    {name:"Sam",age:15,city:"chennai",salary:10500},
    {name:"Ravi",age:22,city:"Namakkal",salary:12000},
    {name:"Joes",age:18,city:"hosur",salary:6000},
    {name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
    {name:"Stanley",age:10,city:"Salem",salary:8000},
  ];

//   preValue dosent have .salary becoz its will store an initial value 0 in its

  let salResult = users.reduce((preValue, curValue) => {
    return preValue + curValue.salary;  
  }, 0);

  console.log(`Total Salary List :  ${salResult}`);