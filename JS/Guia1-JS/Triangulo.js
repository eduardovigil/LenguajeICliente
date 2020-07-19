/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: triangulo.js *
* Uso: Calcular el área de un triángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */

var area;
do{
    var base = prompt('Introduzca la base del rectángulo','');
}while(isNaN(base))
do{
    var altura = prompt('Introduzca la altura del rectángulo','');
}while(isNaN(altura))

        area = (base*altura)/2;
document.write("<header><h1>El área del Triángulo es: " + area + "</h1><hr/><br /></header>");


