let ecriture = document.querySelector("p");

let bouton = document.querySelectorAll("a");

let afficher = bouton[0];
let masquer = bouton[1];

afficher.onclick = function() {
    ecriture.style.display = "block";
}

masquer.onclick = function() {
    ecriture.style.display = "none";
}