const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guión y guión_bajo
    password: /^.{4,12}$/, //4 a 12 digitos.

};

const campos = {
    usuario: false,
    password: false,
    terminos: false
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
    }
};
// Validar Usuario, Nombre, correo electonico, teléfono
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} svg`).classList.add('fa-check');
        document.querySelector(`#grupo__${campo} svg`).classList.remove('fa-xmark');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} svg`).classList.add('fa-xmark');
        document.querySelector(`#grupo__${campo} svg`).classList.remove('fa-check');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
};

//validar contraseñas
const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');


    if (inputPassword1.value) {
        document.getElementById(`grupo__password`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password svg`).classList.add('fa-xmark');
        document.querySelector(`#grupo__password svg`).classList.remove('fa-check');
        document.querySelector(`#grupo__password .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password svg`).classList.remove('fa-xmark');
        document.querySelector(`#grupo__password svg`).classList.add('fa-check');
        document.querySelector(`#grupo__password .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const terminos = document.getElementById('terminos');
    if (campos.usuario && campos.password && terminos.checked) {
        formulario.reset();

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
