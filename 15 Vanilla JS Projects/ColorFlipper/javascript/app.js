const colors = ["yellow", "red", "blue", "white", "black"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function(){
    //obtener un numero entre 0 - 4
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent=colors[randomNumber];
})

