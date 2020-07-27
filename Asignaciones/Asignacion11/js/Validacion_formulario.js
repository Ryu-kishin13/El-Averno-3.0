//Expresión para validar un correo electrónico
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
   //función click
   $("#bEnviar").click(function(){
       //Guardar en variables el valor que tengan las cajas de texto
       //Por medio de los id's
       //Y tener mejor manipulación de dichos valores
       
       var nombre = $("#nombre").val();
       var correo = $("#email").val();
       var tel = $("#tel").val();
       var fecha = $("#date").val();
       var usuario = $("#usuario").val();
       var sel = $("#pais option:selected");


       // --- Condicionales anidados ----
       //Si nombre está vacío
       //Muestra el mensaje
       //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
       if(nombre == "")
       {
           $("#mensaje_nombre").fadeIn("");
           return false;
       }
       //en otro caso, el mensaje no se muestra
       else
       {
           $("#mensaje_nombre").fadeOut();

           //Si correo está vacío y la expresión NO corresponde -test es función de JQuery
           //Muestra el mensaje
           //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
           if(correo == "" || !expr.test(correo))
           {
               $("#mensaje_correo").fadeIn("");
               return false;
           }
           else
           {
               //en otro caso, el mensaje no se muestra
               $("#mensaje_correo").fadeOut();


               if(tel == "")
               {
                   $("#mensaje_tel").fadeIn("");
                   return false;
               }
               else
               {
                   //en otro caso, el mensaje no se muestra
                   $("#mensaje_tel").fadeOut();


                   if(fecha == "")
                   {
                       $("#mensaje_date").fadeIn("");
                       return false;
                   }
                   else
                   {
                       //en otro caso, el mensaje no se muestra
                       $("#mensaje_date").fadeOut();
                   
                       if(sel.val() == "")
                       {
                           $("#mensaje_pais").fadeIn();
                           return false;
                       }
                       else
                       {
                           //en otro caso, el mensaje no se muestra
                           $("#mensaje_pais").fadeOut();
                       }
                   }
               }
           }
       }
       alert("Mensaje enviado correctamente");
   });//click
});//ready