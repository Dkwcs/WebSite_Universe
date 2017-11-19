


"use strict"

    var smallImg = document.getElementById("smallImg"), full = document.getElementById("full");



if (smallImg) {
    smallImg.addEventListener("click", function (e) {
        var filename = e.target.src.split("/").pop();
        full.src = "images/gallery/big/" + filename;

    }, false);
};





/*




 if (smallImg) {
 smallImg.addEventListener("click", function (e) {
 var filename = e.target.src.split("/").pop();
 var container = document.getElementById("modal");
 var image = document.createElement("img");
 image.src = "images/gallery/big/" + filename;
 container.appendChild(image);

 container.style.display = "block";

 container.addEventListener("click",function (e) {
 e.target.style.display = "none";
 })
 }, false);
 };

*/