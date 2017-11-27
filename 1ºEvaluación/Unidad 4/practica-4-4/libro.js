function libro(ptitulo,pautor,peditorial,pprecio,piva,punidades,ptema,pfecha,paño) {
    this.titulo=ptitulo;
    this.autor=pautor;
    this.editorial=peditorial;
    this.precio=pprecio;
    this.iva=piva;
    this.unidades=punidades;
    this.tema=ptema;
    this.fecha=pfecha;
    this.año=paño;

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
}
