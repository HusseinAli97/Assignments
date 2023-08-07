let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let signUpNameInput = document.getElementById("signUpName");
let signUpEmailInput = document.getElementById("signUpEmail");
let signUpPasswordInput = document.getElementById("signUpPassword");
let signInForm = document.getElementById("signInForm");
let signUpForm = document.getElementById("signUpForm");
let signUpBtn = document.getElementById('signUp');
let signUpFormBtn = document.getElementById('signUpFormBtn');
let container = document.querySelector('.mainSection');
let backToSignIn = document.getElementById('backToSignIn');
let loginMainForm = document.getElementById('loginMainForm');
let localStorageKey = 'accountList'; ;
let accList = [];
let storeData = [];

// ****************************************************Site Structure****************************************************
//! 0 - up and down transition methods
//! 1 - check if local storage is empty
//!         - if empty make  account list empty and show sign up and if not empty make account list equal to local storage and show sign in
//!                 -in sign up validate data and add to local storage      -in sign in validate data and check if account is in local storage account list
//!         - make set local storage function
//! 2- run time check on sign up or sign in
//! 3- validate data and add to local storage
//! 4- if account is in local storage account list and clicked in sign in move to another page
//! 5- in sign up after pass validation move to sign in
// **********************************************************************************************************************
//? *********************************************** 0 - up and down transition methods *********************************************
signUpBtn.addEventListener('click', function () {
    showSignUp();
});

backToSignIn.addEventListener('click', function () {
    showSignIn();
    signUpBtn.classList.remove('d-none');
    backToSignIn.classList.add('d-none');
});
function showSignIn() {
    signUpForm.classList.remove('moveUpSignUp');
    signInForm.classList.remove('moveDownSignIn');
    signUpForm.classList.replace('delay-1', 'transition-Delay');
    signUpBtn.classList.remove('d-none');
    backToSignIn.classList.add('d-none');
}
function showSignUp() {
    signInForm.classList.add('moveDownSignIn');
    signUpForm.classList.add('moveUpSignUp');
    signUpForm.classList.replace('transition-Delay', 'delay-1');
    signUpBtn.classList.add('d-none');
    backToSignIn.classList.remove('d-none');
}
//? ***********************************************  0 - up and down transition methods *** *********************************************

//? *********************************************** 1 - check if local storage is empty *********************************************
(function () {
    if (localStorage.getItem(localStorageKey) !== null) {
        accList = JSON.parse(localStorage.getItem(localStorageKey));
        showSignIn();
    }else{
        showSignUp();
    }
})();

function setupLocalStorage(accounts) {
    localStorage.setItem(localStorageKey, JSON.stringify(accounts));
}
//? *********************************************** 1 - check if local storage is empty *** *********************************************


//? *********************************************** 2- run time check on sign up or sign in *********************************************
signUpNameInput.addEventListener('focusout', function () {
    validName();
})
signUpEmailInput.addEventListener('focusout', function () {
    validEmail();
})
signUpPasswordInput.addEventListener('keyup', function () {
    validPassword();
})

//? ****************************************************** 3- validate data and add to local storage *********************************************
function validName() {
    const regexName = /^[A-Z][a-zA-Z]{3,}$/g;
    const enteredName = signUpNameInput.value.trim();

    if (!enteredName) {
        showAlert("Name field cannot be empty.");
        signUpNameInput.classList.add('is-invalid');
        return false;
    }

    if (!regexName.test(enteredName)) {
        showAlert("Invalid name format. Name must start with an uppercase letter and be at least 4 characters long.");
        signUpNameInput.classList.add('is-invalid');
        return false;
    }

    if (accList.some(account => account.name === enteredName)) {
        showAlert("This name is already taken. Please choose a different one.");
        signUpNameInput.classList.add('is-invalid');
        return false;
    }

    if(signUpNameInput.classList.contains('is-invalid')){
        signUpNameInput.classList.remove('is-invalid');
        
    }else{
        signUpNameInput.classList.add('is-valid');
    }
    return true;
}

function validEmail() {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const enteredEmail = signUpEmailInput.value.trim();

    if (!enteredEmail) {
        showAlert("Email field cannot be empty.");
        signUpEmailInput.classList.add('is-invalid');
        return false;
    }

    if (!regexEmail.test(enteredEmail)) {
        showAlert("Invalid email format. Please enter a valid email address.");
        signUpEmailInput.classList.add('is-invalid');
        return false;
    }

    if (accList.some(account => account.email === enteredEmail)) {
        showAlert("This email is already registered. Please use a different email.");
        signUpEmailInput.classList.add('is-invalid');
        return false;
    }

    if (signUpEmailInput.classList.contains('is-invalid')) {
        signUpEmailInput.classList.remove('is-invalid');
    } else {
        signUpEmailInput.classList.add('is-valid');
    }
    return true;
    
}


function validPassword(){
    /*
    - at least 8 characters
    - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
    - must contain at least 1 special character
    - must contain at least 1 non-alphanumeric
     */
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if(regexPassword.test(signUpPasswordInput.value) && signUpPasswordInput.value !== ""  ){
        signUpPasswordInput.classList.replace('is-invalid', 'is-valid');
        return true;
    }else{
        signUpPasswordInput.classList.add('is-invalid');
        return false;
    }
}
function validForm() {
    return validName() && validEmail() && validPassword() && isUniqueName() && isUniqueEmail();
}
function isUniqueName() {
    const enteredName = signUpNameInput.value;
    return !accList.some(account => account.name === enteredName);
}

function isUniqueEmail() {
    const enteredEmail = signUpEmailInput.value;
    return !accList.some(account => account.email === enteredEmail);
}

signUpFormBtn.addEventListener('click', function() {
    if (validForm() && isUniqueName() && isUniqueEmail()) {
        accList.push({
            name: signUpNameInput.value,
            email: signUpEmailInput.value,
            password: signUpPasswordInput.value
        });
        setupLocalStorage(accList);
        showSignIn();
        clearInput();
        showSuccess("Account created successfully. Please sign in.");
    }
});
function clearInput(){
    signUpNameInput.value = "";
    signUpEmailInput.value = "";
    signUpPasswordInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}
function showAlert(message, icon = "error") {
    Swal.fire({
        icon: icon,
        text: message,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000, // Duration of the toast
        toast: true,
    });
}
function showSuccess(message) {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
    })

}
//? ****************************************************** 3- validate data and add to local storage *** *********************************************

//? ****************************************************** 4- if account is in local storage account list and clicked in sign in move to another page *********************************************
loginMainForm.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value;

    if (validateSignIn(enteredEmail, enteredPassword)) {
        showSuccess("Successfully signed in!");
        clearInput();
        container.classList.replace('d-flex', 'd-none');
        showLoadingScreen();
        setTimeout(function() {
        window.location.href = "../CRUD/index.html"; 
    }, 2000);
    }
});

function validateSignIn(enteredEmail, enteredPassword) {
    const account = accList.find(account => account.email === enteredEmail);

    if (!account) {
        showAlert("Email not found. Please check your email.");
        emailInput.classList.add('is-invalid');
        return false;
    }

    if (account.password !== enteredPassword) {
        showAlert("Incorrect password. Please check your password.");
        passwordInput.classList.add('is-invalid');
        return false;
    }
    clearInput();
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');
    return true;
}
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.replace('d-none', 'd-flex');
}
