function nif(cadena){

var cadena=cadena;
var inicionif ="XYZLKM"
var control="TRWAGMYFPDXBNJSQVHLCKE";
var correcto=false;
var posicion;
var acum=0;
var ceros=false;
var dni=false;
var codigo;
var numero;
var dni
if(cadena.length<=8 && cadena.length>=6){
	
	dni=parseInt(cadena);
	numero=dni.toString();
	if(cadena.length==numero.length){
		codigo=3;
	}
	
}else{
	

if (cadena.length==9){
      for(var i=0;i<inicionif.length;i++){
        if(cadena.charAt(0)==inicionif.charAt(i)){
          correcto=true;
          posicion=i;
          
        }
      }
      if(correcto){
    	
        acum=parseInt(posicion+cadena.substring(1,8));
        }
      else{
      	acum=parseInt(cadena.substring(0,8));
      	dni=true;
      }
 
        posicion=acum%23;
  
        if(control.charAt(posicion)==cadena.charAt(8)){
        	if(dni){
        		codigo=1;
        	}else{
          codigo= 1;
         }
        }
        else{
        	if(ceros){
        		codigo=0;
        	}else{codigo= 2;}
            
        }
      }else{
      	codigo=0;
      }
      }
      

  
return codigo;


}
function cif(cadena) {
  var cadena = cadena;
  var controlNum = "ABCDEFGHJUV"; //ABCDEFGHJUV
  var controlLetra = "NPQRSW"; //NPQRSW
  var controlValores = "JABCDEFGHI";
  var control;
  var esNum = false;
  var esLetra = false;
  var numeros = "0123456789";
  var cadenaNum = "";
  var contador = 0;
  var suma = 0;
  var str;
  var valor;

  cadena = cadena.toUpperCase();
  if (cadena.length == 9) {
    for (var i = 0; i < controlNum.length && !esNum; i++) {
      if (cadena.charAt(0) == controlNum.charAt(i)) {
        esNum = true;
      }
    }
    if (!esNum) {
      for (var i = 0; i < controlLetra.length && !esLetra; i++) {
        if (cadena.charAt(0) == controlLetra.charAt(i)) {
          esLetra = true;
        }
      }
    }
    if (esNum || esLetra) {
      cadenaNum = cadena.substring(1, 8);
      for (var i = 0; i < cadenaNum.length; i++) {
        for (var j = 0; j < numeros.length; j++) {
          if (cadenaNum.charAt(i) == numeros.charAt(j)) {
            contador++;
          }
        }
      }
      if (contador == cadenaNum.length) {
        for (var i = 1; i < cadenaNum.length; i += 2) {
          suma += parseInt(cadenaNum.charAt(i));
        }
        for (var i = 0; i < cadenaNum.length; i += 2) {
          str = (parseInt(cadenaNum.charAt(i)) * 2).toString();
          if (str.length == 1) {
            suma += (parseInt(cadenaNum.charAt(i)) * 2);
          } else {
            for (var j = 0; j < str.length; j++) {
              suma += parseInt(str.charAt(j));
            }
          }
        }
        control = 10 - suma % 10;
        if (control == 10) {
          control = 0;
        }
        if (esNum) {
          if (control.toString() == cadena.charAt(8)) {
           
            valor = 1;
          } else {
           
            valor = 2;
          }
        } else {
          if (controlValores.charAt(control) == cadena.charAt(8)) {
           
            valor = 1;
          } else {
           
            valor = 2;
          }
        }
      } else {
        
        valor = 0;
      }
    } else {
    
      valor = 0;
    }
  } else {
   
    valor = 0;
  }
  return valor
}
function nifcif(cadena){
	var cadena= cadena;
	var cifcadena = "ABCDEFGHJUVNPQRSW";
	var c=false;
	var validacion;
	var letra="c"
	
	for(var i=0;i<cifcadena.length;i++){
		if(cadena.charAt(0)==cifcadena.charAt(i)){
			c=true
		}
	}
	
	if(c){
		validacion=letra+cif(cadena);
	}else{
		letra="n";
		validacion=letra+nif(cadena);
	}
	
	
      	
      return validacion;
}

