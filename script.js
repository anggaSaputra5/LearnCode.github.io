let body = document.querySelector("body");
let light = document.querySelector("#light");

light.addEventListener("click", function(){
    body.classList.toggle("light");
});