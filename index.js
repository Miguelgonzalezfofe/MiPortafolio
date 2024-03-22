// VARIABLES PARA EL MENU DESPLEGABLE
const menuDesplegar = document.getElementById("menu-desplegar")
const menu = document.querySelector(".menu")

menuDesplegar.addEventListener("click", () => DesplegarMenu());
let valor
function DesplegarMenu() {
    if (menu.style.display === "flex") {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

/* INTERACTIVIDAD DE LA BARRA DE NAVEGACION */
setTimeout(() => {
    tamañoPantallaSM()
},);
setTimeout(() => {
    tamañoPantallaXl()
    
},);
const tamañoPantallaSM = () => {
    return new Promise((resolve) => {
        if (window.innerWidth < 768) {
            resolve(
                console.log("se resolvio"),
                btnMenuEnlace.addEventListener("click", () => { DesplegarMenu() }),
                habilidades.addEventListener("click", () => { DesplegarMenu() }),
                experiencia.addEventListener("click", () => { DesplegarMenu()}),
                portafolio.addEventListener("click", () => { DesplegarMenu()}),
                contacto.addEventListener("click", () => {  DesplegarMenu()})
            )
        }
    })
}
const tamañoPantallaXl = () =>{
    return new Promise((resolve) =>{
        if(window.innerWidth >= 768){
            resolve(
                menu.style.display = "flex"
                
            )
        }
    })
}

let btnMenuEnlace = document.getElementById("btnSobreMi")
let habilidades = document.getElementById("btnHabilidades")
let experiencia = document.getElementById("btnExperiencia")
let portafolio = document.getElementById("btnPortafolio")
let contacto = document.getElementById("btnContacto")
