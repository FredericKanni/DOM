let texte = document.querySelector("p");
let couleur = document.querySelectorAll(".color");

let vert = couleur[0];
let rouge = couleur[1];
let bleu = couleur[2];

vert.onclick = function() {
    //en remplacement de addClass 
    //http://www.trucsweb.com/tutoriels/javascript/css-classname/
    texte.className = "green";

    //retirer des class
    //texte.classList.remove('red');
    //texte.classList.remove('blue');
    //ajouter des class
    //texte.classList.add('green');
}
rouge.onclick = function() {
    texte.className = "red";
}
bleu.onclick = function() {
    texte.className = "blue";
}