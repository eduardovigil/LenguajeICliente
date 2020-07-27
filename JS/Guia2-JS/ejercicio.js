var unidad=1, decena=1, ceentena=0, nume, par, impar, valor, valores;

do {
    nume = parseInt(prompt('Ingrese un numero (Mayores a dos cifras y menores a 4 cifras)'));    //Verificar que se ingrese un dato numérico
    if (isNaN(nume)) {
        alert("El valor digitado no es numérico.");
        continue;
    }
    //Verificar que el valor ingresado sea mayor o igual que 2
    if (nume < 9) {
        alert("Ingrese un número mayor");
    }
} while (isNaN(nume) || (nume < 9 && nume>999));
document.write("<h1>Las Respuestas son las siguientes:</h1> <br>");
document.write("<div id=\"circle\">");
document.write("</div>");
document.write("<p>");
//Verificacion si el numero es de dos cifras 
if(nume>9 && nume<99){
    de=parseInt(nume/10);
    unidad= parseInt(nume-(decena*10));
    document.write("El número ingresado es el siguiente: "+nume+"<br>");
    document.write("1) El número ingresado es de 2 cifras<br>");
    if((decena %2 == 0 && unidad %2 == 0)){
        document.write("2) El número ingresado tiene 0 números impares<br>");
        document.write("3) El número ingresado tiene 2 números pares<br>");
        par=decena+unidad;
        impar=0;
    }
    else if((decena %2 != 0) && (unidad %2 != 0)){
        document.write("2)El número ingresado tiene 2 números impares<br>");
        document.write("3)El número ingresado tiene 0 números pares<br>");
        impar=decena+unidad;
        par=0;   
    }               
    else if((decena %2 != 0 && unidad %2 == 0) || (decena %2 == 0 && unidad %2 != 0)){
        
        document.write("2) El numero ingresado tiene 1 numeros impares<br>");
        document.write("3) El numero ingresado tiene 1 numeros pares<br>");
        if(decena % 2 != 0 && unidad % 2 == 0){
            impar=decena+0;
            par=unidad+0; 
            
        }
        else if(decena % 2 == 0 && unidad % 2 != 0){
            impar=unidad+0;
            par=decena+0;
            
        }
    } 
    valor=decena+unidad;

    document.write("4) La suma de los numeros pares es: "+par+"<br>");
    document.write("5) La suma de los numeros impares es: "+impar+"<br>");
    document.write("6) La suma de todos los digitos es: "+valor+"<br>");
    if(decena<unidad){
        document.write("7) El numero mayor es es: "+unidad+"<br>");
        document.write("8) El numero menor es es: "+decena+"<br>");
    }
    else if(decena>unidad){
        document.write("7) El numero mayor es es: "+decena+"<br>");
        document.write("8) El numero menor es es: "+unidad+"<br>");
    }
}

//numeros de 3 cifras
else if(nume>99 && nume<999){
    centena=parseInt(nume/100);
    decena=parseInt((nume-(centena*100))/10);
    unidad= parseInt(nume-(centena*100+decena*10));
    document.write("El numero ingresado es: <strong>"+nume+"</strong><br>");
    document.write("1) El numero ingresado tiene 3 cifras<br>");
    if(centena%2==0 && decena %2 == 0 && unidad %2 == 0 ){
        document.write("2) El numero ingresado tiene 0 numeros impares<br>");
        document.write("3) El numero ingresado tiene 3 numeros pares<br>");
        impar=0;
        par=centena+decena+unidad;
    }
    else if(centena%2 != 0 && decena %2 != 0 && unidad %2 != 0 ){
        document.write("2) El numero ingresado tiene 3 numeros impares<br>");
        document.write("3) El numero ingresado tiene 0 numeros pares<br>");
        impar=centena+decena+unidad;
        par=0;
    }
    else if(centena%2 == 0 && decena %2 != 0 && unidad %2 != 0 || centena%2 != 0 && decena %2 == 0 && unidad %2 != 0 || centena%2 != 0 && decena %2 != 0 && unidad %2 == 0){
        document.write("2) El numero ingresado tiene 2 numeros impares<br>");
        document.write("3) El numero ingresado tiene 1 numeros pares<br>");
        if(centena%2 == 0 && decena %2 != 0 && unidad %2 != 0){
            par=centena;
            impar=decena+unidad;
        }
        else if(centena%2 != 0 && decena %2 == 0 && unidad %2 != 0){
            par=decena;
            impar=centena+unidad;
        }
        else if(centena%2 != 0 && decena %2 != 0 && unidad %2 == 0){
            par=unidad;
            impar=centena+decena;
        }
    }
    else if(centena %2 == 0 && decena %2 == 0 && unidad %2 != 0 || centena%2 == 0 && decena %2 != 0 && unidad %2 == 0 || centena %2 != 0 && decena %2 == 0 && unidad %2 == 0){
        document.write("2) El numero ingresado tiene 1 numeros impares<br>");
        document.write("3) El numero ingresado tiene 2 numeros pares<br>");
        if(centena%2 == 0 && decena %2 == 0 && unidad %2 != 0){
            impar=unidad;
            par=centena+decena;
        }
        else if(centena%2 == 0 && decena %2 != 0 && unidad %2 == 0){
            impar=decena;
            par=centena+unidad;
        }
        else if(centena%2 != 0 && decena %2 == 0 && unidad %2 == 0){
            impar=centena;
            par=decena+unidad;
        }

    }
    valor=centena+decena+unidad;
    document.write("4) La suma de los numeros pares es: "+par+"<br>");
    document.write("5) La suma de los numeros impares es: "+impar+"<br>");
    document.write("6) La suma de todos los digitos es: "+valor+"<br>");
    if(centena > decena && decena > unidad){
        document.write("7) El numero mayor es es: "+centena+"<br>");
        document.write("8) El numero menor es es: "+unidad+"<br>");
    }
    else if(centena>unidad && unidad > decena ){
        document.write("7) El numero mayor es es: "+centena+"<br>");
        document.write("8) El numero menor es es: "+decena+"<br>");
    }
    else if(decena>centena && centena > unidad){ 
        document.write("7) El numero mayor es es: "+decena+"<br>");
        document.write("8) El numero menor es es: "+unidad+"<br>");
    }
    else if(decena>unidad && unidad > centena){ 
        document.write("7) El numero mayor es es: "+decena+"<br>");
        document.write("8) El numero menor es es: "+centena+"<br>");
    }
    else if(unidad>centena && centena > decena){ 
        document.write("7) El numero mayor es es: "+unidad+"<br>");
        document.write("8) El numero menor es es: "+decena+"<br>");
    }
    else{
        document.write("7) El numero mayor es es: "+unidad+"<br>");
        document.write("8) El numero menor es es: "+centena+"<br>");
    }
}
document.write("</p>");
document.write("</article>");
document.write("</section>");