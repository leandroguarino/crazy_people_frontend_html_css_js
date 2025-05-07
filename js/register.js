function validate(name, email, password, passwordConfirm){
    let valid = true
    if (name.indexOf(" ") <= 0){
        valid = false
        showError("error-name")
    }
    if (!validateEmail(email)){
        valid = false
        showError("error-email")
    }
    if (!validatePassword(password)){
        valid = false
        showError("error-password")
    }
    if (password != passwordConfirm){
        valid = false
        showError("error-password-confirm")
    }
    return valid
}
function showError(id){
    document.getElementById(id).style.display = "block"
}
function clearError(id){
    document.getElementById(id).style.display = "none"
}
function register(){
    let name = document.getElementById("name").value.trim()
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()
    let passwordConfirm = document.getElementById("password-confirm").value.trim()
    if (validate(name, email, password, passwordConfirm)){
        //salvar os dados do usuário
        alert("Cadastrado com sucesso")
    }
}
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function validatePassword(password){
    // Mínimo 8 caracteres
    if (password.length < 8) {
        return false;
    }
    // Verifica se contém pelo menos um número
    if (!/\d/.test(password)) {
        return false;
    }
    // Verifica se contém pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    // Verifica se contém pelo menos uma letra minúscula
    if (!/[a-z]/.test(password)) {
        return false;
    }
    return true
}
function showPassword(id, idEye){
    let type = document.getElementById(id).type
    if (type == "password"){
        document.getElementById(id).type = "text"
        document.getElementById(idEye).classList.toggle("fa-eye-slash")
        document.getElementById(idEye).classList.toggle("fa-eye")
    }else{
        document.getElementById(id).type = "password"
        document.getElementById(idEye).classList.toggle("fa-eye-slash")
        document.getElementById(idEye).classList.toggle("fa-eye")
    }
}