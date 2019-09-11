


// on cree un speudo- tableau qui stock tous les img
let image = document.querySelectorAll('img');
for(let i = 0; i < image.length; i++){
    image[i].onmouseover = function() {
        this.src = "images/image" + [i + 1] + "_2.jpg";
    };
    image[i].onmouseout = function() {
        this.src = "images/image" + [i + 1] + ".jpg";
    };
}



/*for(let i = 0; i < image.lenght; i++) {
    console.log(image[i]);
}*/

/*image.onmouseover = function() {
    this.src = "images/image1_2.jpg";
}

image.onmouseout = function() {
    image.src = "images/image1.jpg";
}*/

//let image = document.querySelector('img');
/*
function survole() {
   // quand la souris survole une image on lance la fonction
  // image.src = "images/image1_2.jpg";
   console.log('lol');
}


*/
//image.onmouseover = survole();

