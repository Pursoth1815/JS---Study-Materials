const users =[
    {name:"Ram",age:12,city:"Salem",salary:10000},
    {name:"Sam",age:15,city:"chennai",salary:10500},
    {name:"Ravi",age:22,city:"Namakkal",salary:12000},
    {name:"Joes",age:18,city:"hosur",salary:6000},
    {name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
    {name:"Stanley",age:10,city:"Salem",salary:8000},
  ];

  console.table(users);

  // Normal Function for call back function

  function nameSort(a, b) { 
    
    if(a.name > b.name) return 1 

    if(a.name < b.name) return -1
    
    return 0

  }

  // Arrow Function for call back function


  let salarySort = (a, b) => a.age - b.age

  let result = users.sort(salarySort).sort(nameSort).filter( (value) => value.salary < 10000).map( ( val ) => val.name + " : " + val.age + " : $" +val.salary);

console.log(result)
