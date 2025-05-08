function showError(id){
    document.getElementById(id).style.display = "block"
}
function clearError(id){
    document.getElementById(id).style.display = "none"
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