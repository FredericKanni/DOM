let image = document.querySelector("img");

console.log(image);

image.onmouseover = function() {
    image.style = "border : 3px solid red";
}
image.onmouseout = function() {
    image.style = "";
}