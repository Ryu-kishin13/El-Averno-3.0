function go(){
    if(document.form.password.value == 'ADMIN1' && document.form.login.value == 'ADMIN'){
        document.form.submit();
    }
    else{
        alert("Ingrese un Nombre de usuario y Contraseña validos");
    }
}