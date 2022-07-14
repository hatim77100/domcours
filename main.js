// window.onload = function(){  // on'attend que la page se charge
//     console.log("Je comprends");
// }

      // var nombre = prompt("saisir un nombre : ");
      // console.log("Le nombre saisi est " + nombre);
      // var partie1 = document.getElementById("partie1");
      // console.log(partie1);
      // var partie = document.getElementsByClassName("partie");
      // console.log(partie);
      // var titreH1 = document.getElementsByTagName("h1");
      // console.log(titreH1);
      // var titreH2 = document.getElementsByTagName("h2");
      // console.log(titreH2);
      // const imgBalise = document.getElementsByTagName("img");
      // console.log(imgBalise);
      // var partie1 = document.querySelector("#partie1");
      // console.log(partie1);
      // var parties = document.querySelectorAll(".partie");
      // console.log(parties);
      // var titreH1 = document.querySelector("h1");
      // console.log(titreH1);
      // var imgBalise = document.querySelector("img");
      // console.log(imgBalise);
      var baliseDiv = document.createElement("div");
      var contenu = "<p> Paragraphe numéro 1 </p> \n";
      contenu += "<hr> \n";
      contenu += "<p> Paragraphe numéro 2 </p> \n";
      baliseDiv.innerHTML = contenu;
      document.querySelector("body").appendChild(baliseDiv);

      //   Méthode 1:
      //   var baliseP = document.createElement("p");
      //   var textBaliseP = document.createTextNode("voici un paragraphe \n");
      //   var textBaliseP2 = document.createTextNode("voici un paragraphe 2");
      //   baliseP.appendChild(textBaliseP);
      //   baliseP.appendChild(textBaliseP2);

      //   var baliseP3 = document.querySelector("#partie3");
      //   baliseP3.appendChild(baliseP);

      //  Méthode 2 :
      var baliseP = document.createElement("p");
      baliseP.appendChild(document.createTextNode("voici un paragraphe \n"));
      baliseP.appendChild(document.createTextNode("voici un paragraphe 2"));

      document.querySelector("#partie3").appendChild(baliseP);

      //   Méthode 3
      var baliseP = document.createElement("p");
      baliseP.innerHTML = "voici autre méthode";
      baliseP.innerHTML += "paragraphe2";
      baliseP.id = "test";
      baliseP.className = "t2";
      document.querySelector("#partie3").appendChild(baliseP);

      //   // Ajouter un logo
      var baliseImage = document.createElement("img");
      baliseImage.src = "./images/logo.png";
      baliseImage.style = "width:100px; border:1px solid black;";
      //    document.querySelector("body").appendChild(baliseImage);
      document.body.appendChild(baliseImage);
      document.querySelector("#partie2").appendChild(baliseImage);

      //   AJOUTER UN NOEUD
      var baliseP = document.createElement("p");
        baliseP.innerHTML = "début du paragraphe";
        document.querySelector("#partie2").insertAdjacentElement("afterbegin",baliseP);
