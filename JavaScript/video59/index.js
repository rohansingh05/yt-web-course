//Create a faulty calculator using Javascript
/*
This faulty calculator does following:
1. It takes two number as input from the user
2. It performs wrong operation as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **

3. It performs wrong operation 10% of times

*/
let random=Math.random();
console.log(random); // This will give a random number between 0 and 1
let num1=prompt("Enter first number");
let operator=prompt("Enter the operator you want to use (+, -, *, /)");
let num2=prompt("Enter second number");

let obj={
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
};
if(random<0.1){
    operator=obj[operator]
    alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`);
}
else{
    alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`);
}