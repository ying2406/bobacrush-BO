const blue = document.getElementById("js--blue");
const gray = document.getElementById("js--gray");
const pink = document.getElementById("js--pink");
const yellow = document.getElementById("js--yellow");

const switches = document.getElementsByClassName("product")

blue.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--blueModal").style.display = "grid";
}
const closeBlueModal = document.getElementById("js--closeBlue");
closeBlueModal.onclick = function(){
    document.getElementById("js--blueModal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }
}

gray.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--grayModal").style.display = "grid";
}
const closeGrayModal = document.getElementById("js--closeGray");
closeGrayModal.onclick = function(){
    document.getElementById("js--grayModal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }
}

pink.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--pinkModal").style.display = "grid";
}
const closePinkModal = document.getElementById("js--closePink");
closePinkModal.onclick = function(){
    document.getElementById("js--pinkModal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }
}
