// Create a business name generator by combining list of adjective and shop name and another word

/*
Adjective: 
Crazy
Amazing
Fire

shop name:
Engine 
Foods
garments

Another word
bros
limited
hub

*/
// let a=prompt("Enter Adjective name")
// let b=prompt("Enter shop name")
// let c=prompt("Enter Another word")

// alert("The Business name is: ")
// alert(a.concat(b, c))

let rand = Math.random();
let first, second, third;
// Adjective name
if (rand < 0.33) {
    first = "Crazy";
} else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing";
} else {
    first = "Fire";
}

//shop name
rand=Math.random();
if(rand<0.33){
    second="Engine"
}
else if(rand<0.66 && rand>=0.33){
    second="Foods"
}
else{
    second="Garments"
}

// other word
rand=Math.random();
if(rand<0.33){
    third = "Bros"
}
else if(rand<0.66 && rand>=0.33){
    third = "Limited"
}
else{
    third = "Hub"
}

alert(`The Business name is: ${first} ${second} ${third}`);
