const reviews = document.getElementsByClassName("reviews__review");
const Button = document.getElementsByClassName("button");
let modus = "one-two-three";

for(let i = 0; i < reviews.length; i++);

for(let i = 0; i < Button.length; i++){
Button[i].onclick = function(){
        if(modus === "one-two-three"){
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "flex";
            reviews[4].style.display = "flex";
            reviews[5].style.display = "flex";
            modus = "four-five-six";
        }
        else{
            reviews[0].style.display = "flex";
            reviews[1].style.display = "flex";
            reviews[2].style.display = "flex";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            modus = "one-two-three";
        }
    }
};

let variations = document.querySelectorAll('.choise');
variations.forEach(element => {
    element.addEventListener("click", function () {
        variations.forEach(btn => btn.classList.remove("active"))
        this.classList.add("active");
    })
})