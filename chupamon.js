let ataqueJugador 
let ataqueEnemigo

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
    ataqueAleatorioEnemigo ()
}
function ataqueAgua (){
    ataqueJugador = 'Agua'
     alert (ataqueJugador)
     ataqueAleatorioEnemigo ()
}
function ataqueTierra (){
    ataqueJugador = 'Tierra'
     alert (ataqueJugador)
     ataqueAleatorioEnemigo ()
}

function ataqueAleatorioEnemigo (){
    let ataqueAleatorio = aleatorio (1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }
        
}





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
    let mascotaAleatoria = aleatorio (1,4)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'

    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capapipepo'

    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'

    } else {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    }
}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max - min + 1))
}

window.addEventListener('load',iniciarJuego)