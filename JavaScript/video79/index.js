let a = prompt("Enter a number");

let b = prompt("Enter another number");
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum =parseInt(a) + parseInt(b);
// console.log("The sum is ",sum);

function main(){

    let x = 10;
try {
    console.log("The sum is ",sum*x);
    return true
} catch (error) {
    console.log("Error aa gaya bhai");
    return false
}
finally {
    console.log("files are being closed and db connections are being closed");
}

}
 let c=main()