const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');
const openModal1 = document.querySelector('.btnVerMas1');
const openModal2 = document.querySelector('.btnVerMas2');
const openModal3 = document.querySelector('.btnVerMas3');
const openModal4 = document.querySelector('.btnVerMas4');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const modal4 = document.querySelector('.modal4');
const btnClose1 = document.querySelector('.btnClose1');
const btnClose2 = document.querySelector('.btnClose2');
const btnClose3 = document.querySelector('.btnClose3');
const btnClose4 = document.querySelector('.btnClose4');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

openModal1.addEventListener('click', ()=>{
    modal1.classList.add('modal--show');
    btnClose1.classList.add('btnClose--show');
});

openModal2.addEventListener('click', ()=>{
    modal2.classList.add('modal--show');
    btnClose2.classList.add('btnClose--show');
});

openModal3.addEventListener('click', ()=>{
    modal3.classList.add('modal--show');
    btnClose3.classList.add('btnClose--show');
});

openModal4.addEventListener('click', ()=>{
    modal4.classList.add('modal--show');
    btnClose4.classList.add('btnClose--show');
});

btnClose1.addEventListener('click', ()=>{
    modal1.classList.remove('modal--show');
    btnClose1.classList.remove('btnClose--show');
});

btnClose2.addEventListener('click', ()=>{
    modal2.classList.remove('modal--show');
    btnClose2.classList.remove('btnClose--show');
});

btnClose3.addEventListener('click', ()=>{
    modal3.classList.remove('modal--show');
    btnClose3.classList.remove('btnClose--show');
});

btnClose4.addEventListener('click', ()=>{
    modal4.classList.remove('modal--show');
    btnClose4.classList.remove('btnClose--show');
});