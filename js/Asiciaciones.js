let aciertos = 0
let ensayos  = 0
let elementos =[["1","2","3","4"],["5","6","7","8"],["9","10","11","12"],["13","14","15","16"],["Impresionismo","Expresionimo","Romanticismo","Surrealismo"]]

function iniciarPrueba(){
    let pantallaInicio = document.getElementById('pantalla-inicio').style.display = 'flex'
    let pantallaPrueba = document.getElementById('prueba').style.display = 'none'
    let pantallaBreak = document.getElementById('break').style.display = 'none'
    let pantallaFinalizacion = document.getElementById('finalizacion').style.display = 'none'

    let botonEmpezar = document.getElementById('empezar')
    botonEmpezar.addEventListener('click', Prueba)
}

function Prueba(){
    let pantallaInicio = document.getElementById('pantalla-inicio').style.display = 'none'
    let pantallaPrueba = document.getElementById('prueba').style.display = 'flex'

    let botonOpc1 = document.getElementById('opcion-1')
    botonOpc1.addEventListener('click',pruebaCambio)
}

function pruebaCambio(){
    let eleccion =elementos[0][aleatorio(0,3)]
    const nueva = document.querySelector(".opciones-pintura:nth-child(3)")
    nueva.innerHTML = "<img src='./css/assets/"+eleccion+".jpg'/>"
    let botonOpc1 = document.getElementById('opcion-1')
    botonOpc1.addEventListener('click',pruebaCambio)
    
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load',iniciarPrueba)