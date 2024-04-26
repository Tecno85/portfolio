let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Oculta el menú al seleccionar una opción
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

// Función que aplica las animaciones a las habilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("Git-GitHub");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo-equipo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("autoaprendizaje");
    }
}

// Detecto el scrolling para aplicacar la animación de la barra de habilidades

window.onscroll = function(){
    efectoHabilidades();
}