
function Empresa (vcod,vden,vcif,vfec,vcap,vtipo,vsoc,vsuel){
	
	Inicio.call(this,vcod,vden,vcif);
	
	this.FechaConstitucion=new Date(vfec);
	this.NumeroSocios=parseInt(vsoc);
	this.SueldoMensual=parseInt(vsuel);
	
	
	this.__defineSetter__("Capital", function(vcap){
		this._Capital=parseInt(vcap);
	});
	
	this.__defineSetter__("TipoEmpresa", function(vtipo){
		this._TipoEmpresa=parseFloat(vtipo);
	});
	this.__defineGetter__("TipoEmpresa", function(){
		return this._TipoEmpresa;
	});
	this.__defineGetter__("CapitalSocios", function(){
		var capitalsocios=parseInt(this._Capital)/parseInt(this.NumeroSocios);
		return capitalsocios;
	});
	
	this.Anualidad=function(irpf,ss){
			var retencionI=(this.SueldoMensual*irpf)/100;
			var retencionS=(this.SueldoMensual*ss)/100;
			var sueldoneto=	this.SueldoMensual-retencionI-retencionS;
			var sueldoneto=sueldoneto*14;
		return sueldoneto;
	};
	
}

Empresa.prototype.__defineGetter__("Fechan",function(){
	return this._Fechan;
});

Empresa.prototype.__defineGetter__("Fechan",function(){
	this._Fechan=this.FechaConstitucion.getMonth()+"/"+this.FechaConstitucion.getDate()+
		"/"+this.FechaConstitucion.getFullYear();
});
Empresa.prototype.PrecioAccion;
Empresa.prototype.__defineGetter__("AccionesSocio",function(){
	var acc=parseFloat(this.CapitalSocios)/this.PrecioAccion;
	return this._AccionesSocio;
});
Empresa.prototype.VerCapital=function(conversion){
	var precio= this.Capital*parseFloat(conversion);
	return precio;
};
