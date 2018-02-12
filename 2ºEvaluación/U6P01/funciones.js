if(window.addEventListener){
window.addEventListener("load",inicial);}
else{
    window.attachEvent("load",inicial);
}

function inicial() {
    var boton = document.getElementById("add")
    boton.addEventListener("click", añadir_def);
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