let image = document.querySelector('#image1');

image.onmouseover = function() {
    image.src = "images/image1_2.jpg";
}

image.onmouseout = function() {
    image.src = "images/image1.jpg";
}