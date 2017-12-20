function anagrama (vcadena,xcadena){
	var correcta=true;
	letra= vcadena.toLowerCase();
	cadena=xcadena.toLowerCase();	
	var contador=0;
	for(var i=0;i<letra.length;i++){
	
	var posicion = cadena.indexOf(letra[i]);
		if(posicion==-1){
			correcta=false;
		}
	contador=0;
	while ( posicion != -1 ) {
  		contador++;
 	    posicion = cadena.indexOf(letra[i],posicion+1);
	}
		if(contador>1){
			correcta=false;
			contador=0;
	}
		
}
	return correcta;
}

function comprobar(){
	var cadena=prompt("Introduzca una cadena");
	var cadena2=prompt("Introduzca una cadena");
	var buena=anagrama(cadena,cadena2);
	if(buena){
		alert("Es un anagrama");
	}
	else{
		alert("No es un anagrama");
	}
}
	
