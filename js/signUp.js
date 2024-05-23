const signupForm = document.getElementById("signupForm")
signupForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const Usuarios = JSON.parse(localStorage.getItem("users")) || []
    const usuarioRegistrado = Usuarios.find(user => user.email === email)
    if(usuarioRegistrado)
        alert("Usuario ya Registrado")

    Usuarios.push({name:name, email:email, password:password})
    /* console.log(userRegistered) */
    /* console.log(Users) */
    localStorage.setItem("users", JSON.stringify(Usuarios))

    alert("Registro Exitoso")

    window.location.href = "login.html"
})