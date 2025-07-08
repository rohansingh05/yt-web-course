console.log("This is a tutorial on loops");

let a = 1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);
// console.log(a+3);

for (let i = 0; i < 100; i++) {
    console.log(a+i);
}

let obj={
    name: "Harry",
    role: "Programmer",
    company: "Code with Harry AI"
}
for (const key in obj) {
    // const element = obj[key];
    console.log(key)
}
for (const c of "Harry") {
    console.log(c)
}
let i=5
while(i<10){
    console.log(i);
    i++;
}

let b=10
do {
    console.log(b)
    b++
} while (b<6);
    
        
