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
    var nombre=prompt("Introduce un nombre");
    var encontrado=false;
    for (var i = 0; i < nombres.length; i++) {
       if(nombre.indexOf(nombres[i])!=-1){
           encontrado=true;
       }
    }
    if(encontrado){
        alert("El nombre "+nombre+" existe");
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