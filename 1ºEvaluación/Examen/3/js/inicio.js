function Inicio(vcod,vden,vcif){
	
	this.CodigoEmpresa=parseInt(vcod);
	this.Denominacion=vden;
	
	this.__defineGetter__("CIF",function() { 
		return this._CIF;
	});
	this.__defineSetter__("CIF",function(vcif) {
		this._CIF=vcif;
	});
	
}