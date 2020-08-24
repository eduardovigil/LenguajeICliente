document.getElementById('IP').addEventListener("change", function () {
    campo = event.target;
    valido = document.getElementById('IPS');
  
    emailRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;
    if (emailRegex.test(campo.value)) {
      valido.innerText = 'IPV4 Correcto';
    } else {
      valido.innerText = 'IPV4 incorrecto';
    }
  });
  

  document.getElementById('Dom').addEventListener("change", function () {
    campo = event.target;
    valido = document.getElementById('Dominio');
  
    emailRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (emailRegex.test(campo.value)) {
      valido.innerText = 'Dominio Correcto';
    } else {
      valido.innerText = 'Dominio incorrecto';
    }
  });
  document.getElementById('Correo').addEventListener("change", function () {
    campo = event.target;
    valido = document.getElementById('Email');
  
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
      valido.innerText = 'Correo Correcto';
    } else {
      valido.innerText = 'Correo incorrecto';
    }
  });