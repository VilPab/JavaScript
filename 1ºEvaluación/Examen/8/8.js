function pentavocalica(cadena){
	var correcta=true;
	var letra="aeiou";
	cadena= cadena.toLowerCase();
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
	var buena=pentavocalica(cadena);
	if(buena){
		alert("Es una palabra pentavocalica");
	}
	else{
		alert("No es una palabra pentavocalica");
	}
}