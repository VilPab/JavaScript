class Tienda  {
    
    constructor(ntienda,capitalS,fechaA) {
		this._NumeroTienda=parseInt(ntienda);
		this._CapitalSocial=parseFloat(capitalS);
		this._FechaApertura=new Date(fechaA);
		this._AnoInicio=parseInt(this._FechaApertura.getFullYear());
	};
		get AnoInicio (){
			return _AnoInicio;	
		}
		
		 FechaInicio (){
			 var ano= this.AnoInicio;
			 var mes= this._FechaApertura.getMonth();
			 var dia= this._FechaApertura.getDate();
			 var cadena=dia+"/"+mes+"/"+ano;
            return cadena;
        }
		
		
	
}
	