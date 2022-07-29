document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var number1 = parseInt(document.getElementById("nb1").value);
  var number2 = parseInt(document.getElementById("nb2").value);
  var operation = document.querySelector("#operation").value;

  var resultat = 0;
  switch(operation) {
    case "+":
      resultat = number1 + number2;
      break;
    case "-":
      resultat = number1 - number2;
      break;
    case "*":
      resultat = number1 * number2;
      break;
    case "/":
      resultat = number1 / number2;
      break;
    default:
      "Erreur de calcul";
  }
  document.querySelector(".resultat").textContent = resultat;
});

// function addition(value1,value2){
//     var nombre1 = parseInt(value1);
//     var nombre2= parseInt(value2);
//     var result = nombre1 + nombre2;
//     return result;
// }

// function soustraction(value1,value2){
//     var nombre1 = parseInt(value1);
//     var nombre2= parseInt(value2);
//     var result = nombre1 - nombre2;
//     return result;
// }

// function multiplication(value1,value2){
//     var nombre1 = parseInt(value1);
//     var nombre2= parseInt(value2);
//     var result = nombre1 * nombre2;
//     return result;
// }

// function division(value1,value2){
//     var nombre1 = parseInt(value1);
//     var nombre2= parseInt(value2);
//     var result = nombre1 / nombre2;
//     return result;
// }
