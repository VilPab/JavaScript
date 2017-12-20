/*
 * CodigoViaje propiedad de tipo cadena que contiene el código del
viaje.
b. Origen propiedad de tipo cadena que contiene la localidad de origen
del viaje.
c. Destino propiedad de tipo cadena que contiene la localidad de destino
del viaje.
d. Medio propiedad de tipo cadena que contiene el medio de transporte
utilizado en el viaje.
e. Duracion propiedad de tipo entera que contiene el número de días
que dura el viaje.
f. FechaInicio propiedad de tipo fecha que contiene la fecha de inicio del
viaje.
g. Kilometros propiedad de tipo fecha que contiene el número de
kilómetros que se recorren en el viaje.
h. Precio propiedad de tipo real que contiene el precio del viaje.
i. FechaRegreso método que devuelve la fecha en que se regresa del
viaje, se obtiene a partir de la fecha de inicio y la duración del mismo.
j. PrecioDia método que devuelve el precio por cada día de viaje, se
obtiene a partir del precio y la duración.
k. PrecioKilometro método que devuelve el precio por cada kilómetro
recorrido, se obtiene a partir del precio y los kilómetros del viaje
recorridos. */
function generarViaje(pCod,pOr,pDes,pMed,pDur,pFI,pK,pP,pFR,pPD,pPK) {
    var viaje= new Object();
    viaje.CodigoViaje=pCod;
    viaje.Origen=pOr;
    viaje.Destino=pDes;
    viaje.Medio=pMed;
    viaje.Duracion=parseInt(pDur);
    viaje.FechaInicio=pFI;
    viaje.Kilometros=pK;
    viaje.Precio=pP;
    viaje.FechaRegreso=pFR;
    viaje.PrecioDia=pPD;
    viaje.PrecioKilometro=pPK;

}
