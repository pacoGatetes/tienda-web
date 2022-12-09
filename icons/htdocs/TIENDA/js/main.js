const btnDepartamentos = document.getElementById('btn-departamentos'),
	  btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	  grid = document.getElementById('grid-menu-nav'),
	  contenedorEnlacesNav = document.querySelector('#menu-nav .contenedor-enlaces-nav'),
	  contenedorSubCategorias = document.querySelector('#grid-menu-nav .contenedor-subcategorias'),
	  esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
		grid.classList.add('activo');
	}
});

grid.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		grid.classList.remove('activo');
	}
});

document.querySelectorAll('#menu-nav .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if(!esDispositivoMovil()){
			document.querySelectorAll('#menu-nav .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		};
	});
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
	e.preventDefault();
	if(contenedorEnlacesNav.classList.contains('activo')){
		contenedorEnlacesNav.classList.remove('activo');
		document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
	}
});

// Click en boton de todos los departamentos (Para version movil).
btnDepartamentos.addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});

// Boton de regresar en el menu de categorias
document.querySelector('#grid-menu-nav .categorias .btn-regresar').addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.remove('activo');
	btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu-nav .categorias a').forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		if(esDispositivoMovil()){
			contenedorSubCategorias.classList.add('activo');
			document.querySelectorAll('#menu-nav .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		}
	});
});

// Boton de regresar en el menu de categorias
document.querySelectorAll('#grid-menu-nav .contenedor-subcategorias .btn-regresar').forEach((boton) => {
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubCategorias.classList.remove('activo');
	});
});

btnCerrarMenu.addEventListener('click', (e)=> {
	e.preventDefault();
	document.querySelectorAll('#menu-nav .activo').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
	document.querySelector('body').style.overflow = 'visible';
});
////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//preguntas frecuentes.

//const categorias = document.querySelectorAll('#categorias .categoria');
//const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
//let categoriaActiva = null;
//
//categorias.forEach((categoria) =>{
//	categoria.addEventListener('click', (e) => {
//		categorias.forEach((elemento) => {
//			elemento.classList.remove('activa');
//		});
//		
//		e.currentTarget.classList.toggle('activa');
//		categoriaActiva = categoria.dataset.categoria;
//		
//		//activamos el contenedor de preguntas que corresponden
//		
//		contenedorPreguntas.forEach((contenedor) => {
//			if(contenedor.dataset.categoria === categoriaActiva){
//				contenedor.classList.add('activo');
//			}else{
//				contenedor.classList.remove('activo');
//			}
//				
//		});
//	});
//});
//
//
//const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
//preguntas.forEach((pregunta) => {
//	pregunta.addEventListener('clik', (e) => {
//		e.currentTarget.classList.toggle('activa');
//		
//		const respuesta = pregunta.querySelector('.respuesta');
//		const alturaRealRespuesta = respuesta.scrollHeight;
//		
//		if(!respuesta.style.maxHeight){
//			//Si esta vacio el maxHeight entonces ponemos un valor.
//			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
//		}else{
//			respuesta.style.maxHeight = null;
//		}
//		
//		//Reiniciamos las demas preguntas.
//		preguntas.forEach((elemento) => {
//			if(pregunta !== elemento){
//			elemento.classList.remove('activa');
//			elemento.querySelector('.respuesta').style.maxHeight = null;
//			}
//		});
//	});
//});














