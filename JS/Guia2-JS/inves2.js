//Metodi POP
document.write("<section>");
document.write("<article>");

document.write("<h1>El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array. Un ejemplo de este metodo es: </h1>")

const animales = [' Perro ', ' Gato ', ' Cabra ', ' Cocodrilo ', ' Leon '];
document.write("<h2><br>Arreglo normal sin aplicarle ningun metodo: </h2>")
document.write("<p>");
document.write(animales + "<br>");
document.write("</p>");

animales.pop();
document.write("<h2>Arreglo aplicandole el metodo POP(): </h2>")
document.write("<p>");

document.write(animales);
document.write("</p>");


document.write("</article>");
document.write("</section>");
var sueldos = [];
var monto;
do {
    monto = prompt('Ingrese diferentes numeros a su eleccion (ingrese 0 para finalizar el ingreso de valores):', '');
    monto = parseInt(monto);
    if (monto != 0) {
        sueldos.push(monto);
    }
} while (monto != 0);
var suma = 0;
for (var f = 0; f < sueldos.length; f++) {
    suma = suma + sueldos[f];
}
document.write("<section>");
document.write("<article>");

document.write("<h1 >El método push() del objeto Array. Este método añade el valor al final del vector.Un ejemplo es el almacenar los datos sin un contador: </h1>")
document.write("<p>");
for (var f = 0; f < sueldos.length; f++) {
    document.write('el numero ingresado es: ' + sueldos[f] + "<br>");
}
document.write('El total de los numeros ingresado es:' + suma);
document.write("</p>");
document.write("</article>");
document.write("</section>");