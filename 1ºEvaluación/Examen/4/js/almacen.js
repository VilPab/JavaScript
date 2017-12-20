class Almacen extends Tienda{
	
	constructor(ntienda,capitalS,fechaA,fis,fac,tipo,nua) {
		super(ntienda,capitalS,fechaA)
		this._Fiscal=fis;
		this._Facturacion=parseFloat(fac);
		this._TipoIva=parseInt(tipo);
		this._NumeroArticulos=parseInt(nua);
		this._PrecioMedioArticulos=parseFloat(this._Facturacion/this._NumeroArticulos);
		
	};
		
		get PrecioMedioArticulos(){
			return this._PrecioMedioArticulos;
		
		}
		
		set Facturado(factura){
			this._Facturado=parseFloat(this._Facturacion+factura);
		}
		
		
		get FechaReapertura(){
			return this._FechaApertura;
		
		}
		
		set FechaReapertura(fecha){
			this._FechaApertura=new Date(fecha);
		}
	
		 AmpliacionCapital (capital){
			 this._CapitalSocial= this._CapitalSocial+capital;
            
        }
		ImporteIva (){
			 var importe=(this.Facturado*this._TipoIva)/100;
            return parseInt(importe);
        }
	
		


}