const abrir = document.getElementById("abrir")
const cerrar = document.getElementById("cerrar")
const nav = document.getElementById("nav")

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible")
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible")
})
