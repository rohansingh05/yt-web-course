
console.log('This is promises');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a<0.5){
        reject("No random number was not supporting you")
    }
    else{
        setTimeout(() => {
        console.log("yes I am done")
        resolve("Harry")
    }, 3000);
}
})

prom1.then((a) => {
  console.log(a);
  
}).catch((err)=>{
    console.log(err);
    
})


let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a<0.5){
        reject("No random number was not supporting you 2")
    }
    else{
        setTimeout(() => {
        console.log("yes I am done 2")
        resolve("Harry 2")
    }, 1000);
}
})

let p3=Promise.all([prom1, prom2])
p3.then((a)=>{
    console.log(a);
    
}).catch(err=>{
    console.log(err)
})
