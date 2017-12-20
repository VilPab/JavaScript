function esAritmetica(cadena){
	
	var	operadores="+-*/"
	var numeros="1234567890";
	var correcto=false;
	for(var i=0;i<operadores.length;i++){
		if(cadena.indexOf(operadores.charAt(i))!=-1){
			for(var x=0;i<numeros.length;x++){
	   			if(cadena.charAt(cadena.indexOf(operadores.charAt(i)-1)).indexOf(numeros.charAt(x))!=-1 ){
					if(cadena.charAt(cadena.indexOf(operadores.charAt(i)+1)).indexOf(numeros.charAt(x))!=-1){
					var correcto=true;	
						i++;
					}
								 }
								 }
	}
}
	return correcto;
}
	

function comprobar(){
	var cadena=prompt("Introduzca una cadena");
	var buena=esAritmetica(cadena);
	if(buena){
		alert("Es una cadena correcta");
	}
	else{
		alert("No es una cadena correcta");
	}
}