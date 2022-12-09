
/*jshint esversion: 6 */
const botonAceptarCoockies = document.getElementById("btn-aceptar-cookies");
const avisoCoockies = document.getElementById("aviso-cookies");
const fondoAvisoCoockies = document.getElementById("fondo-aviso-coockies");

dataLayer = [];

if (!localStorage.getItem('coockies-aceptadas')) {
    avisoCoockies.classList.add('activo');
    fondoAvisoCoockies.classList.add('activo');                           
} else {
    dataLayer.push({'event': 'coockies-aceptadas'});
}
 
botonAceptarCoockies.addEventListener('click', () => {
    avisoCoockies.classList.remove('activo');
    fondoAvisoCoockies.classList.remove('activo');

    localStorage.setItem('coockies-aceptadas', true);

    dataLayer.push({'event': 'coockies-aceptadas'});
});
