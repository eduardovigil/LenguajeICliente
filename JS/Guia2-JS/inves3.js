var reves;
var notas = [];
var n = parseInt(prompt("¿Cuántas números desea ingresar?", ""));
for (i = 0; i < n; i++) {
    notas[i] = parseFloat(prompt("Ingrese el número:  " + (i + 1), ""));
}

document.write("<h2>Este es el arreglo ingresado por ti: ")
for (i = 0; i < n; i++) {
document.write(notas[i]);
}
document.write("</h2> ")
document.write("<br>");

reves=notas.reverse();
    document.write("Este arreglo esta ocupando la funcion reverse: "+reves); 