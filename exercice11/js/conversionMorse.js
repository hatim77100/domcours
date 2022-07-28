
//    var noeudMessage = document.querySelector("#message");
//    var noeudMessageCode = document.querySelector("#msgCode");
//    noeudMessage.addEventListener("keyup", function (event) {
//      noeudMessageCode.value = encodeMessage(noeudMessage.value);
//    });

// encodeMessage("bonjour le monde");
// function encodeMessage(msg){
// var msgEncode = "";
// for(var i = 0 ; i < msg.length ; i++){
//     msgEncode += lettreAMorse(msg[i]) ;
// }
// return msgEncode
// }

// function lettreAMorse(lettre){
//     switch(lettre.toLowerCase()){
//         case 'a' : return ".-";
//         case 'b' : return "-...";
//         case 'c' : return "-.-.";
//         case 'd' : return "-..";
//         case 'e' : return ".";
//         case 'f' : return "..-.";
//         case 'g' : return "--.";
//         case 'h' : return "....";
//         case 'i' : return "..";
//         case 'j' : return ".---";
//         case 'k' : return "-.-";
//         case 'l' : return ".-..";
//         case 'm' : return "--";
//         case 'n' : return "-.";
//         case 'o' : return "---";
//         case 'p' : return ".--.";
//         case 'q' : return "--.-";
//         case 'r' : return ".-.";
//         case 's' : return "...";
//         case 't' : return "..-";
//         case 'u' : return "...-";
//         case 'v' : return ".--";
//         case 'w' : return "-..-";
//         case 'x' : return "-..-";
//         case 'y' : return "-.--";
//         case 'z' : return "--..";
//         case ' ' : return ' '; 
//     default      : return "";
//     }
// }