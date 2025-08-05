console.log("Harry is a hacker")
console.log("Rohan is a hacker")

setTimeout(() => {
    console.log("I am inside setTimeout")
}, 2000);

console.log("The end")

const callback=(arg) => {
  console.log(arg)

}

const loadScript=(src, callback) => {
  let sc=document.createElement("script")
  sc.src=src
  sc.onload = callback("Harry")
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )
