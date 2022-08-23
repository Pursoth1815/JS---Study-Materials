const dropDown = {
    'Tamil Nadu': ['trichy','chennai','CBE'], 
    'Kerala': ['kolikod','thiru','sabari'], 
    'Munbai': ['rohit','sac','indians'], 
}

for(let key in dropDown) {
    console.log(key);
}

for(let key of Object.keys(dropDown)) {
    console.log(key.toLocaleUpperCase());
}

for(let entries of Object.entries(dropDown)) {
    console.log(entries);
}

if('CBE' in dropDown) {
    console.log('true');
} else {

    console.log('false'); 
}
    