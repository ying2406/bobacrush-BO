let allGames = document.getElementsByClassName("game");
let openworldFilter = document.getElementById("checkbox-tropicaltea");
let rpgFilter = document.getElementById("checkbox-fruittea");
let actionFilter = document.getElementById("checkbox-milktea")
let filters = document.getElementsByClassName("filter");

window.scrollTo(0,0);
setInterval(function(){
  document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

for(let i = 0; i < filters.length; i++){
  filters[i].checked = true;
}

openworldFilter.onchange = function(){
  if(openworldFilter.checked === true){
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "Tropical tea"){
        console.log("hello")
        allGames[i].style.display = "block";
      }
    }
  }
  else{
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "Tropical tea"){
        console.log("hello")
        allGames[i].style.display = "none";
      }
    }
  }
}

rpgFilter.onchange = function(){
  if(rpgFilter.checked === true){
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "Fruit tea"){
        allGames[i].style.display = "block";
        console.log("hello")
      }
    }
  }
  else{
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "Fruit tea"){
        allGames[i].style.display = "none";
        console.log("bye")
      }
    }
  }
}

actionFilter.onchange = function(){
  if(actionFilter.checked === true){
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "Milk tea"){
        allGames[i].style.display = "block";
      }
    }
  }
  else{
    for (let i = 0; i < allGames.length; i++) {
      if(allGames[i].dataset.category === "Milk tea"){
        allGames[i].style.display = "none";
      }
    }
  }
}