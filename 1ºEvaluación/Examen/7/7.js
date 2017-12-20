function navegador(){

   document.writeln("Alto de la pagina "+window.innerHeight+"<br>");
   document.writeln("Ancho de la pagina "+window.innerWidth+"<br>");


   document.writeln("Alto completo "+window.outerHeight+"<br>");
   document.writeln("Ancho completo "+window.outerWidth+"<br>");


   if (navigator.userAgent.indexOf("Firefox") != -1) {
       document.writeln ("Su navegador es Mozilla Firefox");
   } else if (navigator.userAgent.indexOf("MSIE") != -1) {
       document.writeln ("Su navegador es Internet Explorer");
   } else if (navigator.userAgent.indexOf("Chrome") != -1) {
       document.writeln ("Su navegador es Google Chrome");
   } else if (navigator.userAgent.indexOf("Safari") != -1) {
       document.writeln ("Su navegador es Apple Safari");
   } else if (navigator.userAgent.indexOf("Opera") != -1) {
       document.writeln ("Su navegador es Opera");
   } else if (navigator.userAgent.indexOf("OPR") != -1) {
       document.writeln ("Su navegador es Opera");
   } else if (navigator.userAgent.indexOf(".NET CLR ") != -1) {
       document.writeln ("Su navegador es Internet Explorer");
   }
	
	
}