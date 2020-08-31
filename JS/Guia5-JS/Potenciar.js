var formulario=document.querySelector("div.cuerpo");
var Uno=document.getElementById("V1");
var Dos=document.getElementById("V2");
var btnBoton=document.getElementById("potenciar");  
var resultado=document.getElementById("respuesta")
var contenido="";

function calcular(base, potencia){

    this.base=base.value;
    this.potencia=potencia.value;
    this.total;
    this.demostrar = function () 
    {
        this.total= Math.pow(this.base,this.potencia) 
        this.Mostrar=function(){
    contenido+="<p> El numero que usted ingreso fue"+" "+this.base+" "+ "elevado al"+" "+this.potencia + " "+ "y su total es de"+" "+ this.total+"</p>";
            

            formulario.style.display="none";
            resultado.innerHTML=contenido;
                }
    };
  
    
}


btnBoton.addEventListener("click",function(){
    var r1 = new calcular(Uno,Dos);
    r1.demostrar();
    r1.Mostrar();
})