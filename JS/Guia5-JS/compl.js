tabla = "";

function crear()
{
if(contra.value.length < 8 ){
alert('Ingrese una contraseña con un minimo de 8 digitos');
}else {
if (contra.value !== contra2.value) {
alert('Contraseña incorrecta, no son iguales las contraseñas');
} else {
registro = new registro(nomb, ape, ape2, correo_electronico, contra, fecha);
registro.Generadordecodigoempleado();
registro.Registrados();
}
}
}

// Crando la clase 
class registro
{
// creando el constructor
constructor(nomb, ape, ape2, correo, contra, fecha_de_nacimiento)
{
this.id=null;
this.nomb = nomb.value;
this.ape = ape.value;
this.ape2 = ape2.value;
this.correo = correo.value;
this.contra = contra.value;
this.fechaNac = fecha_de_nacimiento.value;
}
//funcion para generar codigo de del miembro 
Generadordecodigoempleado() 
{
var v1 = this.ape[0];
var v2 = this.ape2[0];
var a = new Date().getFullYear()
var random = Math.floor(1000 + Math.random() * 9000);
this.id= v1+v2+a+random;
}
// funcion para mostrar la tabla
Registrados() {
tabla+="<td>"+ this.id +"</td>";
tabla+="<td>"+ this.nomb +"</td>";
tabla+="<td>"+ this.ape + " " + this.ape2 +"</td>";
tabla+="<td>"+ this.correo +"</td>";
tabla+="<td>"+ this.contra +"</td>";
tabla+="<td>"+ this.fechaNac +"</td>";     
okay.innerHTML = tabla;
}
    
} 

btnRegistro.addEventListener('click', function crearUsuario () 
{
    crear()
});

btnRegistro.attachEvent('onclick', function crearUsuario () 
{
    crear()
});