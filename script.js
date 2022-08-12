const body = document.querySelector("body");
const light = document.querySelector("#light");
const light2 = document.querySelector("#light2");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector("#sidebar");
let nilai = 0;

light.addEventListener("click", function(){
    body.classList.toggle("light");
});
light2.addEventListener("click", function(){
    body.classList.toggle("light");
});

menu.addEventListener("click", function(){
    if( nilai == 0){
        sidebar.style.left = "0%";
        sidebar.style.transition = "linear 0.3s all";
        nilai = 1;
    }
    else{
        sidebar.style.left = "-50%";
        nilai = 0;
    }
});
