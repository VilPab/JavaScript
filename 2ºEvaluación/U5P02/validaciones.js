window.onload = iniciar;
function iniciar(){

    document.formulario.addEventListener("submit",comprobar());
    document.formulario.nombre.onfocus=inicio;
    document.formulario.nif.onfocus=inicio;
    document.formulario.direccion.onfocus=inicio;
    /*document.formulario.telefono.onfocus=inicio;
    document.formulario.localidad.onfocus=inicio;
    document.formulario.codigoPostal.onfocus=inicio;
    document.formulario.provincia.onfocus=inicio;
    document.formulario.direccionN.onfocus=inicio;
    document.formulario.telefonoN.onfocus=inicio;
    document.formulario.localidadN.onfocus=inicio;
    document.formulario.codigoPostalN.onfocus=inicio;
    document.formulario.provinciaN.onfocus=inicio;
    document.formulario.fax.onfocus=inicio;*/

}
function inicio(evento){
    var elemento=evento.target;
    elemento.style.backgroundColor="white";
    elemento.style.color="black";
    elemento.value="";
}
function comprobarNif(dni) {
    var numero;
    var letr;
    var letra;
    var expresion_regular_dni;
    expresion_regular_dni = new RegExp("/^\d{8}[a-zA-Z]$/");

    if(expresion_regular_dni.test (dni)){
        numero = dni.substr(0,dni.length-1);
        letr = dni.substr(dni.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substring(numero,numero+1);
        if (letra!=letr.toUpperCase()) {
            return false;
        }else{
            return true;
        }
    }else{
       return false;
    }
}
function comprobar() {
    var enviar=true;
    var vnom=document.formulario.nombre.value.trim();
    var vcodigo=document.formulario.codigo.value.trim();
    var vnif=document.formulario.nif.value.trim();
    var vdireccion=document.formulario.direccion.value.trim();
    var vtelefono=document.formulario.telefono.value.trim();
    var vlocalidad=document.formulario.localidad.value.trim();
    var vcodigoPostal=document.formulario.codigoPostal.value.trim();
    var vprovincia=document.formulario.provincia.value.trim();
    var vdireccionN=document.formulario.direccionN.value.trim();
    var vtelefonoN=document.formulario.telefonoN.value.trim();
    var vlocalidadN=document.formulario.localidadN.value.trim();
    var vcodigoPostalN=document.formulario.codigoPostalN.value.trim();
    var vprovinciaN=document.formulario.provinciaN.value.trim();
    var vfax=document.formulario.fax.value.trim();
    var vconstitucion=document.formulario.constitucion.value.trim();
    var vnumeroT=document.formulario.vnumeroT.value.trim();
    var vnumeroF=document.formulario.vnumeroF.value.trim();

    var ernombre=/^[a-záéíóúüñ][a-záéíóúüñªº \-]+[a-záéíóúüñ]$/i
    var ercodigo=new RegExp("^[a-z0-9]{5,10}");
   /* var erape=new RegExp("^[a-záéíóúüñ][a-záéíóúüñªº \\-]{4,}[a-záéíóúüñ]$","i");
    var ercp=new RegExp("^((0?[1-9])|([1-4]\\d)|(5[0-2]))\\d{3}$");
    var erdir=/^[a-záéíóúñ][a-záéíóúñªº, 0-9\-]{4,}[a-záéíóúñ0-9]$/i
    var erloc=new RegExp("^[a-záéíóúüñ][a-záéíóúüñªº \\-]+[a-záéíóúüñ]$","i");
    var erpro=/^[a-záéíóúüñ][a-záéíóúüñªº \-]{3,} [a-záéíóúüñ]$/i;*/
    //comprobar nombre, empieza y termina por letra y en medio letras y blancos. Longitud mínima 3.*/
    alert(vcodigo);
    if (!ernombre.test(vnom)){
        enviar=false;
        formulario.nombre.style.backgroundColor="red";
        formulario.nombre.style.color="yellow";
        formulario.nombre.value="Nombre no valido";
    }
 if (!ercodigo.test(vcodigo)){
        enviar=false;
        formulario.nombre.style.backgroundColor="red";
        formulario.nombre.style.color="yellow";
        formulario.nombre.value="Codigo no valido";
    }

    //comprobar nif
    if (!comprobarNif(vnif)) {
        enviar=false;
        formulario.direccion.style.backgroundColor="red";
        formulario.direccion.style.color="yellow";
        formulario.direccion.value="Nif erroneo";
    }
    //comprobar localidad, empieza y termina por letra y en medio letras y blancos. Longitud mínima 3.
    /*if (!erloc.test(vloc)) {
        enviar=false;
        formulario.localidad.style.backgroundColor="red";
        formulario.localidad.style.color="yellow";
        formulario.localidad.value="Localidad no valida";
    }

    //comprobar provincia, empieza y termina por letra y en medio letras y blancos. Longitud mínima 5.
    if (!erpro.test(vpro)){
        enviar=false;
        formulario.provincia.style.backgroundColor="red";
        formulario.provincia.style.color="yellow";
        formulario.provincia.value="Provincia no valida";
    }
    // comprobar codigo postal, cuatro o cinco dígitos y valor comprendido entra 1000 y 52999.
    if (!ercp.test(vpos)) {
        enviar=false;
        formulario.codigopostal.style.backgroundColor="red";
        formulario.codigopostal.style.color="yellow";
        formulario.codigopostal.value="Código Postal no valido";
    }
    // comprobar que se ha seleccinado una comunidad autonómica.
    if (formulario.comunidad.value.length==0)
        enviar=false;
    // comprobar que se ha seleccionado un estado civil
    var estado=false;
    for (var i=0;i < formulario.estadocivil.length;i++)
        estado = estado || formulario.estadocivil[i].checked;
    enviar = enviar && estado;
    // comprobar que se han seleccionado dos aficiones
    var contador =0;
    if (formulario.bailar.checked) contador+=1;
    if (formulario.deporte.checked) contador+=1;
    if (formulario.leer.checked) contador+=1;
    if (formulario.viajar.checked) contador+=1;
    if (formulario.musica.checked) contador+=1;
    if (formulario.pintar.checked) contador+=1;
    if (formulario.escribir.checked) contador+=1;
    if (formulario.jugarvideojuegos.checked) contador+=1;
    if (contador < 2)
        enviar=false;*/
    return enviar;
}

