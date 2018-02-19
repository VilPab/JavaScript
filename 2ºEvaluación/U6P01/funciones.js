if(window.addEventListener){
window.addEventListener("load",inicial);}
else{
    window.attachEvent("load",inicial);
}

function inicial() {
    var boton = document.getElementById("add");
    var boton1= document.getElementById("addL")
    var boton2= document.getElementById("addC")
    boton.addEventListener("click", añadir_def);
    boton1.addEventListener("click", añadir_loc);
    boton2.addEventListener("click", añadir_coche);
}
function añadir_def() {
    //acceder a la lista
    var padre=document.getElementById("lista");
    //crear un termino <dt>
    var dt_lista=document.createElement("dt");
    //crear su nodo tipo texto con el contenido
    var valor=document.getElementById("palabra").value;
    var dato=document.createTextNode(valor);
    //añadir el nodo tipo texto al termino
    dt_lista.appendChild(dato);
    //crear una definicion <dd>
    var dd_lista=document.createElement("dd");
    //crear el nodo tipo texto de la def
    var valor2=document.getElementById("concepto").value;
    var dato2=document.createTextNode(valor2);
    //añadir el nodo tipo texto a la def
    dd_lista.appendChild(dato2);
    //añadir el termino a la lista
    padre.appendChild(dt_lista);
    //añadir la defincion
    padre.appendChild(dd_lista);

}

function añadir_loc() {
    //acceder a la lista
    var padre=document.getElementById("listaL");
    var hijos=padre.getElementsByTagName("li");
    var li;
    var dato;
    var valor=document.getElementById("localidad").value;

    var esta=false;
    var posicion=-1;


    var i=0;
    while(i<hijos.length && posicion==-1){
        if(hijos[i].textContent==valor){
           esta=true;
        }else{
        if(hijos[i].textContent>valor) {
            posicion = i;
        }
        }
        i++;
    }

    if(!esta){
        li=document.createElement("li");
        dato=document.createTextNode(valor);
        li.appendChild(dato);
        padre.insertBefore(li,hijos[posicion])
    }



}
function añadir_coche() {

    var hijo=document.querySelector("#tabla tbody");

    var todos=hijo.getElementsByTagName("tr");

    var celdas;
    var tr;
    var dato,dato1,dato2;
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var precio = document.getElementById("precio").value;
    var esta=true;
    var posicion = -1;
    var i=0;
    var primero=0;



    while ( i<todos.length) {

        var marcav = todos[i].getElementsByTagName("td");
        if (marcav[0].textContent == marca) {
            if (marcav[1].textContent < modelo) {
                posicion = i+1;
                esta=false;
            }else{
                posicion = i;
                esta=false;
            }

        } else {
            if(marcav[0]<marca){
                posicion=i+1;
                esta=false;
            }else{
                posicion=i;
                esta=false;
            }



        }
        i++;
    }
    if(posicion!=-1){
        tr=document.createElement("tr");
        var tmarca=document.createElement("td");
        var tmodelo=document.createElement("td");
        var tprecio=document.createElement("td");

        dato=document.createTextNode(marca);
        dato1=document.createTextNode(modelo);
        dato2=document.createTextNode(precio);

        tmarca.appendChild(dato);
        tmodelo.appendChild(dato1);
        tprecio.appendChild(dato2);

        tr.appendChild(tmarca);
        tr.appendChild(tmodelo);
        tr.appendChild(tprecio);

        hijo.insertBefore(tr,todos[posicion]);

    }

    if(esta){
        tr=document.createElement("tr");
        var tmarca=document.createElement("td");
        var tmodelo=document.createElement("td");
        var tprecio=document.createElement("td");

        dato=document.createTextNode(marca);
        dato1=document.createTextNode(modelo);
        dato2=document.createTextNode(precio);

        tmarca.appendChild(dato);
        tmodelo.appendChild(dato1);
        tprecio.appendChild(dato2);

        tr.appendChild(tmarca);
        tr.appendChild(tmodelo);
        tr.appendChild(tprecio);

        hijo.appendChild(tr);

    }

}
