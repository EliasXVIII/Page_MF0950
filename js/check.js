const checkbox = document.getElementById("checkbox");
checkbox.addEventListener('change', function() {
    const enviar = document.getElementById("enviar");
    enviar.disabled = !this.checked;
});
