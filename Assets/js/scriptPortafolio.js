function enviarCorreo() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Verificar si los campos están llenos antes de enviar el correo
    if (nombre && email && mensaje) {
        var link = "mailto:bmendoza-2019349@kinal.edu.gt"
            + "?subject=" + encodeURIComponent("Nuevo mensaje de contacto")
            + "&body=" + encodeURIComponent("Nombre: " + nombre + "\n\nEmail: " + email + "\n\nMensaje: " + mensaje);
        
        window.location.href = link;

        // Mostrar la alerta solo si se envió el correo
        alert("Se envió el correo");
    } else {
        // Mostrar una alerta indicando que los campos deben estar llenos
        alert("Por favor, completa todos los campos antes de enviar el correo");
    }
}

function irAPagina(pagina) {
    window.location.href = pagina;
}