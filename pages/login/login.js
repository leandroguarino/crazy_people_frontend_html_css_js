function validate(email, password){
    let valid = true
    if (!validateEmail(email)){
        showError("error-email")
        valid = false
    }
    if (!validatePassword(password)){
        valid = false
    }
    return valid
}
function login(){
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()

    if (validate(email, password)){
        window.location.href = "../feed/feed.html"
    }
    return false
}
function toggleErrorsPassword(){
    let password = document.getElementById("password").value.trim()
    // Mínimo 8 caracteres
    if (password.length < 8) {
        document.getElementById("error-minlength").classList.add("error")
        document.getElementById("error-minlength").classList.remove("success")
    }else{
        document.getElementById("error-minlength").classList.remove("error")
        document.getElementById("error-minlength").classList.add("success")
    }
    
    // Verifica se contém pelo menos um número
    if (!/\d/.test(password)) {
        document.getElementById("error-number").classList.add("error")
        document.getElementById("error-number").classList.remove("success")
    }else{
        document.getElementById("error-number").classList.remove("error")
        document.getElementById("error-number").classList.add("success")
    }
    
    // Verifica se contém pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(password)) {
        document.getElementById("error-uppercase").classList.add("error")
        document.getElementById("error-uppercase").classList.remove("success")
    }else{
        document.getElementById("error-uppercase").classList.remove("error")
        document.getElementById("error-uppercase").classList.add("success")
    }    

    // Verifica se contém pelo menos uma letra minúscula
    if (!/[a-z]/.test(password)) {
        document.getElementById("error-lowercase").classList.add("error")
        document.getElementById("error-lowercase").classList.remove("success")
    }else{
        document.getElementById("error-lowercase").classList.remove("error")
        document.getElementById("error-lowercase").classList.add("success")
    }
}