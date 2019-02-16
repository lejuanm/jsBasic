window.addEventListener("load", () => {
  var formulario = document.querySelector("#form");

  formulario.addEventListener("submit", () => {
    var item = document.querySelector("#addPelicula").value;
    if (item.length >= 1) {
      localStorage.setItem(item, item);
    }
  });
  var include = document.querySelector(".card-body");
  for (let key in localStorage) {
    if (typeof localStorage[key] == "string") {
      var nodo = document.createElement("p");
      nodo.className = "card-text";
      nodo.append(localStorage[key]);
      include.append(nodo);
    }
  }
  var formulariob = document.querySelector("#formb");

  formulariob.addEventListener("submit", () => {
    var item = document.querySelector("#delPelicula").value;
    if (item.length >= 1) {
      localStorage.removeItem(item);
    }
  });
});
