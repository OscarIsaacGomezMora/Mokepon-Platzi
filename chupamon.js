let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3 

function iniciarJuego (){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById ('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById ('boton-fuego')
    botonFuego.addEventListener ('click', ataqueFuego)

    let botonAgua = document.getElementById ('boton-agua')
    botonAgua.addEventListener ('click', ataqueAgua)

    let botonTierra = document.getElementById ('boton-tierra')
    botonTierra.addEventListener ('click', ataqueTierra)

    let botonReiniciar = document.getElementById ('reiniciar')
    botonReiniciar.addEventListener ('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

    sectionSeleccionarAtaque.style.display = 'block'

    

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
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje ("Empate")
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje ("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje ("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje ("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje ("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas ()
}

function revisarVidas (){
    if (vidasEnemigo == 0) {
        crearMensajeFinal ('FELICITACIONES! Ganaste')
    } else if (vidasJugador == 0) {
        crearMensajeFinal ('LÁSTIMA! Perdiste')
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

function crearMensajeFinal (resultadoFinal) {
    //Busca el elemento que tiene la etiqueta o id mensajes
    let sectionMensajes = document.getElementById ('mensajes')
    //quiero que seas un párrafo totalmente vacío
    let parrafo = document.createElement ('p')
    //innerHTML es el marcador para escribir adentro.
    parrafo.innerHTML = resultadoFinal
    //con appendChild podemos proyectarlo en pantalla en el id que indicamos en la variable sectionMensajes
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById ('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById ('boton-agua')
    botonAgua.disabled = true

    let botonTierra = document.getElementById ('boton-tierra')
    botonTierra.disabled = true

    let botonReiniciar = document.getElementById ('reiniciar')
    botonReiniciar.disabled = true

    let sectionReiniciar = document.getElementById ('reiniciar')
    sectionReiniciar.style.display = 'block'
}


function reiniciarJuego () {
    location.reload ()
}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max - min + 1))
}

window.addEventListener('load',iniciarJuego)