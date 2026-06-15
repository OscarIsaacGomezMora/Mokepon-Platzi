function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipodoge')
    let imputCapapipepo = document.getElementById('Capapipepo')
    let imputRatigueya = document.getElementById('Ratigueya')
    let imputLangostelvis = document.getElementById('Langostelvis')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (imputCapapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capapipepo'
    } else if (imputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else if (imputLangostelvis.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis'
    } else {
        alert ('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo ()
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio (1,4)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'

    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capapipepo'

    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'

    } else {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    }
}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max - min + 1))
}
function iniciarJuego (){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}

window.addEventListener('load',iniciarJuego)