function ventanaBasicos() {
    var ventana = document.getElementById("ventanaBasicos");
    ventana.style.display = "block";
}

function cerrarventanaBasicos() {
    var ventana = document.getElementById("ventanaBasicos");
    ventana.style.display = "none";
}

function ventanaDiver() {
    var ventana = document.getElementById("ventanaDiver");
    ventana.style.display = "block";
}

function cerrarventanaDiver() {
    var ventana = document.getElementById("ventanaDiver");
    ventana.style.display = "none";
}

function ventanaTecnica() {
    var ventana = document.getElementById("ventanaTecnica");
    ventana.style.display = "block";
}

function cerrarventanaTecnica() {
    var ventana = document.getElementById("ventanaTecnica");
    ventana.style.display = "none";
}

function ventanaTecno() {
    var ventana = document.getElementById("ventanaTecno");
    ventana.style.display = "block";
}

function cerrarventanaTecno() {
    var ventana = document.getElementById("ventanaTecno");
    ventana.style.display = "none";
}

/*Ventanas Emergentes externas*/ 
function ventanaTrabajos() {
    var ventana = document.getElementById("ventanaTrabajos");
    ventana.style.display = "block";
}

function cerrarventanaTrabajos() {
    var ventana = document.getElementById("ventanaTrabajos");
    ventana.style.display = "none";
}

function ventanaSponsors() {
    var ventana = document.getElementById("ventanaSponsors");
    ventana.style.display = "block";
}

function cerrarventanaSponsors() {
    var ventana = document.getElementById("ventanaSponsors");
    ventana.style.display = "none";
}

function ventanaFundacion() {
    var ventana = document.getElementById("ventanaFundacion");
    ventana.style.display = "block";
}

function cerrarventanaFundacion() {
    var ventana = document.getElementById("ventanaFundacion");
    ventana.style.display = "none";
}
function ventanaPatronato() {
    var ventana = document.getElementById("ventanaPatronato");
    ventana.style.display = "block";
}

function cerrarventanaPatronato() {
    var ventana = document.getElementById("ventanaPatronato");
    ventana.style.display = "none";
}
function ventanaPress() {
    var ventana = document.getElementById("ventanaPress");
    ventana.style.display = "block";
}

function cerrarventanaPress() {
    var ventana = document.getElementById("ventanaPress");
    ventana.style.display = "none";
}
function ventanaBlog() {
    var ventana = document.getElementById("ventanaBlog");
    ventana.style.display = "block";
}

function cerrarventanaBlog() {
    var ventana = document.getElementById("ventanaBlog");
    ventana.style.display = "none";
}
function irAPagina(pagina) {
    window.location.href = pagina;
}

function enviarCorreo() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Verificar si los campos están llenos antes de enviar el correo
    if (nombre && email && mensaje) {
        // Mostrar la alerta solo si se envió el correo
        alert("Se envió el correo");
    } else {
        // Mostrar una alerta indicando que los campos deben estar llenos
        alert("Por favor, completa todos los campos antes de enviar el correo");
    }
}