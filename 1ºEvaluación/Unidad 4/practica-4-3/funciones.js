function generarLibro(pcodigo,ptitulo,pautor,peditorial,pprecio,piva,punidades) {
    var libro = new Object();
    libro.codigo=pcodigo;
    libro.titulo=ptitulo;
    libro.autor=pautor;
    libro.editorial=peditorial;
    libro.precio=pprecio;
    libro.iva=piva;
    libro.unidades=punidades;

    libro.PVP=function () {
        var precioIva= libro.precio+(libro.precio*(libro.iva/100));


        return precioIva;

    }

    libro.Comprar=function (unidades) {
        libro.unidades=libro.unidades+unidades;
        alert("Añadidas "+unidades+" Unidades totales "+libro.unidades);
    }

    libro.Venta=function () {
        var vender;
        if(libro.unidades>=0){
            vender=true;
            libro.unidades=libro.unidades-1;
        }else{
            vender=false;
        }

        return vender;
    }
    libro.PrecioCompra=function () {
        var precioC=libro.precio-(libro.precio*0.45);
        alert("El precio de compra ha sido"+precioC);
        return precioC;
    }

    libro.Mostrar=function () {
        var vcodigo=libro.codigo;
        var vtitulo=libro.titulo;
        var vautor=libro.autor;
        var veditorial=libro.editorial;
        var vprecio=libro.precio;
        var viva =libro.iva;
        var vunidades=libro.unidades;
        var cadena="Codigo:"+vcodigo+", Titulo:"+vtitulo + ", Autor:"+vautor+", Editorial:"+veditorial+", Precio de venta:"+libro.PVP()+", Precio:"+vprecio+", Precio iva:"+viva+", Unidades:"+vunidades;
        return cadena;
    }


    return libro;

}


var libro1=generarLibro("1","El viejo y el mar","Hemiway","altaya",10,21,5);
var libro2=generarLibro("2","El quijote","Cervantes","Espasa",15,0.21,8);
var libro3=generarLibro("3","El nombre del viento","Patrick Routhfuss","Anaya",18,21,10);
var libros = new Array(libro1,libro2,libro3);




function libroTeclado() {
    var encontrado=false;
    var codigo=prompt("Introduce el codigo");
    for(var i = 0;i<libros.length;i++){
        if(libros[i].codigo==codigo){
            encontrado=true;
        }
    }
    if(!encontrado) {
        var titulo = prompt("Introduce el titulo");
        var autor = prompt("Introduce el autor");
        var editorial = prompt("Introduce la editorial");
        var precio = prompt("Introduce el precio");
        var iva = prompt("Introduce el iva");
        var unidadesT = prompt("Introduce las unidades");
        var libro1 = generarLibro(codigo, titulo, autor, editorial, parseFloat(precio), parseInt(iva, 10), parseInt(unidadesT, 10));
        libros.push(libro1);
        alert("Libro creado");
        return libro1;
    }else{
        alert("Libro no creado");
    }
}


function buscar() {
    var array = libros;
    var posicion=0;
    var encontrado=false;
    var codigo=prompt("Codigo del libro");
    for(var i=0; i<array.length;i++){
        if(array[i].codigo==codigo) {
            encontrado=true;
            posicion=i;
        }
    }
    if(encontrado){
    var cadena=array[posicion].Mostrar();
    alert("Libro encontrado\n"+cadena);
    }else{
    alert("Libro no encontrado");
}


}
function todo() {
    for(var i=0; i<libros.length;i++){
        var cadena=libros[i].Mostrar();
        alert(cadena);
    }

}