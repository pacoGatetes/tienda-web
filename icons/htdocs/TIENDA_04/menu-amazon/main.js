// JavaScript Document
const btnDepartamentos = document.getElementById('btn-departamentos'),//aqui definmos tosdas las variables
      btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
      grid = document.getElementById('grid'),
      contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
      contenedorSubCategorias = document.querySelector('#grid .contenedor-categorias'),
      esDispositivoMovil = () => window.innerWidth <= 800;//Esta variablees para dispositivos moviles

btnDepartamentos.addEvenListener('mouseover', () =>{//Al pasar el puntero por encima aparece el menu
   if(!esDispositivoMovil()){
     grid.classList.add('activo');
    }                                
});

grid.addEventListener('mouseleave',() =>{
    if(!esDispositivoMovil()){
        grid.classList.remove('activo');
    }
});

document.querySelectorAll('#menu .categorias a').forEach((elemento)=> {//accedemos a los enlaces de las categorias
    elemento.addEventListener('mouseenter', (e) =>{
        if(!esDispositivoMovil()){
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) =>{
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
            }
          });  
        };
    });
});

//EventListener para dispositivos Moviles.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) =>{
    e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    }else{
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
    
});
    
    //Click en el boton todos los departamentos, (para version movil).

btnDepartamentos.addEventListener('clik',(e)=>{
    e.preventDefaul();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
});
//Boton de regresar en el menu de categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) =>{
    e.preventDefaul();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento)=>{
    elemento.addEventListener('click',(e) =>{
        if(esDispositivoMovil()){
            contendorSubcategorias.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
                
            });
        }
    });
});

//Boton de regresar en el menu de categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) =>{
    boton.addEvenListener('click',(e)=>{
        e.prevetDefaul();
        contendorSubcategorias.classList.remove('activo');
  
    });

});
    
btnCerrarMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento)=>{
        elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow ='visible';
});  
    
    
    
    
    
    
    
    
    
    
    



















