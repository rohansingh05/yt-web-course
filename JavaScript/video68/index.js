console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
});

document.getElementsByTagName("div")

// let e= document.getElementsByTagName("div")
// e[4].matches("#redbox")

// e[2].closest("#redbox")
// e[2].closest(".container")
// e[2].closest("html")

document.querySelector(".container").contains(e[2])
document.querySelector("body").contains(document.querySelector(".container"))