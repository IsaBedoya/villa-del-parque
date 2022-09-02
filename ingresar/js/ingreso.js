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

btnSignIn.addEventListener("click", () => {
    signIn.classList.toggle('active');
    signUp.classList.toggle('active');
})

btnSignUp.addEventListener("click", () => {
    signIn.classList.toggle('active');
    signUp.classList.toggle('active');
})


// VALIDACIÓN:
const formR = document.getElementById('formSingUp');
const btnIS = document.getElementById('btnIS');
const userName = document.getElementById('name');
const userTel = document.getElementById('tel');
const userEmailR = document.getElementById('email');
const userEmailIS = document.getElementById('email2');
const userPassR = document.getElementById('password');
const userPassIS = document.getElementById('password2');


async function validarResgistro(){
    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserTel = /\d/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    const regUserPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,16}$/;

    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        return Swal.fire({
            title: 'Error!',
            text: 'El nombre no es valido',
            icon: 'error'
        })
    }

    if (!regUserTel.test(userTel.value) || !userTel.value.trim()) {
        return Swal.fire({
            title: 'Error!',
            text: 'El número de contacto no es valido',
            icon: 'error'
        })
    }

    if (!regUserEmail.test(userEmailR.value) || !userEmailR.value.trim()) {
        return Swal.fire({
            title: 'Error!',
            text: 'El email no es valido',
            icon: 'error'
        })
    }

    if (!regUserPass.test(userPassR.value) || !userPassR.value.trim()) {
        return Swal.fire({
            title: 'Error!',
            text: 'La contraseña no es valida. Debe tener entre 8 y 16 caracteres, al menos 1 mayúscula, 1 minúscula, 1 digito y 1 caracter especial. No debe tener espacios.',
            icon: 'error'
        })
    } 
    
    if(regUserName.test(userName.value) || userName.value.trim()){
        if(regUserTel.test(userTel.value) || userTel.value.trim()){
            if(regUserEmail.test(userEmailR.value) || userEmailR.value.trim()){
                if(regUserPass.test(userPassR.value) || !userPassR.value.trim()){
                    await Swal.fire({
                        title: 'Usuario registrado',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 3000
                    })
            
                    location.href = "/miCuenta.html"
                }
            }
        }
    }     

}



formR.addEventListener("submit", async e => {
    e.preventDefault();

    await validarResgistro();
})

btnIS.addEventListener("click", e => {
    e.preventDefault();
    
    if(!userEmailIS.value.trim() || !userPassIS.value.trim()){
        return Swal.fire({
            title: 'Error!',
            text: 'Los campos no pueden estar vacios',
            icon: 'error'
        })
    } else{
        Swal.fire({
            title: 'Usuario registrado',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000
        })

        setTimeout(function(){
            location.href = "/miCuenta.html"
        }, 1000)
    }
})