
$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});


var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function()
{
    //función click
    $("#bSecion").click(function()
    {
        var us = $("#us").val();
        var contra = $("#contra").val();


        if(us == "")
        {
            $("#mensaje_us").fadeIn("");
            return false;
        }
        else
        {
            $("#mensaje_us").fadeOut();

            if(contra == "")
            {
                $("#mensaje_contra").fadeIn("");
                return false;
            }
            else
            {
                $("#mensaje_contra").fadeOut();
            }
        }
        $("input[type=text], nombre").val("");
        $("input[type=password], contraseña").val("");  
    });//click
});//ready



 $(document).ready(function(){
    //función click
    $("#bRegistrar").click(function(){

        
        var nom = $("#nombre").val();
        var ap = $("#apellido").val();
        var ciu = $("#ciudad").val();
        var ci = $("#ci").val();
        var correo = $("#correo").val();
        var contraseña = $("#contraseña").val();

        if(nom == "")
        {
            $("#mensaje_nombre").fadeIn("");
            return false;
        }
        //en otro caso, el mensaje no se muestra
        else
        {
            $("#mensaje_nombre").fadeOut();


            if(ap == "")
            {
                $("#mensaje_apellido").fadeIn("");
                return false;
            }
            else
            {
                //en otro caso, el mensaje no se muestra
                $("#mensaje_apellido").fadeOut();


                if(ciu == "")
                {
                    $("#mensaje_ciudad").fadeIn("");
                    return false;
                }
                else
                {
                    //en otro caso, el mensaje no se muestra
                    $("#mensaje_ciudad").fadeOut();

                    if(ci == "")
                    {
                        $("#mensaje_ci").fadeIn("");
                        return false;
                    }
                    else
                    {
                        //en otro caso, el mensaje no se muestra
                        $("#mensaje_ci").fadeOut();
    


                    if(correo == "" || !expr.test(correo))
                    {
                        $("#mensaje_correo").fadeIn("");
                        return false;
                    }
                    else
                    {
                        //en otro caso, el mensaje no se muestra
                        $("#mensaje_correo").fadeOut();
                    
                        if(contraseña == "")
                        {
                            $("#mensaje_contraseña").fadeIn();
                            return false;
                        }
                        else
                        {
                            //en otro caso, el mensaje no se muestra
                            $("#mensaje_contraseña").fadeOut();
                        }
                    }
                }
            }
        }
    }
        alert("Se ha registrado correctamente");
        location.reload();
              
    });//click
});//ready