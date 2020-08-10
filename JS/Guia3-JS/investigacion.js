do{
    var op1=prompt('Introduzca el primer numero:','');
}while(isNaN(op1))
do{
    var op2=prompt('Introduzca el segundo numero:','');
}while(isNaN(op2))
var resultado = document.getElementById('resultado');
function sum(op1){
    return function (op2){
        return (parseFloat(op1) + parseFloat(op2))
    }
}
resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " + " + op2 +" = " + (parseFloat(op1) + parseFloat(op2)) + "</p>\n";