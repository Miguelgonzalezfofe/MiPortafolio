// VARIABLES PARA EL MENU DESPLEGABLE
const menuDesplegar = document.getElementById("menu-desplegar")
const menu = document.querySelector(".menu")

menuDesplegar.addEventListener('change', function() {
    if (this.checked) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
    });

