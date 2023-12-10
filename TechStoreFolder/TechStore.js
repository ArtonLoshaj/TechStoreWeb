const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

let emailRegex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
let passwordRegex= /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;


function kyciratu() {
    let emailError=document.getElementById('emailgabim');
    let emailInput = document.getElementById('ID');
    let passwordInput=document.getElementById('pass');
    let passwordError = document.getElementById('passigabim');

    emailError.innerText = '';
    passwordError.innerText = '';

    if(!emailRegex.test(emailInput.value)) {
        emailError.innerText='Invalid email';
      
    }

    if(passwordRegex.test(passwordInput.value)) {
        passwordError.innerText='Invalid password';
        return;
    }

    alert('Logging you in :)');
}

function registeratu() {
    let emailError=document.getElementById('emailgabimr');
    let emailInput = document.getElementById('email');
    let passwordInput=document.getElementById('pass');
    let passwordError = document.getElementById('passigabimr');
    let emriError = document.getElementById('emrigabim');
    let emriInput = document.getElementById('User');

    emailError.innerText = '';
    passwordError.innerText = '';
    emriError.innerText = '';

    if(!nameRegex.test(emriInput.value))
    {
        emriError.innerText='This username is not allowed';
    }

    if(!emailRegex.test(emailInput.value)) {
        emailError.innerText='Invalid email';
    }

    if(!passwordRegex.test(passwordInput.value)) {
        passwordError.innerText='Invalid password';
        return;
    }

    alert('Your data has been saved');
}
