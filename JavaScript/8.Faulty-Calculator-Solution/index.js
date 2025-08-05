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
let random = Math.random()
 console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter Second number")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if (random>0.1){
    //perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //perform wrong operation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
