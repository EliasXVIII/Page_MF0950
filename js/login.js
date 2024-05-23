const loginForm = document.getElementById("loginForm")
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const Usuarios = JSON.parse(localStorage.getItem("users")) || []
    const usuarioValidado = Usuarios.find(user => user.email === email && user.password === password)
    if(!usuarioValidado){
        return alert("El usuario y/o contraseña incorrectos")
    }
    alert(`Bienvenido ${usuarioValidado.name}`)
    localStorage.setItem("loginExitoso", JSON.stringify(usuarioValidado))
    window.location.href = "index.html"
})
