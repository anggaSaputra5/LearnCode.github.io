const body = document.querySelector("body");
const light = document.querySelector("#light");
const light2 = document.querySelector("#light2");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector("#sidebar");
const kirim = document.querySelector("#kirim");
let nilai = 0;
let dark = 0;

light.addEventListener("click", function(){
    body.classList.toggle("light");
    if(dark == 0){
        light.innerHTML = '<button id="light"><i class="fa-solid fa-moon"></i></button>';
        dark = 1;
    }
    else{ 
        light.innerHTML = '<button id="light"><i class="fa-solid fa-sun"></i></button>';
        dark = 0;
    }
});
light2.addEventListener("click", function(){
    body.classList.toggle("light");
    if(dark == 0){
        light2.innerHTML = '<button id="light"><i class="fa-solid fa-moon"></i></button>';
        dark = 1;
    }
    else{ 
        light2.innerHTML = '<button id="light"><i class="fa-solid fa-sun"></i></button>';
        dark = 0;
    }
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

kirim.addEventListener("click", function(){
    alert("Maaf pesan anda tidak terkirim karena kami belum bisa membuat fitur pengiriman, kami akan membuat fitur tersebut sesegera mungkin :)");
<<<<<<< HEAD
});
=======
});
>>>>>>> 916974e56a5f51fd80f14e4efc6e52b2d480a810
