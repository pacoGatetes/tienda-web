//////////// LUPA /////////////////////////////
'use strict';
const imgContElm = document.querySelector('.contenedor__imagen-producto');
const imgElm = document.querySelector('.contenedor__imagen-producto img');
const listProductsElm = document.querySelector('.lista__imagenes-producto');

// Precentage Of The Zoom:
const ZOOM = 300;

// Event Mouse Enter:
imgContElm?.addEventListener('mouseenter', function () {

    imgElm.style.width = ZOOM + '%';

});

// Event Mouse Leave:
imgContElm?.addEventListener('mouseleave', function () {

    imgElm.style.width = '100%';
    imgElm.style.top = '0';
    imgElm.style.left = '0';

});

// Event Mouse Move:
// Change position of the big image, depends on the position of the cursor in the Container Of image.
imgContElm.addEventListener('mousemove', function (mouseEvent) {

    let obj = imgContElm;
    let obj_left = 0;
    let obj_top = 0;
    let xpos;
    let ypos;

    while (obj.offsetParent) {
        obj_left += obj.offsetLeft;
        obj_top += obj.offsetTop;
        obj = obj.offsetParent;
    }

    if (mouseEvent) {
        //FireFox
        xpos = mouseEvent.pageX;
        ypos = mouseEvent.pageY;
    } else {
        //IE
        xpos = window.event.x + document.body.scrollLeft - 2;
        ypos = window.event.y + document.body.scrollTop - 2;
    }

    xpos -= obj_left;
    ypos -= obj_top;

    const imgWidth = imgElm.clientWidth;
    const imgHeight = imgElm.clientHeight;

    imgElm.style.top = -(((imgHeight - this.clientHeight) * ypos) / this.clientHeight) + 'px';
    imgElm.style.left = -(((imgWidth - this.clientWidth) * xpos) / this.clientWidth) + 'px';

});

// Change The Current Image:
Array.from(listProductsElm?.children)?.forEach((productElm, i, list) => {

    productElm.addEventListener('click', function () {
        const newSrc = productElm.querySelector('img').src;
        imgElm.src = newSrc;

        list.forEach(prod => prod.classList.remove('active'));
        productElm.classList.add('active');
    });

});

// Change Height Of The Image Container:
function changeHeight() {

    imgContElm.style.height = imgContElm.clientWidth + 'px';

}
changeHeight();

// Change Height:
window.addEventListener('resize', changeHeight);

//////////// CERRAMOS LUPA /////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////IMAGENES FICHA PRODUCTO////////////////////////
///////////////////////////////////////////////////////////////
var ioBuilder = function (carousel) {
    return new IntersectionObserver(function (entries) {
        var statusDot = carousel.parentNode.querySelectorAll('.position .dot');
        entries.forEach(function (item) {
            if (item.isIntersecting && item.intersectionRatio == 1.0) {
                statusDot.forEach(function (item) {
                    item.classList.remove('active');
                });

                var position = imagePosition(item.target.parentElement);
                statusDot[position].classList.add('active');
            }
        });
    },
        {
            root: carousel,
            threshold: 1
        }
    );
};

var imagePosition = function (image) {
    return Array.prototype.indexOf.call(image.parentNode.children, image);
}

var setup = function (carousel) {
    const images = carousel.querySelectorAll('.image img');
    images.forEach(function () {
        var pos = carousel.parentNode.querySelector('.position');
        var dot = document.createElement('div');
        dot.classList.add('dot');
        pos.appendChild(dot);
    });

    var io = ioBuilder(carousel);

    images?.forEach(function (item) {
        io.observe(item);
    });
};


setup(document.querySelector('.carousel.x.mandatory'));


	/////////////////////////////////////////////////////////////////
	/////////////////IMAGENES FICHA PRODUCTO////////////////////////
	///////////////////////////////////////////////////////////////