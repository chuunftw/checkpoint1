const form = document.getElementById('form')
const email_input = document.getElementById('email')
const username_input = document.getElementById('username')
const password_input = document.getElementById('password')
const repeat_password_input = document.getElementById('repeatPassword')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let errors = []
    if(username_input){
        errors = getSignupFormErrors(email_input.value, username_input.value, password_input.value,repeat_password_input)
    }
    else{
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if(errors.length>0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrors(username, email, password,repeatPassword){
    let errors = []
    if(username === '' || username == null){
        errors.push('Username is required')
        username_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){
        errors.push('Email is required')
        email.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    return errors;
}