const item = [
    {id:1, name: "phone"},
    {id:2, name: "cat"},
    {id:3, name: "dog"},
];

id = item.find( function(items){
    return items.name ==='cat'
})

index = item.findIndex( function(items){
    return items.name ==='dog'
})
arrow = item.find((items)=>{
    return items.name ==='phone'
})

console.log(id);
console.log(index);
console.log(arrow);