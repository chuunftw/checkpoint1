const form = document.getElementById('form')
const email_input = document.getElementById('email')
const username_input = document.getElementById('username')
const password_input = document.getElementById('password')
//const repeat_password_input = document.getElementById('firstname-input')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let errors = []
    if(username_input){
        errors = getSignupFormErrors(email_input.value, username_input.value, password_input.value)
    }
    else{
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }
})

function getSignupFormErrors(username, email, password){
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
}