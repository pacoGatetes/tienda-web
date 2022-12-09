
	//// esta función es estricta...///

const btnDepartamentos = document.getElementById('btn-departamentos'),
	  btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	  grid = document.getElementById('grid-menu-nav'),
	  contenedorEnlacesNav = document.querySelector('#menu-nav .grid-menu-nav'),
	  contenedorSubCategorias = document.querySelector('#grid-menu-nav .contenedor-subcategorias'),
	  esDispositivoMovil = () => window.innerWidth <= 767;
	  btnDepartamentos?.addEventListener('mouseover', () => {
	if (!esDispositivoMovil()) {
		grid.classList.add('activo');
	}
});


grid?.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		grid.classList.remove('activo');
	}
});

document.querySelectorAll('#menu-nav .categorias a').forEach((elemento) => {
		elemento.addEventListener('mouseenter', (e) => {
			if (!esDispositivoMovil()) {
				document.querySelectorAll('#menu-nav .subcategoria').forEach((categoria) => {
					categoria.classList.remove('activo');
					if (categoria.dataset.categoria == e.target.dataset.categoria) {
						categoria.classList.add('activo');
					}
				});
			}
		});
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras')?.addEventListener('click', (e) => {
	e.preventDefault();
	if(contenedorEnlacesNav.classList.contains('activo')){
		contenedorEnlacesNav.classList.remove('activo');
		document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
	}
});


// Boton de regresar en el menu de categorias

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

btnCerrarMenu?.addEventListener('click', (e)=> {
	e.preventDefault();
	document.querySelectorAll('#menu-nav .activo').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
	document.querySelector('body').style.overflow = 'visible';
});


//////////////////////////////////////////////////////////////
//////////////FILTROS SELECT/////////////////////////////
////////////////////////////////////////////////////////////
////abrimos los deplegables donde estan los checkbox///////////

// Obtener todo el menú desplegable del documento
document.querySelectorAll('.boton__desplegable').forEach(dropDownFunc);//este e o div class= "boton__desplegable" que hace que el checkobx sea desplegable.

// Función desplegable Abrir y Cerrar
function dropDownFunc(dropDown) {

	if (dropDown.classList.contains('boton__desplegable') === true) {
		dropDown.addEventListener('click', function (e) {
			e.preventDefault();

			if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
				// Cerrar el menú desplegable en el que se hizo clic
				this.parentElement.classList.remove('dropdown-open');
				this.nextElementSibling.classList.remove('dropdown-active');

			} else {
				// Cerrar el menú desplegable abierto
				closeDropdown();

				// agregamos la clase abierta y activa (Cuando el el menú desplegable este abierto)
				this.parentElement.classList.add('dropdown-open');
				this.nextElementSibling.classList.add('dropdown-active');
			}
		});
	}

};

// Escuchamos el clic del documento
window.addEventListener('click', function (e) {

	// Cierra el menú si el clic ocurre fuera del menú
	if (e.target.closest('.checkbox__contenedor') === null) {
		// Close the opend dropdown
		closeDropdown();
	}

});

// Cerrar los menús desplegables abiertos
function closeDropdown() {

	// elimina la clase abierta y activa de otro menú desplegable abierto (cerrando el menú desplegable abierto)
	document.querySelectorAll('.checkbox__contenedor').forEach(function (container) {
		container.classList.remove('dropdown-open')
	});

	document.querySelectorAll('.checkbox__menu-selec').forEach(function (menu) {
		menu.classList.remove('dropdown-active');
	});
}

//cierre el menú desplegable con el mouse fuera de la lista desplegable
document.querySelectorAll('.checkbox__menu-selec').forEach(function (dropDownList) {
	// close the dropdown after user leave the list
	dropDownList.onmouseleave = closeDropdown;
});
/////Fin de los botones checkbox///////
/////Abrimos el modal////

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
	el.addEventListener("click", function () {
		const modalId = this.dataset.open;
		document.getElementById(modalId).classList.add(isVisible);

	});
}

for (const el of closeEls) {
	el.addEventListener("click", function () {
		this.parentElement.parentElement.parentElement.classList.remove(isVisible);
	});
}

document.addEventListener("click", e => {
	if (e.target == document.querySelector(".modal.is-visible")) {
		document.querySelector(".modal.is-visible").classList.remove(isVisible);
	}
});

document.addEventListener("keyup", e => {
	// if we press the ESC
	if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
		document.querySelector(".modal.is-visible").classList.remove(isVisible);
	}
});

//////Fin venta modal//////

//////////////////////////////////////////////////////////////
//////////////FIN FILTROS SELECT/////////////////////////////
////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////
	//////////////CAROUSEL DEL INDEX/////////////////////////////
	////////////////////////////////////////////////////////////
	const fila = document.querySelector('.contenedor-carousel');
	const articulorecomendadoindex = document.querySelectorAll('.articulo-recomendado-index');
	const flechaIzquierda = document.getElementById('flecha-izquierda');
	const flechaDerecha = document.getElementById('flecha-derecha');

	// ? ----- ----- Event Listener para la flecha derecha. ----- -----
if (flechaDerecha) {
	flechaDerecha.addEventListener('click', () => {
		fila.scrollLeft += fila.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores .activo');
		if (indicadorActivo.nextSibling) {
			indicadorActivo.nextSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo');
		}
	});
	flechaDerecha?.addEventListener('click', () => {

	});
}
	// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
if (flechaIzquierda) {
	flechaIzquierda.addEventListener('click', () => {
		fila.scrollLeft -= fila.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores .activo');
		if (indicadorActivo.previousSibling) {
			indicadorActivo.previousSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo');
		}
	});
	flechaIzquierda?.addEventListener('click', () => {
	});
}
	// ? ----- ----- Paginación ----- -----
	const numeroPaginas = Math.ceil(articulorecomendadoindex.length / 8);
		for (let i = 0; i < numeroPaginas; i++) {
	const indicador = document.createElement('button');
	if (i === 0) {
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
	//////////////////////////////////////////////////////////////////////
	////////////////FIN CAROUSEL DEL INDEX///////////////////////////////
	////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////
	////////////////MIGAS DE PAN//////////////////////////////////////
	/////////////////////////////////////////////////////////////////
	const crumbs = document.querySelectorAll('migas-pan select');
	const allowedKeys = new Set(['Tab', 'Enter', ' ']);
	const preventedKeys = new Set(['ArrowUp', 'ArrowDown']);

	crumbs.forEach(nav => {
		let ignoreChange = false;

		nav.addEventListener('change', e => {
			if (ignoreChange) return;
		});

		nav.addEventListener('keydown', ({ key }) => {
			if (preventedKeys.has(key))
				ignoreChange = true;
			else if (allowedKeys.has(key))
				ignoreChange = false;
		});
	});
	///////////////////////////////////////////////////////////////////
	////////////////FIN MIGAS DE PAN//////////////////////////////////
	/////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////
	/////////////DESPLEGABLE TABLA DE TALLAS/////////////////////
	////////////////////////////////////////////////////////////



	//////////////////////////////////////////////////////////////////
	///////////////FIN DESPLEGLE TABLA DE TALLAS/////////////////////
	////////////////////////////////////////////////////////////////

	/////////////////////////////////////////////////////////////////
	/////////////////IMAGENES FICHA PRODUCTO////////////////////////
	///////////////////////////////////////////////////////////////



	/////////////////////////////////////////////////////////////////
	/////////////////IMAGENES FICHA PRODUCTO////////////////////////
	///////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////
	/////////////////FILTROS DE COLOR//////////////////////
	////////////////////////////////////////////////////////////
(function () {
	var ColorSwatches = function (element) {
		this.element = element;
		this.select = false;
		initCustomSelect(this); // reemplazar <select> con lista <ul> personalizada
		this.list = this.element.getElementsByClassName('js-color-swatches__list')[0];
		this.swatches = this.list.getElementsByClassName('js-color-swatches__option');
		this.labels = this.list.getElementsByClassName('js-color-swatch__label');
		this.selectedLabel = this.element.getElementsByClassName('js-color-swatches__color');
		this.focusOutId = false;
		initColorSwatches(this);
	};

	function initCustomSelect(element) {
		var select = element.element.getElementsByClassName('js-color-swatches__select');
		if (select.length == 0) return;
		element.select = select[0];
		var customContent = '';
		for (var i = 0; i < element.select.options.length; i++) {
			var ariaChecked = i == element.select.selectedIndex ? 'true' : 'false',
				customClass = i == element.select.selectedIndex ? ' color-swatches__item--selected' : '',
				customAttributes = getSwatchCustomAttr(element.select.options[i]);
			customContent = customContent + '<li class="color-swatches__item js-color-swatches__item' + customClass + '" role="radio" aria-checked="' + ariaChecked + '" data-value="' + element.select.options[i].value + '"><span class="js-color-swatches__option js-tab-focus" tabindex="0"' + customAttributes + '><span class="sr-only js-color-swatch__label">' + element.select.options[i].text + '</span><span aria-hidden="true" style="' + element.select.options[i].getAttribute('data-style') + '" class="color-swatches__swatch"></span></span></li>';
		}

		var list = document.createElement("ul");
		Util.setAttributes(list, { 'class': 'color-swatches__list js-color-swatches__list', 'role': 'radiogroup' });

		list.innerHTML = customContent;
		element.element.insertBefore(list, element.select);
		Util.addClass(element.select, 'is-hidden');
	};

	function initColorSwatches(element) {
		//detectar evento de enfoque/desenfoque: actualizar la etiqueta de color seleccionada
		element.list.addEventListener('focusin', function (event) {
			if (element.focusOutId) clearTimeout(element.focusOutId);
			updateSelectedLabel(element, document.activeElement);
		});
		element.list.addEventListener('focusout', function (event) {
			element.focusOutId = setTimeout(function () {
				resetSelectedLabel(element);
			}, 200);
		});

		// eventos de movimiento del mouse
		for (var i = 0; i < element.swatches.length; i++) {
			handleHoverEvents(element, i);
		}

		// --seleccionar solo variación
		if (element.select) {
			// haga clic en evento - seleccione nueva opción
			element.list.addEventListener('click', function (event) {
				// update selected option
				resetSelectedOption(element, event.target);
			});

			// // tecla de espacio - seleccionar nueva opción
			element.list.addEventListener('keydown', function (event) {
				if ((event.keyCode && event.keyCode == 32 || event.key && event.key == ' ') || (event.keyCode && event.keyCode == 13 || event.key && event.key.toLowerCase() == 'enter')) {
					// actualizar la opción seleccionada
					resetSelectedOption(element, event.target);
				}
			});
		}
	};

	function handleHoverEvents(element, index) {
		element.swatches[index].addEventListener('mouseenter', function (event) {
			updateSelectedLabel(element, element.swatches[index]);
		});
		element.swatches[index].addEventListener('mouseleave', function (event) {
			resetSelectedLabel(element);
		});
	};

	function resetSelectedOption(element, target) { // para --seleccionar solo variación - nueva opción seleccionada
		var option = target.closest('.js-color-swatches__item');
		if (!option) return;
		var selectedSwatch = element.list.querySelector('.color-swatches__item--selected');
		if (selectedSwatch) {
			Util.removeClass(selectedSwatch, 'color-swatches__item--selected');
			selectedSwatch.setAttribute('aria-checked', 'false');
		}
		Util.addClass(option, 'color-swatches__item--selected');
		option.setAttribute('aria-checked', 'true');
		// update select element
		updateNativeSelect(element.select, option.getAttribute('data-value'));
	};

	function resetSelectedLabel(element) {
		var selectedSwatch = element.list.getElementsByClassName('color-swatches__item--selected');
		if (selectedSwatch.length > 0) updateSelectedLabel(element, selectedSwatch[0]);
	};

	function updateSelectedLabel(element, swatch) {
		var newLabel = swatch.getElementsByClassName('js-color-swatch__label');
		if (newLabel.length == 0) return;
		element.selectedLabel[0].textContent = newLabel[0].textContent;
	};

	function updateNativeSelect(select, value) {
		for (var i = 0; i < select.options.length; i++) {
			if (select.options[i].value == value) {
				select.selectedIndex = i; // set new value
				select.dispatchEvent(new CustomEvent('change')); // desencadenar evento de cambio
				break;
			}
		}
	};

	function getSwatchCustomAttr(swatch) {
		var customAttrArray = swatch.getAttribute('data-custom-attr');
		if (!customAttrArray) return '';
		var customAttr = ' ',
			list = customAttrArray.split(',');
		for (var i = 0; i < list.length; i++) {
			var attr = list[i].split(':')
			customAttr = customAttr + attr[0].trim() + '="' + attr[1].trim() + '" ';
		}
		return customAttr;
	};

	//inicializar los objetos ColorSwatches
	var swatches = document.getElementsByClassName('js-color-swatches');
	if (swatches.length > 0) {
		for (var i = 0; i < swatches.length; i++) {
			new ColorSwatches(swatches[i]);
		}
	}
}());

	//////////////////////////////////////////////////////////////
	/////////////////FIN FILTROS DE COLOR//////////////////
	////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////
	/////////////////PREGUNTAS FRECUENTES//////////////////
	////////////////////////////////////////////////////////////
const preguntas = document.querySelectorAll('.section-preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		if (!respuesta.style.maxHeight) {
			// Si esta vacio el maxHeight entonces ponemos un valor.
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		// [Opcional] Reiniciamos las demas preguntas
		preguntas.forEach((elemento) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no
			// sean la pregunta a la que le dimos click.
			if (pregunta !== elemento) {
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});


	});
});
const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa');
		categoriaActiva = categoria.dataset.categoria;


		// Activamos el contenedor de preguntas que corresponde
		contenedorPreguntas.forEach((contenedor) => {
			if (contenedor.dataset.categoria === categoriaActiva) {
				contenedor.classList.add('activo');
			} else {
				contenedor.classList.remove('activo');
			}
		});
	});
});
	//////////////////////////////////////////////////////////////
	/////////////////FIN PREGUNTAS FRECUENTES//////////////////
	////////////////////////////////////////////////////////////