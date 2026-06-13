function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipodoge')
    let imputCapapipepo = document.getElementById('Capapipepo')
    let imputRatigueya = document.getElementById('Ratigueya')
    let imputLangostelvis = document.getElementById('Langostelvis')
    if (inputHipodoge.checked){
        alert ('seleccionaste a Hipodoge')
    } else if (imputCapapipepo.checked){
        alert ('seleccionaste a Capapipepo')
    } else if (imputRatigueya.checked){
        alert ('seleccionaste a Ratigueya')
    } else if (imputLangostelvis.checked){
        alert ('seleccionaste a Langostelvis')
    } else {
        alert ('No has seleccionado ningún personaje')
    }
}
function iniciarJuego (){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}

window.addEventListener('load',iniciarJuego)