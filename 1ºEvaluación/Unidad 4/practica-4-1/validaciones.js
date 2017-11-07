/*Crea una función llamada codigosControl que recibe tres parámetros que se
van a corresponder con el código del banco (4 dígitos), el número de la
sucursal (4 dígitos) y el número de cuenta (10 dígitos). Esta función va a
devolver un valor que es el código de control de la cuenta, el código de control
de una cuenta son dos dígitos. Para realizar el cálculo del código de control
deberemos realizar las siguientes operaciones:

ontinuamos con las cifras del número de cuenta, la primera cifra se
multiplica por 1, la segunda cifra se multiplica por 2, la tercera cifra se
multiplica por 4, la cuarta cifra se multiplica por 8, la quinta cifra se
multiplica por 5, la sexta cifra se multiplica por 10, la séptima cifra se
multiplica por 9, la octava cifra se multiplica por 7, la novena cifra se
multiplica por 3 y la décima cifra se multiplica por 6. Los valores de
esas multiplicaciones los vamos a sumar obteniendo numero3
*/


function codigosControl( banco,sucursal,cuenta) {

    var codigos;
    var numero;
    var numero1;
    var numero2;
    var numero3;
    var total;
    var control;



    codigos=banco.trim(banco.toString());

    numero1=(codigos.charAt(0)*4)+(codigos.charAt(1)*8)+(codigos.charAt(2)*5)+(codigos.charAt(3)*10);


    codigos=sucursal.trim(sucursal.toString());

    numero2=(codigos.charAt(0)*9)+(codigos.charAt(1)*7)+(codigos.charAt(2)*3)+(codigos.charAt(3)*6);


    total=numero1+numero2;

    total=total%11;

    total=11-total;

    if(total==11){
        total=0;
    }
    if(total==10){
        total=1;
    }

    codigos=cuenta.trim(cuenta.toString());
    numero3=(codigos.charAt(0)*1)+(codigos.charAt(1)*2)+(codigos.charAt(2)*4)+
        (codigos.charAt(3)*8)+(codigos.charAt(4)*5)+(codigos.charAt(5)*10) +(codigos.charAt(6)*9)+
    (codigos.charAt(7)*7)+(codigos.charAt(8)*3)+(codigos.charAt(9)*6);


    numero3=numero3%11;

    numero3=11-numero3;

    if(numero3==11){
        numero3=0;
    }
    if(numero3==10){
        numero3=1;
    }

    control=total.toString()+numero3.toString();


    return control;
}

function calculoIBANEspanya(cuenta) {


        x=cuenta.concat("ES00");

        x=x.replace("E",14);

        x=x.replace("S",28);



        //División entre 97 por ser un numero demasiado grande

        var resto=0;

        for (var i=0; i<x.length; i+=10) {

            var dividendo = resto + "" + x.substr(i, 10);

            resto = dividendo % 97;

        }



        var modulo=98-resto;

        var modulo=modulo.toString();

        var control;

        if (modulo.length==2){

            control=modulo;


        }else if (modulo < 10){

            modulo=modulo.toString();

            control="0"+modulo;

            alert(control);

        }

        var iban = "ES"+control+" "+cuenta;

        return iban;

    }

function getnumIBAN(letra) {
    ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return ls_letras.search(letra) + 10;
}
function comprobarIBAN(iban) {
    var x=iban;var valido=false;
    var pais= [
        ["DE",22],["BE",16],["CY",28],["DK",18],["SI",19],["EE",20],["FR",27],["HU",28],["IT",27],
        ["LT",20],["MT",31],["PL",28],["GB",22],["RO",24],["IS",26],["CH",21],["MC",27],["AT",20],
        ["BG",22],["HR",21],["SK",24],["ES",24],["FI",18],["GR",27],["IE",22],["LV",21],["LU",20],
        ["NL",18],["PT",25],["CZ",24],["SE",24],["NO",15],["SM",27],["LI",21]
    ];
    var control=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
        "V","W","X","Y","Z"];
    var letrapais=x.substring(0,2);
    alert("Letras "+letrapais);
    var numcontrol=x.substring(2,4);
    alert("Control "+numcontrol);
    var cuentapais=x.substring(4,x.length);
    alert("Cuenta "+cuentapais);
    var longitudpais;
    var i=0;var encontrado=false;
    while(i<pais.length && !encontrado){
        if (pais[i][0]==letrapais){
            longitudpais=pais[i][1];
            encontrado=true;
        }
        i++;
    }
    if(x.length==longitudpais){
        x=cuentapais.concat(letrapais.concat(numcontrol));
        alert("X "+x);
        //Bucle para sustituir las dos letras del pais por numeros
        for (var z=0;z<2;z++){
            i=0;encontrado=false;
            while(i<control.length){
                if (control[i]==letrapais[z]){
                    alert("Letra correcta :"+control[i]);
                    x=x.replace(control[i],(i+10));
                }
                i++;
            }
        }

        var aux=x;var resto;
        i=0;encontrado=false;
        while (i<5 && !encontrado){
            resto = aux.substring(0,10)%97;
            x2=resto.toString();
            aux=x2.concat(aux.substring(10,x.length));
            if (resto==1){
                encontrado=true;
            }
            i++;
        }

        if (resto==1)
            valido=true;
        else
            valido=false;
    }else
        valido=false;

    return valido;
}