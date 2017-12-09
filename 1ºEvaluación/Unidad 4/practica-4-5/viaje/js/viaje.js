function generarViaje(vcodigo,vorigen,vdestino,vmedio,vduracion,vinicio,vk,vp) {

    var viaje = new Object()
    viaje.CodigoViaje = vcodigo;
    viaje.Origen = vorigen;
    viaje.Destino = vdestino;
    viaje.Medio = vmedio;
    viaje.Duracion =parseInt(vduracion);
    viaje.FechaInicio = new Date(vinicio);
    viaje.Kilometros = parseInt(vk);
    viaje.Precio = parseFloat(vp);


    viaje.FechaRegreso=function (){
        var fechar=new Date();
        var dias=fechar.getDate()+this.Duracion;
        fechar.setDate(dias);
        return fechar;
    }

    viaje.PrecioDia=function () {
        var precio=(this.Duracion/this.Precio);
        return precio;
    }
    viaje.PrecioKilometro=function () {
        var kilometro= this.Kilometros/this.Precio;
        return kilometro;
    }
}
var arrayViajes= new Array();

function seleccionarViaje() {
    var selec=prompt("Introduzca el codigo del viaje");
    var posicion=-1;
    for(var i=0;i<arrayViajes.length;i++){
        if(selec.indexOf(arrayViajes[i].CodigoViaje)!=-1) {
            posicion = i;
        }
    }
    return posicion;
}
function añadirViaje(viaje) {
    var selec=viaje.CodigoViaje;
    for(var i=0;i<arrayViajes.length;i++){
        if(selec.indexOf(arrayViajes[i].CodigoViaje)==-1) {
            arrayViajes.push(viaje);
        }
    }


}