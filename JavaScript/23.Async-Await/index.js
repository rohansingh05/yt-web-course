// async function getData(){
//     // simulating getting data from a server
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }


//settle means resolve or reject
//resolve means promise has settled successfully 
//reject means promise has not settled successfully

async function getData(){
    // simulating getting data from a server
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
     console.log(data);
}
async function main() {
    
    console.log('Loading Modules');
    
    console.log('Do something else');
    
    console.log('Load data');
    
    let data =await getData()
    
    console.log(data);
        
        console.log('Process Data');
        
        console.log('task 2');
}

main()
// data.then((v)=>{
//     console.log(data);
    
//     console.log('Process Data');
    
//     console.log('task 2');
// })



