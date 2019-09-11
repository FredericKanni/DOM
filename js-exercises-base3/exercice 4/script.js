/*
inp1=document.querySelector('#motdepasse');
inp2=document.querySelector('#confirmation');

console.log(inp1);
console.log(inp2);

inp1.value = "";


function color (){

    if(inp1.value != inp2.value)
    {
        console.log("pas pareil");
        inp1.style  = "border : 3px solid red";
        inp2.style  = "border : 3px solid red";
    }
    else // if (inp1.value == inp2.value)
    {
        console.log("pareil");
        inp1.style  = "border : 3px solid green";
        inp2.style  = "border : 3px solid green";
    }

}


ts = color();

*/
/*
let valeur = document.querySelectorAll("input");
let colorGreen = "border : 3px green solid";
let colorRed = "border : 3px red solid";

let motsDePasse = valeur[0];
let motsDePasseVerification = valeur[1];

for(let i = 0; i < valeur.length; i++){
    valeur[i].onkeyup = function() {
        if (motsDePasse.value == motsDePasseVerification.value ) {
            valeur[0].style = colorGreen;
            valeur[1].style = colorGreen;
        }  else {
            valeur[0].style = colorRed;
            valeur[1].style = colorRed;
        }
    }
}
*/



let valeur = document.querySelectorAll("input");
let colorGreen = "border : 3px green solid";
let colorRed = "border : 3px red solid";

let motsDePasse = valeur[0];
let motsDePasseVerification = valeur[1];

for(let i = 0; i < valeur.length; i++){
    valeur[i].onkeyup = function() {
        if (motsDePasse.value == motsDePasseVerification.value  && motsDePasse.value !="" && motsDePasseVerification.value !="" ) {
            valeur[0].style = colorGreen;
            valeur[1].style = colorGreen;
        }  else  if (motsDePasse.value != motsDePasseVerification.value)
        
        {
            valeur[0].style = colorRed;
            valeur[1].style = colorRed;
        }
        //sinon si les deux valeurs vides
        else{
            valeur[0].style = "";
            valeur[1].style = "";
        }
    }
}