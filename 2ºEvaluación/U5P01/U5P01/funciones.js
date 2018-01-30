window.onload=bienvenida;
function bienvenida() {
	alert("Bienvenido al Formulario");
}

function activar(elemento){
	elemento.value="";
	elemento.style.backgroundColor="red";
	elemento.style.color="white";
}

function desactivar(elemento){
	elemento.style.backgroundColor="white";
	elemento.style.color="black";
}
function validaCP(dato) {
	
 	var numero=parseInt(dato.value,10);
 	if (numero < 1000 || numero > 52999 ) {
	 		
 		
 	dato.value="dato no valido";
 	dato.style.backgroundColor="red";
 	dato.style.color="yellow";
 	//dato.focus();
	 } else {
 	dato.style.backgroundColor="white";
 	dato.style.color="black";
 
 //----------------------	
var provincias=new Array("Álava","Albacete","Alicante","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón","Ciudad Real","Córdoba",
		"Coruña","Cuenca","Gerona","Granada","Guadalajara","Guipúzcoa","Huelva","Huesca","Jaén","León","Lérida","La Rioja","Lugo","Madrid","Málaga",
			"Murcia","Navarra","Orense","Asturias","Palencia","Las Palmas","Pontevedra","Salamanca","Santa Cruz de Tenerife","Cantabria",
			"Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza","Ceuta","Melilla");
	
	var pos=numero/1000;
	//alert(pos);
	posdec=parseInt(pos,10);
	posdec-=1;	
	//alert(posdec);
	//alert(provincias[posdec]);
	document.primero.provincia.value=provincias[posdec];	
				
}


}

var i=0;

function pulsado(evento) {
		
	if(evento.keyCode==114 && evento.ctrlKey ){
		
		alert("ok");
		var img=["cenar.jpg","cine.jpg","cordoba.jpg","deporte.jpg"];
		/*if(i==4){
		i=0;		
		}*/
		
		
		
	document.primero.style.backgroundImage="url(imagenes/"+img[i]+")";
	//document.primero.style.backgroundColor="red";
	//i++;
	
   i=(i+1)%4;	
	
	
}
}

function fotoProvincia(dato) {
	
	var prov=["cordoba","leon", "segovia","sevilla"];
	/*var foto=["cordoba.jpg","leon.jpg","segovia.jpg","sevilla.jpg"];
	
	for(var i=0;i<prov.length;i++){
		if(prov[i]==dato.value){
			document.primero.imagen.src="imagenes/"+foto[i]+"";		
			alert("foto");
		}	
	}*/
	document.primero.imgaficion.src="imagenes/"+dato.value+".jpg";
	
}


/*function fotoAficion(dato) {
	//alert(dato.value);
		if(j==5){
		j=1;	
		}	
	
	document.primero.imgaficion.src="fotoaficion/"+dato.value+j+".jpg";
	//document.primero.imgaficion.src="fotoaficion/viajar"+j+".jpg";
	j++;	
}
function recorreFoto(dato) {
	//alert(dato.value);
	
		//ejecucion=setInterval("fotoAficion()",2000);
		ejecucion=setInterval(function(){fotoAficion(dato)},2000);
}	
*/
var arrAficiones=new Array();
var i=0;
function chkboxAñadir(dato) {

		arrAficiones.push(dato.value);
/*		for(var i=0;i<arrAficiones.length;i++){
			alert("añade "+arrAficiones[i]);		
		}
		
*/		if(arrAficiones.length>0){
		ejecucion=setInterval("cambiaFoto()",5000);}
		
		
}
function remove(array, element) {
    const index = array.indexOf(element);
    
    if (index !== -1) {
        array.splice(index, 1);
    }
}
function chkboxQuitar(dato) {
	
	
	var foto=dato.value;
	alert(foto);
	remove(arrAficiones, foto);
	
	
	for(var i=0;i<arrAficiones.length;i++){
			alert("queda "+arrAficiones[i]);		
		}
}
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
function cambiaFoto() {
//	alert("entra cambiaFoto");
		if(!isEmpty(arrAficiones)){
			
		if(i==arrAficiones.length-1){
				i=0;
		}else{
				i++;
			}	
		
		document.primero.imgaficion.src="imagenes/"+arrAficiones[i]+".jpg";	
		}
		
}
	
function soloLetras(evento){
	var valido=true;
	var otros=new Array("ñ","á","é","í","ó","ú","ü"); //Ñ vocales acentuiadas y u con dieresis.
	var valor=String.fromCharCode(evento.charCode).toLowerCase();
	  if (valor < "a" || valor > "z" ) //letras alfabeto inglés
	    if (evento.keyCode!=8 && !otros.includes(valor)) //tecla retroceso y letras españolas
	      valido=false;
	        return valido;
}