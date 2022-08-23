let a = -1;

if(a > 0){
    return 'YES';
}
else{
    throw (a === 0 ? new Error('Zero Error') : new Error('Negative Error'));
}
