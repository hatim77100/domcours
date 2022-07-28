var number1 = document.querySelector("#nb1").value;
var number2 = document.querySelector("#nb2").value;

document.getElementsByClassName("resultat").value = addition(number1, number2)

function addition(value1,value2){
    var nombre1 = parseInt(value1);
    var nombre2= parseInt(value2);
    result = nombre1 + nombre2;
    return result;
}

function soustraction(value1,value2){
    var nombre1 = parseInt(value1);
    var nombre2= parseInt(value2);
    result = nombre1 - nombre2;
    return result;
}

function multiplication(value1,value2){
    var nombre1 = parseInt(value1);
    var nombre2= parseInt(value2);
    result = nombre1 * nombre2;
    return result;
}

function division(value1,value2){
    var nombre1 = parseInt(value1);
    var nombre2= parseInt(value2);
    result = nombre1 / nombre2;
    return result;
}