function enviarCorreo() {
    alert("Se envio el correo");
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    
    var link = "mailto:bmendoza-2019349@kinal.edu.gt"
             + "?subject=" + encodeURIComponent("Nuevo mensaje de contacto")
             + "&body=" + encodeURIComponent("Nombre: " + nombre + "\n\nEmail: " + email + "\n\nMensaje: " + mensaje);
    
    window.location.href = link;
    
}

function irAPagina(pagina) {
    window.location.href = pagina;
  }