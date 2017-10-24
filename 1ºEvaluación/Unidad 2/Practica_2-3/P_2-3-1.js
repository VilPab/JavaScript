function malvado(){
	var numero=prompt("Introduzca un numero");
	var binario="";
	var contador=0;
	while(numero>=1){
		binario=numero%2+binario;
		if(numero%2==1){
			contador++;
		}
		numero=Math.trunc(numero/2);
		
	}
	if(numero==1){
		contador++;
	}
	binario=numero+binario;
	if(contador%2==0){
		alert("Es un numero malvado");
	}else{
			alert("No es un numero malvado");
	}
}

