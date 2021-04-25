window.addEventListener('scroll', function(){
    const animacion = document.getElementById('imagenes');
    const posicion = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/1.2
    if(posicion < tamañoPantalla){
        animacion.style.opacity = '100%'
        animacion.style.transform = 'translate(0)'
    } else if(posicion > tamañoPantalla * 1.2){
        animacion.style.transform = 'translateX(-4%)'
        animacion.style.opacity = '0'
    }
})

const animacion2 = document.querySelector('aside');
window.onload = animation()

function animation(){
    animacion2.style.opacity = '100%'
    animacion2.style.transform = 'translate(0)'
}