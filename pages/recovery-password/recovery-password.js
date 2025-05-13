function validate(email){
    let valid = true
    if (!validateEmail(email)){
        showError("error-email")
        valid = false
    }
    return valid
}
function recoveryPassword(){
    let email = document.getElementById("email").value.trim()

    if (validate(email)){
        window.location.href = "recovery-password-message.html"
    }
    return false
}