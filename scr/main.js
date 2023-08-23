const openHTML = document.getElementById('open')
const closedHTML = document.getElementById("closed") 
const padreHTML = document.querySelector(".container")

openHTML.addEventListener("click",() => padreHTML.classList.add("show-nav"))

closedHTML.addEventListener("click",() => padreHTML.classList.remove("show-nav"))


