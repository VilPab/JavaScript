var nombres = new Array("Jose","Carlos","Luis","Francis","Violeta","Jose");
function mostrar() {
    var cadenaN = "";
    for (var i = 0; i < nombres.length; i++) {
        cadenaN += nombres[i] + ",";
    }
    alert(cadenaN);
}
function añadir() {
    var nombre=prompt("Introduce un nombre");
    nombres.push(nombre);
    mostrar();

}
function buscar() {
    var posicion= new Array();
    var nombre=prompt("Introduce un nombre");
    var encontrado=false;
    for (var i = 0; i < nombres.length; i++) {
       if(nombre.indexOf(nombres[i])!=-1){
           encontrado=true;
           posicion.push(i);
       }
    }
    if(encontrado){
        alert("El nombre "+nombre+" existe");
        return posicion;
    }else{
        alert("El nombre "+nombre+" no existe");
    }

}
function repetido() {
    var contador=0;
    for (var i = 0; i < nombres.length; i++) {
        for(var x=0;x<nombres.length;x++)
        {
            if (nombres[i].indexOf(nombres[x]) != -1) {
                contador++;
            }
        }
        alert(nombres[i]+" se repite "+contador);
        contador=0;
    }

}
function palabraLarga() {
    var posicion,max=0;
    for (var i = 0; i < nombres.length; i++) {

            if (nombres[i].length>max) {
                max=nombres[i].length;
                posicion=i;

        }

    }
    alert("El mayor con "+max+" letras es "+nombres[posicion]);
    
}
function palabraCorta() {
    var posicion,min=255;

    for (var i = 0; i < nombres.length; i++) {

        if (nombres[i].length<min) {
            min=nombres[i].length;
            posicion=i;

        }

    }
    alert("El minimo con "+min+" letras es "+nombres[posicion]);

}
function borrar() {
    var nombre = prompt("Introduce un nombre");
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i].indexOf(nombre)) {
            nombres.splice(nombres[i], 1);
            i = i - 1;
        }
    }
}
function comparar() {

    var enc=false;

    var cont1=0;

    var aux=prompt("Introducir nombre a buscar");

    for(var i=0; i<nombres.length&&!enc;i++){

        if (aux==nombres[i]) {

            enc=true;

            cont1=cont1+1;

        }else{

            cont1=cont1+1;

        }

    }

    var cont2=0;

    var arrNom1=nombres;

    arrNom1.sort();

    var inicio = 0;

    var final1 = arrNom1.length - 1;

    var enc1=false;

    while((inicio<=final1)&&(!enc1)) {

        var medio=Math.floor((inicio + final1)/2);

        var aux1=nombres[medio];

        if(aux1==aux){

            enc1=true;

        }

        if(aux1>aux){

            final1=medio-1;

        } else {

            inicio=medio+1;

        }

        cont2=cont2+1;

    }

    if((enc)&&(enc1)){

        alert("Busqueda secuencial: "+cont1+" pasos");

        alert("Busqueda dicotomica: "+cont2+" pasos");

    }else{

        alert("No se ha encontrado");

    }

}

