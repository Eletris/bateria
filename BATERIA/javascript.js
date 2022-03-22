//Declaro una función a la que quiero llamar cuando se haga click sobre el h1
//Sustituye al onClick activando un event listener en el h1

// function manejarClick(){
//   alert("Me has hecho click");
// }

//añado al elemento h1 una "oreja" que escucha si se produce un click en el h1 o se aleja el ratón

// document.querySelector("h1").addEventListener("click",manejarClick);
// document.querySelector("h1").addEventListener("mouseout",function noTeVayas(){alert("Porfa, no te vayas");});

//añado un event listener a todos los botones para que me avise si se ha hecho click
//selecciono y guardo todos los botones en un array
var arrayConLosBotones = document.querySelectorAll(".caja");

//averiguo la longitud del array (nº de botones que hay)
var numeroDeBotones = arrayConLosBotones.length;

//recorro uno por uno los botones usando un bucle de tipo for y en cada repetición añado un listener al botón que corresponda
for (var i = 0; i < numeroDeBotones; i++) {
  //añado el listener
  arrayConLosBotones[i].addEventListener("click", function tocarSonido(){
//extraemos la letra del botón para saber que sonido reproducir
    var letraBoton= this.innerHTML;
//ahora uso la letra en un switch para reflejar los 7 casos posibles
    switch(letraBoton){
        case "W": var tom1=new Audio("sonidos/tom-1.mp3");
            tom1.play();
            break;
        case "A": var tom2=new Audio("sonidos/tom-2.mp3");
            tom2.play();
            break;
        case "S": var tom3=new Audio("sonidos/tom-3.mp3");
            tom3.play();
            break;
        case "D": var tom4=new Audio("sonidos/tom-4.mp3");
            tom4.play();
            break;
        case "J": var snare=new Audio("sonidos/snare.mp3");
            snare.play();
            break;
        case "K": var crash=new Audio("sonidos/crash.mp3");
            crash.play();
            break;
        case "L": var kick=new Audio("sonidos/kick-bass.mp3");
            kick.play();
            break;
}
  });
}
