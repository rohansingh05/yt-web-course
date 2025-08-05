console.log("Hey this is Function tutorial")
function nice(name) {
    console.log("Hey " + name + " you are good")
    console.log("Hey " + name + " your tshirt is nce")
    console.log("Hey " + name + " you are good in hinglish")
    console.log("Hey " + name + " you are genius")
}
// nice("Baloo")
// console.log("\n")
// nice("Shivam")
// console.log("Hey Rohan you are good")
// console.log("Hey Rohan your tshirt is nce")
// console.log("Hey Rohan you are good in hinglish")
// console.log("Hey Rohan you are genius")
function sum(a, b, c = 3) {
    // console.log(a+b)
    console.log(a, b, c)
    return a + b + c
}
result1 = sum(3)
result2 = sum(8, 5)
result3 = sum(7, 3)
result4 = sum(9, 4, 1)
console.log("The sum of these number is : ", result1)
console.log("The sum of these number is : ", result2)
console.log("The sum of these number is : ", result3)
console.log("The sum of these number is : ", result4)

const func1 = (x)=>{
    console.log("I am a arrow function",x);
}
func1(34)
func1(66)
func1(84)