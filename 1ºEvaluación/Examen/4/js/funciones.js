
var mapaA=new Map();

function añadirR(){
var almacen1=new Almacen(1,1000,"2001/12/12","A1111",30000,21,2000);
	
var almacen2=new Almacen(2,2000,"2002/12/12","A2222",40000,21,3000);
	
var almacen3=new Almacen(3,3000,"2003/12/12","A3333",50000,21,24000);
	

	mapaA.set(almacen1._Fiscal,almacen1);
	mapaA.set(almacen2._Fiscal,almacen2);
	mapaA.set(almacen3._Fiscal,almacen3);
}

function crearAlmacen(){
	var ntienda=prompt("Introduzca el codigo de la empresa");
	var capitalS=prompt("Introduzca el capital de la empresa");
	var fechaA=prompt("Introduzca la fecha de apertura");
	var fis=prompt("Introduzca el nif de empresa");
	var fac=prompt("Introduzca la facturacion de la empresa");
	var tipo=prompt("Introduzca el tipo de iva");
	var nua=prompt("Introduzca el numero de articulos");
	
	var almacen4=new Almacen (ntienda,capitalS,fechaA,fis,fac,tipo,nua);
	almacen4.FechaReapertura=fechaA;
	mapaA.set(almacen4._Fiscal,almacen4);
	
}

function mostrar(){

	var nif=prompt("Introduzca el nif");
	if(mapaA.has(nif)){

			var empresa=mapaA.get(nif);


			alert("Empresa con nif:"+empresa._Fiscal+" Capital Social:"+empresa._CapitalSocial+" Fecha de Apertura:"+empresa._FechaReapertura
				 +" Facturacion:"+empresa._Facturacion+" Articulos:"+empresa._NumeroArticulos+" Importe de iva:"+empresa.ImporteIva());
	}else{
	alert("No existe ese almacen");
	}
}