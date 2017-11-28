function lib(ptitulo,pautor,peditorial,pprecio,piva,punidades,ptema,pfecha,paño) {
    this.titulo=ptitulo;
    this.autor=pautor;
    this.editorial=peditorial;
    this.precio=pprecio;
    this.iva=piva;
    this.unidades=punidades;
    this.tema=ptema;
    this.fecha=new Date(pfecha);
    this.ano=paño;


    this.__defineSetter__("fecha",function (fecha) {
        this.fecha=fecha;
    });
    this.__defineGetter__("fecha",function () {
        return this.fecha();
    });
    this.__defineGetter__("ano",function () {
        return this.ano.getFullYear();
    });

    this.pvp=function () {

        return this.precio+((this.precio*this.iva)/100);
    }

    this.compra=function (compradas) {

        this.unidades+=compradas;

    }

    this.venta=function () {
        if(this.unidades<1)return 0;
        else this.unidades=this.unidades-1; return 1;
        
    }
    this.precioCompra=function () {
        var precioC=this.pvp*0.55;
        return precioC;

    }

}
lib.prototype.isbn="";
lib.prototype.cotizacionEuro=1.3745;

lib.prototype.__defineGetter__("importeIva",function () {
    importeIva=parseFloat((lib.precio*lib.iva)/100);
    return importeIva;
});
lib.prototype.__defineSetter__("precioDolares",function (precio) {
    this.precioDolares=precio;

});
lib.prototype.__defineGetter__("precioDolares",function () {

    return this.precioDolares;
});
lib.prototype.fechar=function(){
    return this.fecha.toLocaleString();
}
