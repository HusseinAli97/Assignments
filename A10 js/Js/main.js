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
let localStorageKey = 'accountList'; ;
let accList = [];

// ****************************************************Site Structure****************************************************
//! 0 - up and down transition methods
//! 1 - check if local storage is empty
//!         - if empty make  account list empty and show sign up and if not empty make account list equal to local storage and show sign in
//!                 -in sign up validate data and add to local storage      -in sign in validate data and check if account is in local storage account list
//!         - make set local storage function
//! 2- run time check on sign up or sign in
//! 3- if account is in local storage account list and clicked in sign in move to another page
//! 4- in sign up after pass validation move to sign in
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