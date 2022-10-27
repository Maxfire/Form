//Vars
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('login-email');
const loginPass = document.getElementById('login-password');
const signupEmail = document.getElementById('signup-email');
const signupPass = document.getElementById('signup-password');
const signupPassConf = document.getElementById('signup-password-confirmation');
const check = document.getElementById('TOS-check');

//Signup-Login forms
const forms = document.querySelector('.forms'),
    pwShowHide = document.querySelectorAll('.eye-icon'),
    links = document.querySelectorAll('.link');

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace('bx-hide', 'bx-show');
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace('bx-show', 'bx-hide');
        });
    });
});

function resetForm() {
    signupForm.reset();
}

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle('show-signup');
        signupForm.reset();
        resetErrors(signupForm);
        resetSuccess(signupForm);
        loginForm.reset();
        resetErrors(loginForm);
        resetSuccess(loginForm);
    })
})



//Validation 
forms.addEventListener('submit', (e) => {
    e.preventDefault(); //preventing form submit
    var signupExist = document.querySelector('.show-signup');
    console.log(signupExist);
    if (signupExist === null) {
        checkInputsLogin();
    } else {
        checkInputsSignUp();
    }
})

function checkInputsLogin () {
    //Get the values from the inputs
    const lEmailValue = loginEmail.value.trim();
    const lPassValue = loginPass.value.trim(); 


    //Login validation
    //Email
    if(lEmailValue === '') {
		setErrorFor(loginEmail, 'Email cannot be blank');
	} else if (!isEmail(lEmailValue)) {
		setErrorFor(loginEmail, 'Not a valid email');
	} else {
		setSuccessFor(loginEmail);
	}

    //Password
    if(lPassValue === '') {
		setErrorFor(loginPass, 'Password cannot be blank');
	} else if (lPassValue.length < 8) {
        setErrorFor(loginPass, 'Password must be at least 8 characters');
    } else if (lPassValue.search(/[0-9]/) == -1) {
        setErrorFor(loginPass, 'Password must contain at least 1 number');
    } else if (lPassValue.search(/[a-z]/) == -1) {
        setErrorFor(loginPass, 'Password must contain at least 1 lowercase');
    } else if (lPassValue.search(/[A-Z]/) == -1) {
        setErrorFor(loginPass, 'Password must contain at least 1 uppercase');
    } else if (lPassValue.search(/[!\@\#\$\%\^\&\<\>\*\()]/) == -1) {
        setErrorFor(loginPass, 'Password must contain at least 1 special character');
    } else {
		setSuccessFor(loginPass);
	}
}
function checkInputsSignUp () {
    //Get the values from the inputs
    const sEmailValue = signupEmail.value.trim();
    const sPassValue = signupPass.value.trim();
    const sPassConfValue = signupPassConf.value.trim();

    //Signup validation
    //Email
    if(sEmailValue === '') {
		setErrorFor(signupEmail, 'Email cannot be blank');
	} else if (!isEmail(sEmailValue)) {
		setErrorFor(signupEmail, 'Not a valid email');
	} else {
		setSuccessFor(signupEmail);
	}
    //Password
    if(sPassValue === '') {
		setErrorFor(signupPass, 'Password cannot be blank');
	} else if (sPassValue.length < 8) {
        setErrorFor(signupPass, 'Password must be at least 8 characters');
    } else if (sPassValue.search(/[0-9]/) == -1) {
        setErrorFor(signupPass, 'Password must contain at least 1 number');
    } else if (sPassValue.search(/[a-z]/) == -1) {
        setErrorFor(signupPass, 'Password must contain at least 1 lowercase');
    } else if (sPassValue.search(/[A-Z]/) == -1) {
        setErrorFor(signupPass, 'Password must contain at least 1 uppercase');
    } else if (sPassValue.search(/[!\@\#\$\%\^\&\<\>\*\()]/) == -1) {
        setErrorFor(signupPass, 'Password must contain at least 1 special character');
    } else {
		setSuccessFor(signupPass);
	}

    if(sPassConfValue === '') {
		setErrorFor(signupPassConf, 'Password cannot be blank');
	} else if(sPassValue !== sPassConfValue) {
		setErrorFor(signupPassConf, 'Passwords does not match');
	} else{
		setSuccessFor(signupPassConf);
	}
    //Checkbox
    if (!check.checked) { 
        alert('You must accept the terms of use from Juanito\'s Kitchen');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .field
    const small = formControl.querySelector('small');
    
    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'field input-field error'; 
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .field
    //add error class
    formControl.className = 'field input-field correct'; 
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function resetErrors(form) {
    errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => { 
        field.className = 'field input-field';
    });
}

function resetSuccess(form) {
    correctFields = form.querySelectorAll('.correct');
    correctFields.forEach(field => { 
        field.className = 'field input-field';
    });
}
