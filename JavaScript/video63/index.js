console.log("This is an Array tutorial")

let arr = [1,7,5,9,4]
// INDEX   0 1 2 3 4
//console.log(arr, typeof arr)
// console.log(arr.length) //ye array ka length batata hai
//arr[0]=566 //allowed
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

console.log(arr.toString()) // ye array ko string mein badal dega
console.log(arr.join(" and ")) // array ke element ke beech and join karega
console.log(arr.pop()) // ye last element ko nikalega
console.log(arr.push(100)) // ye array mein element add karega last mein 
console.log(arr)
console.log(arr.push("Harry"))
console.log(arr)
console.log(arr.push("Rohan"))
console.log(arr)
console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.shift()) // yeh pehle element ko nikale ga
console.log(arr)
console.log(arr.unshift("jack"))// ye array mein element add karega starting mein 
console.log(arr)
console.log(delete arr[3])
console.log(arr)
console.log(arr.length)
console.log(arr[3])

let a = [1,7,5,9,4]
let b = [1,7,5,9,4]
let c = [1,7,5,9,4]
console.log(a.concat(b, c))

let d = [1,7,5,9,4]
console.log(d.sort())

let number = [1,2,3,4,5]
// console.log(number.splice(1, 2))
// console.log(number)

// console.log(number.splice(1, 3))
// console.log(number)

console.log(number.splice(1,3,443,223))
console.log(number)