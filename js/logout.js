const usuario = JSON.parse(localStorage.getItem("loginExitoso")) || false
if(!usuario)
    window.location.href = "login.html"

const logout = document.getElementById("logout")
logout.addEventListener("click", ()=>{
    alert("Vuelve Pronto!")
    localStorage.removeItem("loginExitoso")
    window.location.href = "login.html"
})