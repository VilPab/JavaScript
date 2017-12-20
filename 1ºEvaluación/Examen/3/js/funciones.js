var arrayE= new Array();
function crearEmpresa(){
	var vcod=prompt("Introduzca el codigo de la empresa");
	var vden=prompt("Introduzca la denominacion de la empresa");
	var vcif=prompt("Introduzca el cif de la empresa");
	var vfec=prompt("Introduzca la fecha de la empresa");
	var vcap=prompt("Introduzca el capital de la empresa");
	var vtipo=prompt("Introduzca el tipo de empresa");
	var vsoc=prompt("Introduzca el numero de socios de la empresa");
	var vsuel=prompt("Introduzca el sueldo mensual de la empresa");
	var precio=prompt("Introduzca el precio de la accion de la empresa");
	var empresa1=new Empresa(vcod,vden,vcif,vfec,vcap,vtipo,vsoc,vsuel);
	empresa1.PrecioAccion=precio;
	empresa1.CIF=vcif;
	empresa1.TipoEmpresa=vtipo;
	empresa1.Capital=vcap;
	arrayE.push(empresa1);
}

function seleccionarEmpresa() {
        var selec=prompt("Introduzca el codigo de la empresa");
        var posicion=-1;
        for(var i=0;i<arrayE.length;i++){
            if(selec.indexOf(arrayE[i].CodigoEmpresa)!=-1) {
                posicion = i;
            }
        }
        return posicion;
    }


function mostrarEmpresa(){
		
		var posicion=seleccionarEmpresa();
		alert(posicion);
		var cadena= "Codigo:"+arrayE[posicion].CodigoEmpresa+
			" Denominacion:"+arrayE[posicion].CodigoEmpresa+
			" CIF:"+arrayE[posicion].CIF+
			" Fecha de constitucion:"+arrayE[posicion].Fechan+
			" Numero de socios:"+arrayE[posicion].NumeroSocios+
			" Sueldo mensual:"+arrayE[posicion].SueldoMensual+
			" Tipo de Empresa:"+arrayE[posicion].TipoEmpresa+
			" Capital Socios:"+arrayE[posicion].CapitalSocios+
			" Acciones Socio:"+arrayE[posicion].AccionesSocio;
	
		alert(cadena);
			
		
	}
		