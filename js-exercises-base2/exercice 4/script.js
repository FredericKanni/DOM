let raz = document.querySelector("button");

//https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
// querySelectorAll() crée un "tableau" qui stocke les valeur de touts les elements designé (ici les input)
let valeur = document.querySelectorAll("input");

raz.onclick = function()  {
    for (var item of valeur) {
        item.value = "";
      }
};