const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const $btnSignIn= document.querySelector('.signInBtn'),
      $btnSignUp = document.querySelector('.signUpBtn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});