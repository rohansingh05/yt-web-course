console.log("This is tutotrial for solution of Business name generator")
let rand = Math.random()
let first, second, third
// Adjective name
if(rand<0.33){
    first = "crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}
//Shop name
rand = Math.random()
if(rand<0.33){
    second = "Engine"
}
else if(rand<0.66 && rand>=0.33){
    second = "Foods"
}
else{
    second = "Garments"
}
//Let's generate the another word
rand = Math.random()
if(rand<0.33){
    third = "Bros"
}
else if(rand<0.66 && rand>=0.33){
    third = "limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)