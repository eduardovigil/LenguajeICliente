/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: rectangulo.js *
* Uso: Calcular el área de un rectángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */

var area;
do{
    var base = prompt('Introduzca la base del rectángulo','');
}while(isNaN(base))
do{
    var altura = prompt('Introduzca la altura del rectángulo','');
}while(isNaN(altura))
    
        area = base*altura
        document.write("<header><h1>El área del rectángulo es: " + area + "</h1><hr/><br /></header>");

