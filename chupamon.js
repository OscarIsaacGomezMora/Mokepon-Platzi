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

function ataqueFuego (){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo ()
}
function ataqueAgua (){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo ()
}
function ataqueTierra (){
    ataqueJugador = 'Tierra'
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
    combate ()
}
function combate (){
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje ("Empate")
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje ("GANASTE")
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje ("GANASTE")
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje ("GANASTE")
    } else {
        crearMensaje ("PERDISTE")
    }
}

function crearMensaje (resultado) {
    //Busca el elemento que tiene la etiqueta o id mensajes
    let sectionMensajes = document.getElementById ('mensajes')
    //quiero que seas un párrafo totalmente vacío
    let parrafo = document.createElement ('p')
    //innerHTML es el marcador para escribir adentro.
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ' ,la mascota del enemigo ataco con ' +  ataqueEnemigo + '- ' + resultado
    //con appendChild podemos proyectarlo en pantalla en el id que indicamos en la variable sectionMensajes
    sectionMensajes.appendChild(parrafo)

}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max - min + 1))
}

window.addEventListener('load',iniciarJuego)