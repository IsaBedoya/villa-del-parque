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
$('#btnR').click( (e) => {
    e.preventDefault();
    nom= $('#name').val();
    tel= $('#tel').val();
    email= $('#email').val();
    pass= $('#password').val();
    $.ajax({

        url:'conexion.php',
        type:'post',
        data:{nom:nom,tel:tel,email:email,pass:pass},
        success:() => {
            $('#name').val(' ');
            $('#tel').val(' ');
            $('#email').val(' ');
            $('#password').val(' ');

            Swal.fire({
                title: 'Usuario registrado',
                icon: 'success',
                showConfirmButton: false,
                timer: 3000
            })

            location.href = "/miCuenta.html"
        }
    })
})

// var formR = document.getElementById('formSingUp');

// formR.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log('me diste click')

//     var datos = new FormData(formR);

//     console.log(datos);
//     console.log(datos.get('name'));
//     console.log(datos.get('tel'));
//     console.log(datos.get('email'));
//     console.log(datos.get('password'));

//     fetch('conexion.php', {
//         method: 'POST',
//         body: datos
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
// })