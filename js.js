const num = [1,2,5]
if(typeof num === 'number'){
    console.log("I am Number");
}
else{
    console.log("I am not a number");
}

function sum(a, b){
    return a + b;
 }

 const result = sum(90, 5)
console.log(result);

const res = (a, b) => a + b;
const mul = res(90, 5);
console.log(mul);