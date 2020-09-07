var fil;
var col;
var cel;
var val;

agregar.addEventListener('click', function(){
    fil = numFilas.value;
    col = numColumnas.value;

    tablass (fil, col);

    console.log({fil, col})
});

actualizar.addEventListener('click', function(){
    cel = Celda.value;
    val = Valor.value;
    Añadirtabla (cel, val)
    console.log({cel, val})
});

var htmlFila='';
var htmlColumna='';

function tablass (f, c) {
    for(let i=0; i<f;i++){
        htmlFila += "<tr>";
        for(let j=0;j<c;j++){
            htmlFila += "<td></td>";
        }
        htmlFila += "<tr>";
    }
    tabla.innerHTML = htmlFila;
}

function Añadirtabla (cell, value){
    document.querySelectorAll('td')[cell-1].innerHTML = value;
}