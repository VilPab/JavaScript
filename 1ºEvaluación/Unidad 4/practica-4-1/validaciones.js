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

    numero1=(codigos.charAt(0)*5)+(codigos.charAt(1)*8)+(codigos.charAt(2)*5)+
        (codigos.charAt(1)*10);


    codigos=sucursal.trim(sucursal.toString());

    numero2=(codigos.charAt(0)*9)+(codigos.charAt(1)*7)+(codigos.charAt(2)*3)+
    (codigos.charAt(1)*6);


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
    var numeroC=cuenta.toString();
    var iban=numeroC+"142800";
    iban=parseInt(iban);
    var final;

    var numero=98-iban%97;

    if(numero<10){
        numero="0"+numero;
    }

    final="ES"+numero+numeroC;

    return final;
}

function comprobarIBAN(iban) {


    
}