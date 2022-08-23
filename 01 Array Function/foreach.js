// FOR EACH


const number=[1,2,30,4,5,6,7,8,9,10];
//value,index,array
number.forEach((value)=>{
  console.log(value);
});

number.forEach((value,index)=>{
  console.log("ID : "+index+" Value: "+value);
});

const users =[
  {full_name:"Ram",age:12,city:"Salem",salary:10000},
  {full_name:"Sam",age:15,city:"Chennai",salary:10500},
  {full_name:"Ravi",age:22,city:"Namakkal",salary:12000},
  {full_name:"Joes",age:18,city:"Hosur",salary:6000},
  {full_name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
  {full_name:"Stanley",age:10,city:"Salem",salary:8000},
];

console.table(users);

users.forEach((value)=>{
  console.log(value.full_name);
});