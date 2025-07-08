let button = document.getElementById("btn")

// list of all mouse event
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent

button.addEventListener("dblclick", () => {
    //alert("I was clicked. Yayy!!")
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!!"
})


button.addEventListener("contextmenu", () => {
   alert("Don't Hack right click Please")
})


document.addEventListener("keydown", (e) => {
   console.log(e, e.key, e.keyCode)
})