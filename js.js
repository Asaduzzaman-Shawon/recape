const num = [1,2,5]
if(typeof num === 'number'){
    console.log("I am Number");
}
else{
    console.log("I am not a number");
}

console.log(typeof Array.isArray(num));