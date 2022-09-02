// MENU
function menuActive(){
    const menu = document.querySelector('#menu');
    menu.classList.toggle('active');
}

function btnMenuClick(){
    const btnMenu = document.querySelector('#btnMenu');
    btnMenu.addEventListener("click", menuActive, false)
}

document.addEventListener("DOMContentLoaded", btnMenuClick,  false);

// CAMBIO

const signUp = document.querySelector('.sign-up');
const signIn  = document.querySelector('.sign-in');
const btnSignUp = document.querySelector('.signUpBtn');
const btnSignIn = document.querySelector('.signInBtn');

btnSignUp.addEventListener("click", () => {
    signIn.classList.toggle('active');
    signUp.classList.toggle('active');
})

btnSignIn.addEventListener("click", () => {
    signIn.classList.toggle('active');
    signUp.classList.toggle('active');
})

// VALIDACIÓN:
// const formulario = document.querySelector('form');
const formIS = document.getElementById('formSignIn');
// const formR = document.getElementById('formSignUp');
const userEmailIS = document.getElementById('email1');
const userPassIS = document.getElementById('password1');
const userName = document.getElementById('name');
const userTel = document.getElementById('tel');
const userEmailR = document.getElementById('email2');
const userPassR = document.getElementById('password2');
// const btnIS = document.getElementById('btnIS');
const btnR = document.getElementById('btnR');


// Inicio sesion
function validarIS(){
    if (!userEmailIS.value.trim()){
        return Swal.fire({
            title: 'Error!',
            text: 'El email es obligatorio',
            icon: 'error'
        })
    }

    if (!userPassIS.value.trim()){
        return Swal.fire({
            title: 'Error!',
            text: 'La contraseña es obligatoria',
            icon: 'error'
        })
    }
    
    if(userEmailIS.value.trim() && userPassIS.value.trim()){
        return Swal.fire({
            title: 'Exito!',
            text: 'Usuario correcto',
            icon: 'success'
        })
    }
}

function validarR(){
    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserTel = /\d/;
    const regUserEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const regUserPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

    if (!regUserName.test(userName.value)) {
        return Swal.fire({
            title: 'Error!',
            text: 'Nombre obligatorio',
            icon: 'error'
        })
    }

    if (!regUserTel.test(userTel.value)) {
        return Swal.fire({
            title: 'Error!',
            text: 'Telefono obligatorio',
            icon: 'error'
        })
    }    

    if (!regUserEmail.test(userEmailR.value)){
        return Swal.fire({
            title: 'Error!',
            text: 'El email no es valido',
            icon: 'error'
        })
    }

    if (!regUserPassword.test(userPassR.value)){
        return Swal.fire({
            title: 'Error!',
            text: 'La contraseña no es valida. Debe tener mínimo 8 caracteres y máximo 16, 1 letra mayúscula, 1 minúscula, 1 número y un simbolo',
            icon: 'error'
        })
    }
    
    return Swal.fire({
        title: 'Exito!',
        text: 'Usuario correcto',
        icon: 'success'
    })
}

formIS.addEventListener("submit", e => {
    e.preventDefault();

    validarIS();
})

btnR.addEventListener("click", e => {
    e.preventDefault();

    validarR();
})

// REGISTRO:

// const { Client } = require('pg');

// const obtenerUsuarios = async () => {
//     const client = new Client({
//         user: 'postgres',
//         host: 'localhost',
//         database: 'vdp',
//         password: 'root',
//         port: 5432,
//         ssl: {
//             rejectUnauthorized: false,
//         },
//       }); // Se crea un cliente
//     await client.connect(); // Se conecta

//     const res = await client.query('SELECT * FROM usuarios'); // ejecuta la base de datos

//     debugger;
//     const result = res.rows[0].message;

//     await client.end();

//     return result;
// }

// obtenerUsuarios().then((result) => {console.log(res)});