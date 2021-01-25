var error_img = document.querySelector('#error');
var submit_btn = document.querySelector('#submit');
var warning_message = document.querySelector('#error-description')
var email = document.querySelector('#email')

submit_btn.addEventListener('click', function(){
    // console.log('hi from button')
    var _email = email.value;
    if (!validateEmail(_email)) {
        error_img.classList.remove('hide')
        warning_message.classList.remove('hide')
    }
    else{
        error_img.classList.add('hide')
        warning_message.classList.add('hide')
    }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}