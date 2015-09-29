/*
*****************************************************LIBRERIA jquery by  RICHARD PARKER con cariño para mi gente linda de Sodimac y Homy*********************************************************
*IMPORTANT!
jQuery fue creada inicialmente por John Resig, QUERY SIGNIFICA CONSULTA  y nos permite de una manera sencilla y eficiente  blablabla... a nadie le importa:
sharup stupid tiger!!! 
"La entrada cuesta la razon" // folleto invitación para el teatro mágico "Lobo Estepario" // Hermann Hesse
"Destruyendo lo que somos sabremos donde nos encontramos" // Julio Ferreto Director de Escula de Teatro FAc Arte Upla.
"Avance irreflexivo con un retroceso metódico" /// Cervantes
¡Mejor llama a Saul!//Saul Goodman-- Breaking Bad
agrrhhaaaajjj// Zombie anonimo --The Walking Dead
The chemistry is the  study of the change//Walter white-- Breaking Bad
where is my money?BITCH!!!//Jesse Pinkman-- Breaking Bad
Fire Walk With Me - BOB///Twin Peaks 
Yo prefiero el caos a esta realidad tan charcha...!!!! // Mauricio Redoles
--------------------------------------------------------------------------cuenta de  jsfiddle http://jsfiddle.net/user/Pauloski/fiddles/-----------------------------------------------------------------
*/

 

/* ESTA ES UNA FIRMA /////////////////////////////////////////////////////////
                _ _                       
               | (_)                      
  ___  ___   __| |_ _ __ ___   __ _  ___  
 / __|/ _ \ / _` | | '_ ` _ \ / _` |/ __| 
 \__ \ (_) | (_| | | | | | | | (_| | (__  
 |___/\___/ \__,_|_|_| |_| |_|\__,_|\___| 
       			 \|||/
      		     (o o)
        ------ooO-(_)-Ooo------     
js - PROYECTO DESCRIPCIÓN x área de  diseño Sub Gerencia de 
Usabilidad y Experiencia de Usuario, 
Integración MasterChef: Paulo Correa // pcorrea@sodimac.cl
Ver2.0 FECHA   Santiago Chile   
/////////////////////////////////////////////////////////// */




//*************************************************************************EJECUTAR CUANDO EL DOCUMENTO ESTE LISTO*********************************************************************

//cuando el documento (document) esté listo (ready) ejecutar la función que sigue a continuación.
$(document).ready(function() {
 // líneas de código de jQuery
});



//*************************************************************************SELECTORES --- http://codylindley.com/jqueryselectors/  *********************************************************************
// Selecciona todos los enlaces de la página 
$('a');
 
// Selecciona el elemento cuyo id sea "primero"
$('#primero');
 
// Selecciona todos los h1 con class "titular"
$('h1.titular');
 
// Selecciona todo lo anterior
$('a, #primero, h1.titular');

// Selecciona todos los párrafos de la página que tengan al menos un enlace
$('p[a]');
 
// Selecciona todos los radiobutton de los formularios de la página
$('input:radio');
 
// Selecciona todos los enlaces que contengan la palabra "Imprimir"
 $('a:contains("Imprimir")');
 
// Selecciona los div que no están ocultos
$('div:visible');
 // Selecciona todos los elementos pares de una lista
$("ul#menuPrincipal li:even");
// Selecciona todos los elementos impares de una lista
$("ul#menuPrincipal li:odd");
// Selecciona los 5 primeros párrafos de la página
$("p:lt(5)");
// ---DOM---Sólo obtiene los párrafos que contengan la palabra 'importante'
$('p').contains('importante');
// ---DOM--- Selecciona todos los enlaces de la página, salvo el que
// tiene una 'class' igual a 'especial $('a').not('.especial');'
$('a').not('.especial');
// ---DOM---La siguiente instrucción es equivalente a la anterior
$('a').not($('.especial'));
//El método next() selecciona el contenedor siguiente al que tiene id=”contenido”. En el caso del ejemplo, se eliminará el contenedor siguiente a “#contenido”.
$("#contenido").next().remove();
//Con la función text() obtiene el contenido textual del elemento o contenedor con id=”contenido”.
$("#contenido").text();
//Con la función attr() retorna el valor del atributo que le pases como parámetro de un elemento o contenedor.
$("#contenido").attr("data");
$("#contenido").attr("title");
$("#skuUrl").append(index);
//*************************************************************************EVENTOS************************************************************************

// Ejecuta el evento 'onclick' en todos los párrafos de la página
$('p').click();
 
// Ejecuta el evento 'mouseover' sobre un 'div' con id 'menu'
$('div#menu').mouseover();

//conjunto de funciones dentro de un mismo evento, se ejecutan en secuencia puede se ---.click --- .mouseover----.toggle---etc
$("div").click(function(){
  // Ejecuta funcion 1;
  // Ejecuta funcion 2;...
});

/*la función toggle(), que permite ejecutar dos funciones de forma alterna cada vez que se pincha sobre un elemento:*/
$("p").toggle(function(){
  alert("Me acabas de activar");
},function(){
  alert("Me acabas de desactivar");
});



//*************************************************************************PROPIEDADES EN CSS************************************************************************

// Obtiene el valor de una propiedad CSS
// En este caso, solo para el primer 'div' de la página
$('div').css('background');
 
// Establece el valor de una propiedad CSS
// En este caso, para todos los 'div' de la página
$('div').css('color', '#000000');
 
// Establece varias propiedades CSS
// En este caso, para todos los 'div' de la página
$('div').css({ padding: '3px', color: '#CC0000' });
//Además de las funciones anteriores, CSS dispone de funciones específicas para obtener/establecer la altura y anchura de los elementos de la página:

// Obtiene la altura en píxel del primer 'div' de la página
$('div').height();
 
// Establece la altura en píxel de todos los 'div' de la página
$('div').height('150px');
 
// Obtiene la anchura en píxel del primer 'div' de la página
$('div').width();
 
// Establece la anchura en píxel de todos los 'div' de la página
$('div').width('300px');

//El método append() añade contenido html al contenedor con id=”contenido”.
$("#contenido").append("<p>hola!</p>");

//El método appendTo() copia o mueve el contenedor con id=”cotenedor2″ al contenedor con id=”contenido1″.
$("#contenido2").appendTo("#contenido1");

//*************************************************************************EFECTOS VISUALES************************************************************************
// Oculta todos los enlaces de la página
$('a').hide();
 
// Muestra todos los 'div' que estaban ocultos
$('div:hidden').show();
 
// Muestra los 'div' que estaba ocultos y oculta 
// los 'div' que eran visibles
$('div').toggle();
//muestra los elementos con un fundido suave
$('div').fadeIn();
//oculta los elementos con un fundido suave
$('div').fadeOut();

//establece la opacidad del elemento en el nivel indicado
$('div').fadeTo();

//hace aparecer un elemento desplegándolo en sentido descendente
$('div').slideDown();
//hace desaparecer un elemento desplegándolo en sentido ascendente
$('div').slideUp();
// hace desaparecer el elemento si era visible y lo hace aparecer si no era visible
$('div').slideToggle();
//Con la función toggleClass() podemos añadir y quitar la clase “nombreclase” al contenedor con id=”contenido”.
$("#contenido").toggleClass("nombreclase");

/*ANIMATE:.animate( properties, [ duration ], [ easing ], [ callback ] )
http://viralpatel.net/blogs/understanding-jquery-animate-function/
*/
$("#content").animate({"height": "80px"},"fast");
$("#content").animate( {"width": "350px"},"fast");
$("#content").animate({"opacity": "0.15"},"slow");
$("#content").animate({"left": "+=50px"},"slow");
$("#content").animate({"right": "-=50px"},"slow");
//[ callback ]  este es el tipo de codigo que permite animar en secuencia, termina la primera animacion y luego podría animar metodo Matrioska 
$("#content").animate({"height": "100px", "width": "250px"},"slow",function(){$(this).html("Animation Completed"); });
 $("#content").animate({"height": "100px"}, 500).animate({"width": "250px"}, 500);
 $("#content").animate({"height": "100px"}, {"queue": false, "duration": 500}).animate({"width": "250px"}, 500);
 //slidetogle 
$('#infopageCont1').animate({width:'toggle'},500);
 
$(this).animate({ opacity: 1.0,width: '234px'}, {queue: false, /* This skips the queue*/duration: 'fast',complete: function() { alert('the callback'); } // Your callback goes here...
});

/*bucle infinito http://www.desarrolloweb.com/articulos/colas-efectos-jquery.html*/
function colaEfectos(){
   capa = $("#micapa");
   capa.animate({"font-size": "1.5em"}, 2000);
   capa.hide(1000);
   capa.show(1000);
   capa.animate({"left": "350px","top": "50px"},1500);
   capa.animate({"font-size": "0.75em"}, 2000);
   capa.animate({"left": "100px","top": "20px"}, 1500, colaEfectos);
}

//************************************************************************RECORRE ARRAYS*******************************************************************

/*Recorrer arrays y objetos también es muy sencillo con jQuery, gracias a la función $.each(). El primer parámetro de la función es el objeto que se quiere recorrer y el segundo parámetro es el código de la función que lo      recorre (a su vez, a esta función se le pasa como primer parámetro el índice del elemento y como segundo parámetro el valor del elemento):*/

// Recorrer arrays
var vocales = ['a', 'e', 'i', 'o', 'u'];
 
$.each( vocales, function(i, n){
  alert('Vocal número ' + i + " = " + n);
});
 

//************************************************************************FUNCIONES EJECUTADAS CONOCIDAS Y POR CONOCER*******************************************************************



/* boton activo  segun click */
$(".botonAccesorio").click(function() {
    $(".botonAccesorio").removeClass("box_buttons_navActivo");// no sea pavo la clase .box_buttons_navActivo, tiene queser distinta a la clase .botonAccesorio si no no se cacha el efecto 
	$(this).addClass("box_buttons_navActivo");// idintifica el this no se que mas decir al respecto mmm   eeeee  sharup stupid tiger!!!     
});


/*Con la función each() lo que hacemos es iterar una serie de elementos. En el ejemplo estamos iterando una lista a la que a cada elemento le estamos cambiando el estilo o css utlizando la función toggleClass().*/
$("li").each(function(){
   $(this).toggleClass("nombreclase");
});


		

			
			
/*Desde la versión 1.7 de jQuery tenemos el método on(), que nos ofrece toda la funcionalidad necesaria para gestionar eventos. Gracias a este método ya no necesitamos los antiguos bind(), live() o delegate(), pero tampoco blur(), focus(), click(), hover() y otros.*/
			
	(function(){
    $('button').on('click', function() {
      // código
    });
})();

/*obtener el ancho y alto de la ventana*******************http://www.mkyong.com/jquery/jquery-resize-example/ */

$('#browserInfo').text('Browser (Width : '
                + $(window).width() + ' , Height :' + $(window).height() + ' )');
 
    $(window).resize(function () {
		$('#browserInfo').text('Browser (Width : ' + $(window).width() 
                                 + ' , Height :' + $(window).height() + ' )');
    });
 
 /*obtener el ancho y alto de la ventana*******************http://jsfiddle.net/6v7GE/*/
 $(function(){

$(window).bind("resize",function(){
    console.log($(this).width())
    if($(this).width() <500){
    $('div').removeClass('yellow').addClass('red')
    }
    else{
    $('div').removeClass('red').addClass('yellow')
    }
})
})

/*obtener el ancho y alto de la ventana dedee pagina de copec FUNCIONA!*******************/
 $(window).resize(function(){
            if (($(window).width() > 768)) {
                $.sidr('close', 'sidr');
            }
        });


 /*/////////////////////ciclo for////////////////////////////////*/
for(a=0;a<10;a++){
document.writeln('<a href="http://www.forosdelweb.com/images/galeria/imagen'+a+'.jpg" rel="lightbox[roadtrip]"><img src="http://www.forosdelweb.com/images/thumb_'+a+'.jpg" width="250" height="150"/></a>');
}