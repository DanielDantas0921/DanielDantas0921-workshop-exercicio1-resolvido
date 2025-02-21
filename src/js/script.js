const menu = document.querySelector(".menu")
const navMenu = document.querySelector(".nav-menu")
const main = document.querySelector(".main")
const left = document.querySelector(".left")
const right = document.querySelector(".right")

menu.addEventListener("click", function (){
    menu.classList.toggle("ativo")
    navMenu.classList.toggle("ativo")
    main.classList.toggle("ativo")
    left.classList.toggle("ativo")
    right.classList.toggle("ativo")
})