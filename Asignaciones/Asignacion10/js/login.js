$(document).ready(function(){

    $("#inicio").click(function(){
        var usuario= $("#user").val();
        var contraseña = $("#pass").val();

        if(usuario == "")
        {
            $("#mensaje_usuario").fadeIn("");
            return false;
        }
        else
        {
            $("#mensaje_usuario").fadeOut();

            if(contraseña == "")
            {
                $("#mensaje_password").fadeIn("");
                return false;
            }
            else{
                $("#mensaje_password").fadeOut();
            }
        }
    }