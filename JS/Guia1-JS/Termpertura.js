/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: Tempertatura.js *
* Uso: Calcular la tempertura de celsius a farhenheit. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */

var farhenth;

do{
    var grado = prompt('Introduzca los grados celsius que desea transformar:','');
}while(isNaN(grado))
    farhenth = (grado*9/5)+32;
document.write("<header><h1>Los grados de celsius a fahrenheit son: " + farhenth + "</h1><hr/><br /></header>");
var imagen = document.getElementById("hola");

imagen.style.backgroundImage = "url(./../../IMG/Guia1-IMG/4.jpg)";

if(farhenth > 32 && farhenth <= 90 ){
    imagen.style.backgroundImage = "url(./../../IMG/Guia1-IMG/2.jpg)";
}else if(farhenth > 91 && farhenth <= 180 ){
    imagen.style.backgroundImage = "url(./../../IMG/Guia1-IMG/1.jpg)";
}else if(farhenth > 181 && farhenth <= 280 ){
    imagen.style.backgroundImage = "url('./../../IMG/Guia1-IMG/3.jpg')";
}