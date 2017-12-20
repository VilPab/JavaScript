class turne {
    
    constructor(vcodigo,vorigen,vdestino,vmedio,vduracion,vinicio,vk,vp) {
        this._CodigoViaje = vcodigo;
        this._Origen = vorigen;
        this._Destino = vdestino;
        this._Medio = vmedio;
        this._Duracion = parseInt(vduracion);
        this._FechaInicio = new Date(vinicio);
        this._Kilometros = parseInt(vk);
        this._Precio = parseFloat(vp);
    };

        get Duracion() {
            return this._Duracion;
        }
        set Duracion(value) {
            this._Duracion = value;
        }
        get FechaInicio() {
            return this._FechaInicio;
        }
        set FechaInicio(value) {
            this._FechaInicio = value;
        }
        get Kilometros() {
            return this._Kilometros;
        }
        set Kilometros(value) {
            this._Kilometros = value;
        }
        set Origen(valor){
                this._Origen=valor;
            }
        get Origen() {
                return this._Origen;
        }
        set Destino(valor){
                this._Destino=valor;
        }
        get Destino() {
                return this._Destino;
        }
        set CodigoViaje(valor){
                this._CodigoViaje=valor;
        }
        get CodigoViaje() {
                return this._CodigoViaje;
        }
        set Medio(valor){
                this._Medio=valor;
        }
        get Medio() {
                return this._Medio;
        }

        precioDia (){
            return this._Precio/this._Duracion;
        }

}
var arrayT=new Array();
function mostrar() {

    for (var i = 0; i < arrayT.length; i++) {
        let cadena = "Codigo:"+arrayT[i].CodigoViaje + ", Origen:" + arrayT[i].Origen + ", Precio Dia:" + arrayT[i].Kilometros;
        alert(cadena);
    }
}
function añadir() {
    var vcodigo=prompt("Codigo");
    var vorigen=prompt("Origen");
    var vdestino=prompt("Destino");
    var vmedio=prompt("Medio");
    var vduracion=prompt("Duracion");
    var vinicio=prompt("Inicio");
    var vk=prompt("Kilometros");
    var vp=prompt("Precio");


    var turne1= new turne(vcodigo,vorigen,vdestino,vmedio,vduracion,vinicio,vk,vp);

    arrayT.push(turne1);


}
function cambiarK() {
    var k= prompt("Kilometros");
    var c=parseInt(prompt("Codigo"));

    arrayT[0].Kilometros=k;

}