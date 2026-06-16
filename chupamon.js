let ataqueJugador 

function iniciarJuego (){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById ('boton-fuego')
    botonFuego.addEventListener ('click', ataqueFuego)

    let botonAgua = document.getElementById ('boton-agua')
    botonAgua.addEventListener ('click', ataqueAgua)

    let botonTierra = document.getElementById ('boton-tierra')
    botonTierra.addEventListener ('click', ataqueTierra)
}

function ataqueFuego (){
    ataqueJugador = 'Fuego'
    alert (ataqueJugador)
}
function ataqueAgua (){
    ataqueJugador = 'Agua'
     alert (ataqueJugador)
}
function ataqueTierra (){
    ataqueJugador = 'Tierra'
     alert (ataqueJugador)
}







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

window.addEventListener('load',iniciarJuego)