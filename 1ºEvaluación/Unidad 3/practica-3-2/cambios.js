var padre=window.opener;
function cambiarpadre() {
    padre.cambiarnombre();
}
function cerrar() {
    close();
    padre.cerrarPadre();
}
function abrirSegunda() {
    padre.segunda();
}
function cambiarSegunda() {
    padre.cambioSegunda();
}