function aparecerfoto(){
    document.getElementById("Imagen").style.display="block";
}

function desaparecerfoto(){
    document.getElementById("Imagen").style.display="none";
}

function mostrar(){
    document.getElementById("objeto_lista").style.display="block";
}

function ocultar(){
    document.getElementById("objeto_lista").style.display="none";
}

var f = new Date();
var year = f.getFullYear();
function mostraredad(){
    document.getElementById("edad").innerHTML = year - 2003 +" años";
}
function ocultaredad(){
    document.getElementById("edad").innerHTML = "Edad";
}
