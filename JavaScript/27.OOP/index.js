// let obj = {
//     a: 1,
//     b: "Harry",
// }

// console.log(obj);

// let animal = {
//     eats: true,
// }

// let rabbit = {
//     jumps: true,
// }

// rabbit.__proto__ = animal; // setting prototype

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created....");
    }

    eats(){
        console.log("This animal eats food");
    }
    jumps(){
        console.log("This animal jumps");
    }
}

class lion extends Animal{
    constructor(name){
        super(name); // calling the constructor of the parent class
        console.log("Lion object is created....");
    }
      eats(){
        super.eats(); // calling the eats method of the parent class
        console.log("This animal eats food like meat");
    }
}


let a = new Animal("Dog");
console.log(a);

let l = new lion("Shera");
console.log(l);