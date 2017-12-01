function lib(ptitulo,pautor,peditorial,pprecio,piva,punidades,ptema,pfecha) {
    this.titulo=ptitulo;
    this.autor=pautor;
    this.editorial=peditorial;
    this.precio=parseInt(pprecio);
    this.iva=parseInt(piva);
    this.unidades=parseInt(punidades);
    this.tema=ptema;
    this.fecha=pfecha;



    this.__defineSetter__("fecha",function (fecha) {
        this.fecha=fecha;
    });
    this.__defineGetter__("fecha",function () {
        return this.fecha;
    });
    this.__defineGetter__("ano",function () {
        return this.fecha.getFullYear();
    });
    this.__defineGetter__("tema",function () {
        return this.tema;
    });

    this.__defineSetter__("tema",function (tema) {
        this.tema=tema;
    });
    this.pvp=function () {

        return parseFloat(this.precio+((this.precio*this.iva)/100));
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
    importeIva=parseFloat((this.precio*this.iva)/100);
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
