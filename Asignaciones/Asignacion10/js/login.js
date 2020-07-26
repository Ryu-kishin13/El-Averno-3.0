$(document).ready(function(){
    $("#inicio").click(function(){

        var user = $("#user").val();
        var pass = $("#pass").val();

        if(user == "")
        {
            $("#mensaje_usuario").fadeIn("");
            return false;
        }
        //en otro caso, el mensaje no se muestra
        else
        {
            $("#mensaje_usuario").fadeOut();
            if(pass == "")
            {
                $("mensaje_contraseña").fadeIn("");
                return false;
            }
            else
            {
                $("mensaje_contrseña").fadeOut();
            }
        }
    })
})