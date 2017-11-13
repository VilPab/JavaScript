function esnif(){
	
	var cadena;
	var correcto;
	cadena=prompt("Introduzca el NIF o DNI");
	
	correcto=nif(cadena);
	
	if(correcto==0){
		alert("Dato no valido")
	}
	if(correcto==1){
		alert("Se ha introducido un NIF correcto.")
	}
	if(correcto==2){
		alert("Se ha introducido un NIF erroneo. El caracter de control es erroneo.")
	}
	if(correcto==3){
		alert("Se ha introducido un DNI correcto")
	}
	
	
}
function escif(){
	
	var cadena;
	var correcto;
	cadena=prompt("Introduzca el CIF");
	
	correcto=cif(cadena);
	
	if(correcto==0){
		alert("Dato no valido")
	}
	if(correcto==1){
		alert("Se ha introducido un CIF correcto.")
	}
	if(correcto==2){
		alert("Se ha introducido un CIF erroneo. El caracter de control es erroneo.")
	}
	
	
	
}

function escifnif(){
	
	var cadena;
	var correcto;
	cadena=prompt("Introduzca el documento");
	
	correcto=nifcif(cadena);
	
	if(correcto=="c0"|| correcto=="n0"){
		alert("Dato no valido")
	}
	if(correcto=="c1"){
		alert("Se ha introducido un CIF correcto.")
	}
	if(correcto=="c2"){
		alert("Se ha introducido un CIF erroneo. El caracter de control es erroneo.")
	}
	
	if(correcto=="n1"){
		alert("Se ha introducido un NIF correcto.")
	}
	if(correcto=="n2"){
		alert("Se ha introducido un NIF erroneo. El caracter de control es erroneo.")
	}
	if(correcto=="n3"){
		alert("Se ha introducido un DNI correcto")
	}
	
	
}

	
	
