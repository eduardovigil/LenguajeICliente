var photos = new Array();
var which = 0;
/* Las siguientes imágenes pueden ser cambiadas para que
se muestren las imágenes que deseas. Pueden agregarse
más imágenes, todas las que desees, sólo tienen que
agregarse más elementos de arreglo para almacenarlas. */
photos[0] = "../../IMG/Guia8-IMG/house0.jpg";
photos[1] = "../../IMG/Guia8-IMG/house1.jpg";
photos[2] = "../../IMG/Guia8-IMG/house2.jpg";
photos[3] = "../../IMG/Guia8-IMG/house4.jpg";
function init(){
var lnkbegin = document.getElementById("linkbegin");
if(lnkbegin.addEventListener){
lnkbegin.addEventListener("click", function(){
which=1;
backward();
return false;
}, false);
}
else if(lnkbegin.attachEvent){
lnkbegin.attachEvent("click", function(){
which=1;
backward();
return false;
});
}
}
function backward(){
if(which>0){
window.status='';
which--;
if(document.rotater.B1.disabled){
document.rotater.B1.disabled = false;
document.rotater.B1.className = "button blue";
}
document.images.photoslider.src=photos[which];
}
else{
document.rotater.B2.disabled = true;
document.rotater.B2.className = "button bluedisabled";
window.status = 'Principio de la galería';
}
}
function forward(){
if(which<photos.length-1){
which++;
document.rotater.B2.disabled = false;
document.rotater.B2.className = "button blue";
document.images.photoslider.src=photos[which];
}
else{
document.rotater.B1.disabled = true;
document.rotater.B1.className = "button bluedisabled";
window.status='Final de la galería';
}
}
if(window.addEventListener){
window.addEventListener("load", init, false);
}
else if(window.attachEvent){
window.attachEvent("load", init);
}