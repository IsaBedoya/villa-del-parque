const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});


const btnVerMas = document.getElementById('btnVerMas');

btnVerMas.addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire('No hay más facturas');
})