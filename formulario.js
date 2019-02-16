"use strict";
window.addEventListener("load", () => {
  var form = document.querySelector("#form");
  var card = document.querySelector(".card");
  var cardB = document.querySelector(".card-body");
  card.style.display = "none";

  console.log(form);

  form.addEventListener("submit", () => {
    console.log("Evento submit capturado");
    //TODO: Seleccionando campos
    var name = document.querySelector("#name").value;
    var lastN = document.querySelector("#lastN").value;
    var age = document.querySelector("#age").value;
    card.style.display = "block";
    var datosUsuario = [name, lastN, age];

    var index;
    for (index in datosUsuario) {
      var datos = document.createElement("p");
      datos.className = "card-text";

      datos.append(datosUsuario[index]);
      cardB.append(datos);
    }

    console.log(name);
  });
});
